import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { committeeData } from "@/data/committee"
import { conferenceData } from "@/data/conference"
import { getDictionary, Locale } from "@/i18n"

export const metadata: Metadata = {
  title: "Committees",
  description: "The academic professionals and researchers organizing the conference.",
}

interface CommitteeMember {
  name: string;
  role?: string;
  affiliation: string;
  area?: string;
}

const areaMapTr: Record<string, string> = {
  "Law & Policy": "Hukuk & Politika",
  "Health Sciences": "Sağlık Bilimleri",
  "Education & Social Sciences": "Eğitim & Sosyal Bilimler",
  "Theology & Islamic Studies": "İlahiyat & İslami İlimler",
  "Engineering": "Mühendislik",
  "Philosophy & Letters": "Felsefe & Edebiyat",
  "Social Sciences & Communication": "Sosyal Bilimler & İletişim",
  "Economics & Finance": "Ekonomi & Finans",
  "Agriculture & Sustainability": "Tarım & Sürdürülebilirlik",
};

function CommitteeList({ title, members, layout = "grid", lang }: { title: string, members: CommitteeMember[], layout?: "grid" | "list", lang: Locale }) {
  if (!members || members.length === 0) return null;

  return (
    <MotionDiv variants={fadeUpVariant} className="mb-20 last:mb-0">
      <h2 className="text-3xl font-display font-medium mb-10 text-brand-black border-b border-brand-border pb-4 flex items-center justify-between">
        {title}
      </h2>

      {layout === "grid" ? (
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, i) => {
            const memberRole = member.role === "General Chair (Rector)" 
              ? (lang === "tr" ? "Genel Başkan (Rektör)" : member.role)
              : member.role;

            return (
              <div key={i} className="group relative pl-6 border-l-2 w-full bg-brand-surface border-brand-border hover:border-brand-gold transition-colors py-4 px-6 shadow-soft">
                <h3 className="text-xl font-display font-semibold text-brand-black group-hover:text-brand-goldDark transition-colors">{member.name}</h3>
                {memberRole && memberRole !== "Member" && memberRole !== "Üye" && (
                  <p className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest mt-2">{memberRole}</p>
                )}
                <p className="text-brand-blackLight font-light text-sm mt-1">{member.affiliation}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {members.map((member, i) => {
            const memberRole = member.role === "General Chair (Rector)" 
              ? (lang === "tr" ? "Genel Başkan (Rektör)" : member.role)
              : member.role;

            return (
              <div key={i} className="flex flex-col">
                <h3 className="text-lg font-medium text-brand-black">{member.name}</h3>
                <p className="text-brand-blackLight font-light text-sm mt-1">{member.affiliation}</p>
                {memberRole && memberRole !== "Member" && memberRole !== "Üye" && (
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-brand-black bg-brand-border w-fit px-2 py-1">
                    {memberRole}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </MotionDiv>
  )
}

export default async function Committee({ params }: { params: Promise<{ lang: Locale }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";
  const t = getDictionary(lang);

  return (
    <div className="pt-24 pb-10 bg-brand-bg">
      <PageHeader
        eyebrow={t.committeePage.eyebrow}
        title={t.committeePage.title}
        description={t.committeePage.desc}
      />

      <Section className="bg-brand-bg py-20">
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto">

          <CommitteeList title={t.committeePage.generalChairs} members={committeeData.generalChairs} layout="grid" lang={lang} />
          <CommitteeList title={t.committeePage.viceChairs} members={committeeData.viceChairs} layout="grid" lang={lang} />

          {committeeData.fieldEditors && committeeData.fieldEditors.length > 0 && (
            <MotionDiv variants={fadeUpVariant} className="mb-20">
              <h2 className="text-3xl font-display font-medium mb-10 text-brand-black border-b border-brand-border pb-4">
                {t.committeePage.fieldEditors}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {committeeData.fieldEditors.map((editor, i) => {
                  const areaTitle = lang === "tr" && editor.area && areaMapTr[editor.area] ? areaMapTr[editor.area] : editor.area;
                  return (
                    <div key={i} className="group relative pl-6 border-l-2 w-full bg-brand-surface border-brand-border hover:border-brand-gold transition-colors py-4 px-6 shadow-soft">
                      {areaTitle && (
                        <span className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.2em] font-semibold mb-2 block">
                          {areaTitle}
                        </span>
                      )}
                      <h3 className="text-xl font-display font-semibold text-brand-black group-hover:text-brand-goldDark transition-colors">{editor.name}</h3>
                      <p className="text-brand-blackLight font-light text-sm mt-1">{editor.affiliation}</p>
                    </div>
                  );
                })}
              </div>
            </MotionDiv>
          )}

          <CommitteeList title={t.committeePage.scientificCommittee} members={committeeData.scientificCommittee} layout="list" lang={lang} />
          <CommitteeList title={t.committeePage.organizingCommittee} members={committeeData.organizingCommittee} layout="list" lang={lang} />
          <CommitteeList title={t.committeePage.localOrganizingCommittee} members={committeeData.localOrganizingCommittee} layout="list" lang={lang} />

        </MotionDiv>
      </Section>
    </div>
  )
}
