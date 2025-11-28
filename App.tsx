
import React, { useState, lazy, Suspense } from 'react';
import { PROFILE, KEY_STATS, STRIP_STATS, SERVICES, CONTENT_PILLARS } from './constants';
import { StatCard } from './components/StatCard';
import { ContactModal } from './components/ContactModal';
import { Mail, Instagram, ArrowRight, Youtube } from 'lucide-react';

// Lazy load heavy components for better performance
const AudienceCharts = lazy(() => import('./components/AudienceCharts').then(module => ({ default: module.AudienceCharts })));
const PostGallery = lazy(() => import('./components/PostGallery').then(module => ({ default: module.PostGallery })));

const App: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleContact = () => {
        setIsContactOpen(true);
    };

    return (
        <div className="min-h-screen paper-texture pb-24 md:pb-12 text-gray-800 font-sans overflow-x-hidden">
            {/* Wrapper ID was used for PDF, kept for structure */}
            <div id="media-kit-content">
                {/* Navigation / Header */}
                <nav className="sticky top-0 z-50 pt-2 px-2 print:hidden">
                    <div className="max-w-5xl mx-auto bg-white border-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                        <span className="font-hand text-3xl font-bold text-gray-900">Bonialeart<span className="text-pink-600">.</span></span>
                        <div className="flex gap-3">
                            <a href={PROFILE.socials.youtube} target="_blank" rel="noreferrer" className="p-2 border-2 border-gray-200 hover:border-gray-900 hover:bg-red-100 transition-colors text-gray-900 rounded-sm" title="Subscribe on YouTube">
                                <Youtube size={20} />
                            </a>
                            <a href={PROFILE.socials.instagram} target="_blank" rel="noreferrer" className="p-2 border-2 border-gray-200 hover:border-gray-900 hover:bg-yellow-100 transition-colors text-gray-900 rounded-sm">
                                <Instagram size={20} />
                            </a>
                            <button
                                onClick={handleCopyLink}
                                className="p-2 border-2 border-gray-200 hover:border-gray-900 hover:bg-green-100 transition-colors text-gray-900 rounded-sm font-hand font-bold text-sm"
                                title="Share Media Kit"
                            >
                                {copied ? "COPIED!" : "SHARE"}
                            </button>
                        </div>
                    </div>
                </nav>

                <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                    {/* Profile Section */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">

                        {/* Left Col: Avatar & Bio */}
                        <div className="md:col-span-4 relative group">
                            {/* Tape for Profile */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-white/40 border border-white/50 shadow-sm rotate-3 backdrop-blur-sm z-20"></div>

                            <div className="bg-white p-5 pt-8 shadow-lg border border-gray-200 rotate-1 transition-transform group-hover:rotate-0">
                                <div className="w-full aspect-square mb-4 p-2 bg-white border border-gray-100 shadow-inner">
                                    <img
                                        src={PROFILE.avatar}
                                        alt={PROFILE.name}
                                        className="w-full h-full object-cover filter contrast-110 sepia-[0.1]"
                                    />
                                </div>

                                <div className="text-center relative">
                                    <h1 className="font-hand text-4xl font-bold text-gray-900 mb-1 transform -rotate-2">{PROFILE.name}</h1>
                                    <p className="text-gray-500 font-medium mb-4 font-mono text-xs uppercase tracking-widest">{PROFILE.realName}</p>

                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {PROFILE.tags.map((tag, i) => (
                                            <span key={tag} className={`px-2 py-1 border-2 border-gray-900 text-gray-900 text-xs font-hand font-bold ${i % 2 === 0 ? 'bg-yellow-200 rotate-1' : 'bg-blue-200 -rotate-1'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={PROFILE.socials.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 text-lg font-hand font-bold hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_#ccc] hover:shadow-[2px_2px_0px_0px_#ccc] hover:translate-x-[2px] hover:translate-y-[2px]"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                        {PROFILE.handle}
                                    </a>

                                    <p className="mt-6 text-gray-700 font-hand text-lg leading-relaxed text-left border-t-2 border-dashed border-gray-200 pt-4">
                                        "{PROFILE.bio}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Col: Key Stats */}
                        <div className="md:col-span-8 space-y-8 mt-4 md:mt-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {KEY_STATS.map((stat, idx) => (
                                    <StatCard
                                        key={idx}
                                        label={stat.label}
                                        value={stat.value}
                                        highlight={idx === 1} // Highlight Engagement Rate
                                    />
                                ))}
                            </div>

                            {/* Analytics Strip (Dymo Tape Style) */}
                            <div className="bg-gray-900 p-2 transform -rotate-1 shadow-xl">
                                <div className="border-2 border-white/20 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                                    {STRIP_STATS.map((stat, idx) => (
                                        <div key={idx} className="text-center w-full">
                                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1 font-mono">{stat.label}</div>
                                            <div className="text-3xl md:text-4xl font-hand font-bold text-white">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content Pillars */}
                            <div className="relative pt-6">
                                <div className="absolute -top-4 right-10 font-hand text-2xl text-gray-400 rotate-3">Things I talk about...</div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {CONTENT_PILLARS.map((pillar, idx) => (
                                        <div key={idx} className="bg-white p-4 border-2 border-gray-100 hover:border-gray-900 transition-colors flex flex-col items-center text-center shadow-sm">
                                            <div className={`p-3 rounded-full mb-3 ${pillar.color} border-2 border-black`}>
                                                {pillar.icon}
                                            </div>
                                            <h3 className="font-hand font-bold text-gray-900 text-xl mb-1">{pillar.title}</h3>
                                            <p className="text-sm text-gray-500 font-sans">{pillar.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Audience Insights */}
                    <section className="relative">
                        <div className="absolute -left-4 top-0 w-8 h-32 bg-yellow-400/20 -rotate-2"></div>
                        <div className="flex items-center justify-between mb-8 pl-4">
                            <div>
                                <h2 className="text-4xl font-hand font-bold text-gray-900">Audience <span className="text-pink-600 underline decoration-wavy decoration-2">Stats</span></h2>
                                <p className="text-gray-500 font-hand text-xl mt-1 ml-1">Who is watching?</p>
                            </div>
                            <span className="font-mono text-xs font-bold text-gray-500 bg-white border border-gray-300 px-3 py-1 shadow-sm rotate-2">UPDATED: 18 DAYS AGO</span>
                        </div>
                        <Suspense fallback={
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
                                <div className="bg-white p-6 pt-10 relative shadow-md rotate-1 h-96">
                                    <div className="absolute -top-3 right-1/2 transform translate-x-1/2 w-32 h-8 bg-white/40 border border-white/50 shadow-sm -rotate-2 backdrop-blur-sm z-10"></div>
                                    <div className="h-4 bg-gray-200 rounded w-24 mb-6"></div>
                                    <div className="h-64 bg-gray-100 rounded"></div>
                                </div>
                                <div className="bg-white p-6 pt-10 relative shadow-md -rotate-1 h-96">
                                    <div className="absolute -top-3 left-8 w-24 h-8 bg-white/40 border border-white/50 shadow-sm rotate-1 backdrop-blur-sm z-10"></div>
                                    <div className="h-4 bg-gray-200 rounded w-24 mb-6"></div>
                                    <div className="h-64 bg-gray-100 rounded"></div>
                                </div>
                            </div>
                        }>
                            <AudienceCharts />
                        </Suspense>
                    </section>

                    {/* Services / Work With Me */}
                    <section>
                        <div className="text-center mb-12 relative">
                            <span className="inline-block bg-black text-white px-4 py-1 font-mono text-sm uppercase tracking-widest -rotate-2 mb-2">Collaboration</span>
                            <h2 className="text-5xl font-hand font-bold text-gray-900">Work With Me</h2>
                            <div className="h-1 w-24 bg-pink-500 mx-auto mt-2 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {SERVICES.map((service, idx) => (
                                <div key={idx} className="bg-white p-8 border-2 border-gray-100 hover:border-pink-500 transition-all group relative">
                                    {/* Corner Tape */}
                                    <div className="absolute -top-3 -right-3 w-16 h-8 bg-white/50 border border-gray-200 shadow-sm rotate-45 backdrop-blur-sm z-10"></div>

                                    <div className="w-14 h-14 bg-gray-50 border-2 border-gray-900 rounded-none flex items-center justify-center text-gray-900 mb-4 group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-hand font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans border-l-4 border-gray-100 pl-4">{service.description}</p>
                                    <div className="flex items-center gap-2 text-pink-600 font-bold font-hand text-lg group-hover:translate-x-1 transition-transform cursor-pointer" onClick={handleContact}>
                                        Inquire for rates <ArrowRight size={18} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Top Posts */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <h2 className="text-4xl font-hand font-bold text-gray-900">Top Posts</h2>
                            <span className="px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold -rotate-6 shadow-md border-2 border-white">VIRAL</span>
                        </div>
                        <Suspense fallback={
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2 animate-pulse">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-white p-3 shadow-md rotate-1">
                                        <div className="aspect-[4/5] bg-gray-200 mb-3"></div>
                                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                                    </div>
                                ))}
                            </div>
                        }>
                            <PostGallery />
                        </Suspense>
                    </section>

                    {/* Contact Footer Area */}
                    <div className="flex flex-col items-center justify-center mt-20 mb-8 gap-6 p-8 bg-white border-2 border-dashed border-gray-300 relative print:hidden">
                        <div className="absolute -top-4 w-32 h-8 bg-gray-200/50 rotate-1"></div>
                        <p className="font-hand text-3xl text-gray-400">Ready to create something amazing?</p>
                    </div>
                </main>
            </div>

            {/* Sticky Mobile/Desktop CTA */}
            <div className="fixed bottom-6 right-6 z-40 print:hidden">
                <button
                    onClick={handleContact}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold font-hand text-xl px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-all transform hover:-translate-y-1 flex items-center gap-3 -rotate-2"
                >
                    <Mail className="w-6 h-6" />
                    LET'S TALK!
                </button>
            </div>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                emailAddress={PROFILE.socials.email}
            />
        </div>
    );
};

export default App;