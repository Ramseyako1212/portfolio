import { type FC } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Briefcase, 
  Eye
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: FC = () => {
  const resumeUrl = '/assets/resume/RAMSEY_CLARK_INSOMA_RESUME.pdf';

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
              Download the official verified CV of Ramsey Clark C. Insoma, detailing formal education at Carlos Hilado Memorial State University, software systems, certifications, and technical proficiencies.
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

        {/* Content Layout: Summary Highlights on Left + Embedded Document Preview on Right */}
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

            {/* Resume Summary Highlights */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Featured In CV
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>WashQueue Capstone:</strong> Co-architect and developer of hybrid queuing PWA & Flutter mobile system with VADER multilingual sentiment analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>AI & Data Science:</strong> 4 verified credentials from Cisco Networking Academy & DICT-ITU DTC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Figma Prototypes:</strong> High-fidelity clickable design systems, component tokens, and user flow architectures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Testing Rigor:</strong> 32 of 32 passed Cypress automated end-to-end integration test suites.</span>
                </li>
              </ul>
            </div>

            {/* Quick Link Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-slate-800 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>Open Fullscreen PDF in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Right Column: Live Embedded PDF Viewer */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-4 rounded-3xl border border-white/10 shadow-2xl space-y-3">
              <div className="flex items-center justify-between px-2 pt-1 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Document Preview: RAMSEY_CLARK_INSOMA_RESUME.pdf</span>
                </div>
                <a
                  href={resumeUrl}
                  download="RAMSEY_CLARK_INSOMA_RESUME.pdf"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Direct Download
                </a>
              </div>

              {/* PDF Container */}
              <div className="w-full h-[650px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                <iframe
                  src={`${resumeUrl}#toolbar=1&navpanes=0`}
                  title="Ramsey Clark Insoma Resume Preview"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
