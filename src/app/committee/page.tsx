import { Section } from "@/components/ui/Section"
import { MotionDiv, fadeUpVariant, staggerContainer } from "@/components/ui/MotionDiv"
import { committeeData } from "@/data/committee"
import { cn } from "@/lib/utils"

function CommitteeList({ title, members, layout = "grid" }: { title: string, members: any[], layout?: "grid" | "list" }) {
  if (!members || members.length === 0) return null;
  
  return (
    <MotionDiv variants={fadeUpVariant} className="mb-20 last:mb-0">
      <h2 className="text-3xl font-display font-medium mb-10 text-brand-black border-b border-brand-border pb-4 flex items-center justify-between">
        {title}
      </h2>
      
      {layout === "grid" ? (
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, i) => (
            <div key={i} className="group relative pl-6 border-l w-full bg-brand-surface border-brand-border hover:border-brand-accent transition-colors py-4">
              <h3 className="text-xl font-medium text-brand-black group-hover:text-brand-accent transition-colors">{member.name}</h3>
              {member.role && member.role !== "Member" && <p className="text-sm font-semibold text-brand-black uppercase tracking-widest mt-2">{member.role}</p>}
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
      <Section className="py-24 border-b border-brand-border bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none"></div>
        <MotionDiv variants={fadeUpVariant} className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 text-brand-black">Conference Committees</h1>
          <div className="w-12 h-1 bg-brand-accent mx-auto mb-8"></div>
          <p className="text-xl text-brand-blackLight font-light leading-relaxed max-w-2xl mx-auto">
            The distinguished academic professionals and researchers guiding the vision and execution of the International Conference on AI Across Disciplines.
          </p>
        </MotionDiv>
      </Section>
      
      <Section className="bg-brand-bg py-20">
        <MotionDiv variants={staggerContainer} className="max-w-5xl mx-auto">
          
          <CommitteeList title="General Chairs" members={committeeData.generalChairs} layout="grid" />
          <CommitteeList title="Vice Chairs" members={committeeData.viceChairs} layout="grid" />
          
          {/* Dedicated Area Editors Highlight */}
          {committeeData.areaEditors && committeeData.areaEditors.length > 0 && (
            <MotionDiv variants={fadeUpVariant} className="mb-24 mt-10">
              <div className="bg-brand-black text-white p-10 md:p-14 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-display font-medium mb-4 text-white">Area Editors</h2>
                  <div className="w-12 h-1 bg-brand-accent mb-10"></div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {committeeData.areaEditors.map((editor, i) => (
                      <div key={i} className="flex flex-col border-t border-brand-gray/20 pt-6">
                        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">{editor.area}</span>
                        <h3 className="text-xl font-medium text-white mb-1">{editor.name}</h3>
                        <p className="text-brand-gray font-light text-sm">{editor.affiliation}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
