import { useState, type FC } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    if (project.images.length > 0) {
      setCurrentImgIdx((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images.length > 0) {
      setCurrentImgIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0E131F] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8 divide-y divide-white/5">
          
          {/* Screenshot Gallery with Carousel */}
          {project.images.length > 0 && (
            <div className="space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
                <img
                  src={project.images[currentImgIdx]}
                  alt={`${project.title} screenshot ${currentImgIdx + 1}`}
                  className="w-full h-full object-contain"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white transition-all backdrop-blur-sm"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white transition-all backdrop-blur-sm"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-black/70 text-[11px] font-mono text-slate-300 backdrop-blur-sm">
                  {currentImgIdx + 1} / {project.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIdx(idx)}
                      className={`relative w-20 h-12 flex-shrink-0 rounded-lg overflow-hidden border transition-all ${
                        idx === currentImgIdx ? 'border-cyan-400 ring-2 ring-cyan-400/30' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Role & Problem Statement */}
          <div className="pt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-xs text-slate-400 font-mono block">My Role & Contribution:</span>
                <span className="text-sm font-semibold text-cyan-300">{project.role}</span>
              </div>
              {project.metrics && (
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs text-slate-400 font-mono block">Evaluation & Test Results:</span>
                  <span className="text-sm font-semibold text-emerald-400">{project.metrics}</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                The Challenge / Problem Addressed
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-white/5">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Core System Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-white/5">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Architecture & Engineering */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Architecture & Implementation Details
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 text-xs sm:text-sm font-mono text-slate-300">
                  <span className="text-blue-400 mr-2">[{idx + 1}]</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Technologies & Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 border-t border-white/10 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            {project.repoName ? `Repo: ${project.repoName}` : 'Carlos Hilado Memorial State University'}
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all"
              >
                <span>Visit Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
