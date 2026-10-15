import { useState, type FC } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  PenTool, 
  CheckCircle, 
  Cpu, 
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'PenTool': return <PenTool className="w-4 h-4" />;
      case 'CheckCircle': return <CheckCircle className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Demonstrated Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">Engineering Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Grounded in production capstone development, machine learning benchmark experiments, and automated test-driven architectures.
          </p>
        </div>

        {/* Skill Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setSelectedIdx(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                selectedIdx === idx
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/5'
              }`}
            >
              {getIcon(cat.iconName)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {getIcon(skillCategories[selectedIdx].iconName)}
                </span>
                <span>{skillCategories[selectedIdx].name}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                {skillCategories[selectedIdx].description}
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 self-start sm:self-auto">
              {skillCategories[selectedIdx].skills.length} Core Disciplines
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories[selectedIdx].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white tracking-tight">{skill.name}</span>
                  {skill.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-cyan-300 border border-cyan-500/20">
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                </div>

                {/* Evidence / Practical Context */}
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  <span className="text-cyan-400/80">Context: </span>
                  {skill.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
