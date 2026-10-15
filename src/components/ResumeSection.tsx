import { type FC } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone,
  Code2,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: FC = () => {
  const resumeUrl = './assets/resume/RAMSEY_CLARK_INSOMA_RESUME.pdf';

  return (
    <section id="resume" className="py-24 relative bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Resume & Credentials</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Verified CV of Ramsey Clark C. Insoma detailing formal education at Carlos Hilado Memorial State University, software architectures, Cisco/DICT certifications, and technical competencies.
            </p>
          </div>

          {/* Primary Download CTA */}
          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download="RAMSEY_CLARK_INSOMA_RESUME.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold text-sm shadow-glow-md hover:shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Snapshot */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Identity & Status */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">Applicant Overview</span>
                <h3 className="text-xl font-bold text-white">{personalInfo.fullName}</h3>
                <p className="text-xs text-slate-300 font-mono mt-0.5">{personalInfo.title}</p>
              </div>

              <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Degree:</span>
                  <span className="text-slate-200">BS Information Systems</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">University:</span>
                  <span className="text-slate-200">CHMSU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="text-slate-200">Negros Occidental, PH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-emerald-400">Available for Opportunities</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a
                href={resumeUrl}
                download="RAMSEY_CLARK_INSOMA_RESUME.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-glow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-slate-800 transition-colors"
              >
                <span>Open PDF in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Interactive Digital Resume Preview */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 bg-slate-900/90">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{personalInfo.fullName}</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">{personalInfo.title}</p>
                </div>
                <a
                  href={resumeUrl}
                  download="RAMSEY_CLARK_INSOMA_RESUME.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-500/20 transition-all self-start sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Contact Pill Row */}
              <div className="flex flex-wrap gap-3 text-xs text-slate-300 font-mono pb-2">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.phone}</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Negros Occidental, PH</span>
              </div>

              {/* Summary Statement */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">Professional Summary</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-white/5">
                  Hardworking and motivated Information Systems specialist with proven full-stack and UI/UX design competency. Co-architect of the WashQueue hybrid queuing platform, experienced with VADER regional sentiment NLP, cross-platform mobile apps, and automated Cypress test execution.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  Education
                </span>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <h4 className="font-bold text-white">Bachelor of Science in Information Systems (BSIS)</h4>
                      <p className="text-slate-400">Carlos Hilado Memorial State University (CHMSU) · Talisay/Bacolod City</p>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 px-2.5 py-1 rounded-md self-start sm:self-auto">Expected 2026/2027</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <h4 className="font-bold text-white">Technical-Vocational-Livelihood (TVL) Senior High School</h4>
                      <p className="text-slate-400">Eva J. Montilla Farm School · Cauayan, Negros Occidental</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md self-start sm:self-auto">2019 — 2023</span>
                  </div>
                </div>
              </div>

              {/* Featured Systems & Experience */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-bold flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Featured Systems & Key Projects
                </span>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">WashQueue — Hybrid Queuing & Scheduling System</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">32/32 Cypress Pass</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      Co-Architect and developer. Built multi-role PWA and Flutter app with Leaflet geolocation, real-time waiting times, and custom VADER regional Hiligaynon/Tagalog sentiment engine.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Movie Popularity Prediction Machine Learning Research</span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded">R² = 0.84</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      Quantitative benchmark research applying Ridge regression and supervised algorithms on Kaggle metadata to predict cinematic box-office engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Certifications Badges */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Verified Credentials
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">Introduction to Data Science (Cisco/DICT)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">Introduction to Modern AI (Cisco/DICT)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">Introduction to Cybersecurity (Cisco)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">Using Computer & Mobile Devices (Cisco)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
