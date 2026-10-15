import { useState, type FC } from 'react';
import { 
  Palette, 
  ExternalLink, 
  Layout, 
  Sparkles, 
  MoveHorizontal,
  CheckCircle2
} from 'lucide-react';
import { designs } from '../data/portfolioData';

export const DesignShowcase: FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentDesign = designs[activeTab];

  return (
    <section id="designs" className="py-24 relative bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Palette className="w-3.5 h-3.5" />
              <span>UI/UX Architecture & Figma Prototypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Design Systems, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Wireframes & Prototypes</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              From low-fidelity structural blueprints to production design tokens and fully clickable Figma prototypes. Built for intuitive usability, accessibility compliance, and seamless developer handoff.
            </p>
          </div>

          <a
            href={currentDesign.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all self-start md:self-end"
          >
            <span>Open in Figma</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {designs.map((design, idx) => (
            <button
              key={design.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                activeTab === idx
                  ? 'bg-slate-900 border-cyan-500/50 shadow-glow-sm'
                  : 'bg-slate-950/40 border-white/5 hover:border-white/10 hover:bg-slate-900/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                  {design.type}
                </span>
                <span className="text-xs text-slate-500 font-mono">{design.tool}</span>
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight">{design.title}</h4>
            </button>
          ))}
        </div>

        {/* Interactive Feature Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Wireframe vs High-Fi Slider */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Layout className="w-3.5 h-3.5 text-slate-500" />
                  Low-Fi Blueprint (Left)
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  High-Fi Interactive Screen (Right)
                </span>
              </div>

              {/* Slider Image Viewer */}
              <div 
                className="relative aspect-[16/10] rounded-xl overflow-hidden select-none bg-slate-950 border border-white/10 cursor-ew-resize"
                onMouseMove={(e) => {
                  if (e.buttons === 1) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                    setSliderPos(pos);
                  }
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
                  setSliderPos(pos);
                }}
              >
                {/* Background Image: High Fidelity Screen */}
                <img
                  src={currentDesign.previewImage}
                  alt="High Fidelity"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground Image: Low Fidelity / Wireframe Screen (Clipped) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-cyan-400 bg-slate-900"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentDesign.previewImage}
                    alt="Low Fidelity Blueprint"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                    style={{
                      width: '100%',
                      minWidth: '100%',
                      maxWidth: 'none'
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-300">
                    WIREFRAME
                  </div>
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-cyan-950/80 text-[10px] font-mono text-cyan-300">
                  HIGH-FIDELITY
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg pointer-events-none transition-transform"
                  style={{ left: `${sliderPos}%` }}
                >
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Slider Controller */}
              <div className="pt-2 flex items-center gap-4">
                <span className="text-[11px] font-mono text-slate-500">Drag comparison:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <span className="text-[11px] font-mono text-cyan-400 w-8 text-right">{Math.round(sliderPos)}%</span>
              </div>
            </div>
          </div>

          {/* Right: Design Rationale & Token Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{currentDesign.type}</span>
                <h3 className="text-xl font-bold text-white tracking-tight">{currentDesign.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  {currentDesign.description}
                </p>
              </div>

              {/* Design Problem & Solution */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block mb-1">Design Problem:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentDesign.problem}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">UX Solution:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentDesign.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Interface Features:</span>
                <ul className="space-y-1.5">
                  {currentDesign.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design System Tokens */}
              {currentDesign.tokens && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Design System Palette Tokens:</span>
                  <div className="flex items-center gap-2">
                    {currentDesign.tokens.palette.map((color, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 h-8 rounded-lg border border-white/20 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                        <span className="text-[9px] font-mono text-slate-400">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={currentDesign.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all"
                >
                  <span>Inspect Prototype in Figma</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
