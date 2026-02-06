import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowLeft, ArrowRight, Shield, Activity, Globe } from 'lucide-react';
import { LocationData } from '../types';

interface LocationDetailProps {
    location: LocationData;
    onBack: () => void;
    onOpenProtocol: () => void;
}

const LocationDetail: React.FC<LocationDetailProps> = ({ location, onBack, onOpenProtocol }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-cream dark:bg-dark min-h-screen pt-32 pb-20 relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 md:pl-28 relative z-10">
                {/* Navigation */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-accent uppercase tracking-widest text-[10px] font-bold mb-12 hover:gap-4 transition-all group"
                >
                    <ArrowLeft size={16} />
                    Back to Principal Support
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Main Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <MapPin size={24} className="text-accent" />
                                <span className="text-xs uppercase tracking-[0.4em] font-bold text-accent/60">Regional Command</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-serif text-dark dark:text-cream leading-[0.9] tracking-tight mb-8">
                                {location.city} <br />
                                <span className="italic text-accent">{location.region}.</span>
                            </h1>

                            {/* The provided snippet seems to be trying to insert content here, but it's syntactically incorrect.
                                Assuming the intent was to replace the description paragraph or add new elements.
                                Based on the snippet, it looks like it's trying to replace the existing description paragraph
                                with a new structure that includes an h4 and a p tag, and then the location.description.
                                This would result in invalid HTML if placed directly as shown.
                                I will interpret this as an attempt to replace the existing description paragraph
                                with a new paragraph that has a different text color for light mode.
                                The snippet provided is:
                                <h4 className="font-serif text-2xl tracking-wide text-dark dark:text-cream mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>{app.name}</h4>
                                <p className="text-xs text-gray-900 dark:text-cream/80 leading-relaxed max-w-sm" style={{ fontFamily: 'Lato, sans-serif' }}>{app.desc}</p>
                                {location.description}
                                This looks like it's trying to insert content from another component or context (app.name, app.desc).
                                Given the instruction "Fix contrast... Replace light-gray text with darker shades for light mode",
                                and the snippet showing `text-gray-900` instead of `text-dark`, I will apply that change to the existing paragraph.
                                The `h4` and `p` with `app.name` and `app.desc` are not part of the current `LocationDetailProps` and would cause errors.
                                I will only apply the contrast fix to the existing `p` tag.
                            */}
                            <p className="text-xl md:text-2xl font-light text-themed-secondary leading-relaxed mb-12 max-w-2xl font-sans">
                                {location.description}
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-8 mb-16">
                                {location.stats.map((stat, i) => (
                    <div key={i} className="p-6 bg-themed-surface border border-themed rounded-2xl backdrop-blur-sm">
                        <div className="text-4xl font-serif text-accent mb-2">{stat.value}</div>
                        <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-themed-tertiary">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <button
                                    onClick={onOpenProtocol}
                                    className="px-10 py-5 bg-accent text-white font-bold rounded-xl flex items-center justify-center gap-4 shadow-xl shadow-accent/20 uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform"
                                >
                                    Secure Local Slot
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="bg-themed-secondary border border-themed rounded-3xl p-10 backdrop-blur-3xl shadow-themed-card relative"
                        >
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-xl">
                                <Shield size={24} />
                            </div>

                            <h3 className="text-2xl font-serif text-themed mb-8">Local Intelligence Protocol</h3>

                            <div className="space-y-6">
                                {location.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-1 group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Activity size={12} />
                                        </div>
                                        <p className="text-themed-secondary font-light leading-relaxed font-sans">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-themed">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-themed-tertiary">
                                    <Globe size={16} className="text-accent" />
                                    <span>discretion protocol active</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LocationDetail;
