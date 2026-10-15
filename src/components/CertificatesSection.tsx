import { useState, type FC, type MouseEvent, type FormEvent } from 'react';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Plus, 
  Copy, 
  Check, 
  UploadCloud,
  X
} from 'lucide-react';
import { certificates as initialCertificates, personalInfo } from '../data/portfolioData';
import type { Certificate } from '../types';
import { CertificateModal } from './CertificateModal';

export const CertificatesSection: FC = () => {
  const [certList, setCertList] = useState<Certificate[]>(initialCertificates);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Manual Add Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newId, setNewId] = useState('');
  const [newSkills, setNewSkills] = useState('');

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'ai-data', label: 'AI & Data Science' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'cloud', label: 'Systems & Cloud' },
    { id: 'literacy', label: 'Digital Architecture' }
  ];

  const handleCopyId = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddCertificate = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newIssuer) return;

    const newCert: Certificate = {
      id: `cert-custom-${Date.now()}`,
      title: newTitle,
      issuer: newIssuer,
      issueDate: newDate || 'Verified',
      credentialId: newId || undefined,
      category: 'ai-data',
      skills: newSkills.split(',').map((s) => s.trim()).filter(Boolean),
      verified: true
    };

    setCertList([newCert, ...certList]);
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewId('');
    setNewSkills('');
  };

  const filteredCerts = certList.filter(
    (c) => selectedCategory === 'all' || c.category === selectedCategory
  );

  return (
    <section id="certificates" className="py-24 relative bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Industry Credentials</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Authentic certifications earned through DICT, Cisco Networking Academy, LinkedIn Learning, and enterprise technical seminars. Verified by credential identification UUIDs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/40 text-xs font-mono text-cyan-300 transition-all hover:bg-slate-800"
            >
              <Plus className="w-4 h-4" />
              <span>Add Certificate</span>
            </button>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveModalCert(cert)}
              className="group glass-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between hover:border-cyan-500/40 transition-all"
            >
              <div className="space-y-4">
                {/* Card Top: Issuer & Status */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{cert.issueDate}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight line-clamp-2">
                  {cert.title}
                </h3>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-cyan-950/30 text-cyan-400 text-[11px] font-mono">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Credential ID if present */}
                {cert.credentialId && (
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-slate-500 truncate mr-2">ID: {cert.credentialId.slice(0, 16)}...</span>
                    <button
                      onClick={(e) => handleCopyId(cert.credentialId!, e)}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                      title="Copy full credential ID"
                    >
                      {copiedId === cert.credentialId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === cert.credentialId ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-white/5 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Details & Preview</span>
                </span>
                {cert.pdfUrl && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/50 text-blue-300 border border-blue-500/20">
                    PDF Attached
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for viewing details and PDF */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />

      {/* Manual Certificate Upload Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0E131F] border border-cyan-500/30 rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-cyan-400" />
                Add Verified Certificate
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCertificate} className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Certificate Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AWS Cloud Practitioner / Google Data Analytics"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Issuing Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cisco, DICT, Coursera, Google"
                  value={newIssuer}
                  onChange={(e) => setNewIssuer(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Issue Date</label>
                  <input
                    type="text"
                    placeholder="e.g. October 2026"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Credential UUID</label>
                  <input
                    type="text"
                    placeholder="e.g. 7f4a8b9c-..."
                    value={newId}
                    onChange={(e) => setNewId(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Skills (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Cloud Security, Microservices, Network Protocols"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm"
                >
                  Save Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
