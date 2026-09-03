const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const pages = walkSync('./src/app/[lang]').filter(f => f.endsWith('page.tsx'));

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add lang param to component signature if it doesn't have it
  if (!content.includes('params }: { params: Promise<{ lang: Locale }> }') && 
      !content.includes('params: Promise<{ lang: Locale }>')) {
    
    // Some pages might not have a params argument yet.
    // e.g. export default function About() {
    content = content.replace(/export default function (\w+)\(\) \{/, (match, name) => {
      changed = true;
      return `import { Locale } from "@/i18n"\n\nexport default async function ${name}({ params }: { params: Promise<{ lang: Locale }> }) {\n  const resolvedParams = await params;\n  const lang = resolvedParams.lang || "en";\n`;
    });
  }

  // Replace <Link href="/..." with <Link href={`/${lang}/...`}
  // Watch out for already fixed links or external links.
  const linkRegex = /<Link\s+href="\/([^"]*)"/g;
  if (linkRegex.test(content)) {
    changed = true;
    content = content.replace(linkRegex, (match, p1) => {
      // if p1 is empty, it's href="/"
      return `<Link href={\`/\${lang}${p1 ? '/' + p1 : ''}\`}`;
    });
  }

  // Same for single quotes
  const linkRegexSQ = /<Link\s+href='\/([^']*)'/g;
  if (linkRegexSQ.test(content)) {
    changed = true;
    content = content.replace(linkRegexSQ, (match, p1) => {
      return `<Link href={\`/\${lang}${p1 ? '/' + p1 : ''}\`}`;
    });
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
