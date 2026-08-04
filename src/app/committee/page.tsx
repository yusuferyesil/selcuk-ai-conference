import type { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { PageHeader } from "@/components/ui/PageHeader"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { committeeData } from "@/data/committee"
import { conferenceData } from "@/data/conference"

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

function CommitteeList({ title, members, layout = "grid" }: { title: string, members: CommitteeMember[], layout?: "grid" | "list" }) {
  if (!members || members.length === 0) return null;

  return (
    <MotionDiv variants={fadeUpVariant} className="mb-20 last:mb-0">
      <h2 className="text-3xl font-display font-medium mb-10 text-brand-black border-b border-brand-border pb-4 flex items-center justify-between">
        {title}
      </h2>

      {layout === "grid" ? (
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, i) => (
            <div key={i} className="group relative pl-6 border-l-2 w-full bg-brand-surface border-brand-border hover:border-brand-gold transition-colors py-4 px-6 shadow-soft">
              <h3 className="text-xl font-display font-semibold text-brand-black group-hover:text-brand-goldDark transition-colors">{member.name}</h3>
              {member.role && member.role !== "Member" && <p className="text-xs font-mono font-bold text-brand-gold uppercase tracking-widest mt-2">{member.role}</p>}
              <p className="text-brand-blackLight font-light text-sm mt-1">{member.affiliation}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {members.map((member, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="text-lg font-medium text-brand-black">{member.name}</h3>
              <p className="text-brand-blackLight font-light text-sm mt-1">{member.affiliation}</p>
              {member.role && member.role !== "Member" && (
                <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-brand-black bg-brand-border w-fit px-2 py-1">
                  {member.role}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </MotionDiv>
  )
}

export default function Committee() {
  return (
    <div className="pt-24 pb-10 bg-brand-bg">
      <PageHeader
        eyebrow="Organization"
        title="Conference Committees"
        description={`The distinguished academic professionals and researchers guiding the vision and execution of the ${conferenceData.name}.`}
      />

      <Section className="bg-brand-bg py-20">
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto">

          <CommitteeList title="General Chairs" members={committeeData.generalChairs} layout="grid" />
          <CommitteeList title="Vice Chairs" members={committeeData.viceChairs} layout="grid" />

          {committeeData.areaEditors && committeeData.areaEditors.length > 0 && (
            <MotionDiv variants={fadeUpVariant} className="mb-20">
              <h2 className="text-3xl font-display font-medium mb-10 text-brand-black border-b border-brand-border pb-4">
                Area Editors
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {committeeData.areaEditors.map((editor, i) => (
                  <div key={i} className="group relative pl-6 border-l-2 w-full bg-brand-surface border-brand-border hover:border-brand-gold transition-colors py-4 px-6 shadow-soft">
                    <span className="font-mono text-brand-gold text-[10px] uppercase tracking-[0.2em] font-semibold mb-2 block">{editor.area}</span>
                    <h3 className="text-xl font-display font-semibold text-brand-black group-hover:text-brand-goldDark transition-colors">{editor.name}</h3>
                    <p className="text-brand-blackLight font-light text-sm mt-1">{editor.affiliation}</p>
                  </div>
                ))}
              </div>
            </MotionDiv>
          )}

          <CommitteeList title="Scientific Committee" members={committeeData.scientificCommittee} layout="list" />
          <CommitteeList title="Organizing Committee" members={committeeData.organizingCommittee} layout="list" />
          <CommitteeList title="Local Organizing Committee" members={committeeData.localOrganizingCommittee} layout="list" />

        </MotionDiv>
      </Section>
    </div>
  )
}
