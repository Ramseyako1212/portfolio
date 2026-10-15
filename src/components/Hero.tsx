import { useState, type FC, type ChangeEvent } from 'react';
import { 
  ArrowRight, 
  Download, 
  Award, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Camera, 
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: FC = () => {
  const [profileImg, setProfileImg] = useState<string>(
    './assets/profile.png'
  );

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImg(url);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>BS Information Systems · Open for Developer Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <span>{personalInfo.title}</span>
              </p>
            </div>

            {/* Location & University */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Carlos Hilado Memorial State University</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Negros Occidental, Philippines</span>
              </div>
            </div>

            {/* Compelling Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Four Core Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              {/* 1. View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-glow-blue hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Download My Resume */}
              <a
                href="/assets/resume/RAMSEY_CLARK_INSOMA_RESUME.pdf"
                download="RAMSEY_CLARK_INSOMA_RESUME.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:bg-slate-800"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* 3. View My Certificates */}
              <a
                href="#certificates"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white font-medium text-sm transition-all hover:bg-slate-800/80"
              >
                <Award className="w-4 h-4 text-blue-400" />
                <span>Certifications</span>
              </a>

              {/* 4. Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white font-medium text-sm transition-all hover:bg-slate-800/80"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Email Fast-Access */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-[#0A66C2] hover:border-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-mono underline underline-offset-4"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-500 opacity-60 blur-lg group-hover:opacity-90 transition duration-700"></div>

              {/* Profile Card Container */}
              <div className="relative w-72 sm:w-80 p-3 rounded-3xl bg-[#0E131F] border border-cyan-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://avatars.githubusercontent.com/u/190347825?v=4';
                    }}
                  />
                  {/* Photo Replacement Overlay for User */}
                  <label 
                    htmlFor="avatar-upload" 
                    className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-slate-900/90 hover:bg-blue-600 border border-white/20 text-white cursor-pointer shadow-lg backdrop-blur-md transition-all"
                    title="Click to replace with your own photo"
                  >
                    <Camera className="w-4 h-4" />
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Identity Tag */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">{personalInfo.fullName}</p>
                    <p className="text-[10px] text-cyan-400 font-mono">@Ramseyako1212</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="w-full max-w-md mt-6 grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-200">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">{stat.description}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
