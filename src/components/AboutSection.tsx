import { type FC } from 'react';
import { 
  User, 
  GraduationCap, 
  Languages, 
  CheckCircle2, 
  MapPin, 
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Engineering Mindset</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Information Systems undergraduate at Carlos Hilado Memorial State University committed to building purposeful, high-reliability software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Developer Journey & Vision</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.longBio}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                I believe modern software engineering is at its best when strong algorithmic foundations, database discipline, and intuitive user experiences converge. From researching multilingual NLP algorithms for local dialects in Western Visayas to designing comprehensive interactive prototypes in Figma, my goal is always to deliver software that solves real operational bottlenecks.
              </p>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block">Core Technical Strengths:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Systems Thinking & Relational Modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Automated E2E & White-Box Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Figma UI/UX & Design Tokens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>AI-Assisted Workflow Efficiency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Multilingual Communication</h4>
                  <p className="text-xs text-slate-400">Natural proficiency in regional and international communication</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">English</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">Hiligaynon</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">Tagalog</span>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education & Academic Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Academic Background</h3>
                  <p className="text-xs font-mono text-slate-400">Formal education and institution records</p>
                </div>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-800">
                {personalInfo.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1">
                    {/* Timeline dot */}
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-slate-900" />
                    
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                      {edu.period}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs text-slate-300 font-medium">{edu.institution}</p>
                    <p className="text-xs text-slate-400">{edu.status}</p>
                    <p className="text-[11px] text-slate-500 font-mono flex items-center gap-1 pt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{edu.location}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Research Capstone Notice */}
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                  Senior Capstone Project
                </span>
                <p className="text-xs font-semibold text-white">
                  WashQueue — Hybrid Queuing & Scheduling System for Car Wash Businesses in Bacolod City
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Proponents: Francis Angelo S. Sase, Ramsey Clark C. Insoma, James Ryan S. Tinosan. Under the College of Computer Studies, CHMSU.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
