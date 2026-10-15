import { useState, type FC } from 'react';
import { X, ExternalLink, Download, CheckCircle2, ShieldCheck, Copy, Check, Award, FileCheck } from 'lucide-react';
import type { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#0E131F] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Verified Credential</span>
              <h3 className="text-lg font-bold text-white tracking-tight">{certificate.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Issuing Organization:</span>
              <p className="text-sm font-semibold text-white">{certificate.issuer}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Date Issued / Verified:</span>
              <p className="text-sm font-semibold text-white">{certificate.issueDate}</p>
            </div>
          </div>

          {/* Credential ID Verification */}
          {certificate.credentialId && (
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Credential Verification UUID:</span>
                <p className="text-xs sm:text-sm font-mono text-slate-200 break-all">{certificate.credentialId}</p>
              </div>
              <button
                onClick={handleCopyId}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-500/30 transition-all flex-shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          )}

          {/* Assessed Skills */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Assessed Technical Competencies:</span>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Official Verification Certificate Plate */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/20 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-glow-sm">
              <Award className="w-7 h-7" />
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block font-bold">
                Official Credential Record
              </span>
              <h4 className="text-base font-bold text-white">{certificate.title}</h4>
              <p className="text-xs text-slate-400">{certificate.issuer} · {certificate.issueDate}</p>
            </div>

            {/* Document Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              {certificate.pdfUrl && (
                <>
                  <a
                    href={certificate.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Certificate (PDF)</span>
                  </a>
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/10 bg-slate-900/80 flex items-center justify-between gap-3">
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Verified Authentic Record
          </span>
          <div className="flex items-center gap-3">
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-all"
              >
                <span>Verify with Issuer</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
