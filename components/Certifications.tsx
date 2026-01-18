import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import { Award, ExternalLink, Filter } from 'lucide-react';
import { CERTIFICATIONS } from '../constants/certifications';
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animation-variants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications: React.FC = () => {
    const [selectedProvider, setSelectedProvider] = useState<string>('All');
    const { ref, controls } = useScrollAnimation();

    const providers = ['All', ...Array.from(new Set(CERTIFICATIONS.map(c => c.provider)))];

    const filteredCerts = selectedProvider === 'All'
        ? CERTIFICATIONS
        : CERTIFICATIONS.filter(c => c.provider === selectedProvider);

    const getProviderColor = (provider: string) => {
        const colors: Record<string, string> = {
            'AWS': 'from-orange-500 to-yellow-500',
            'IBM': 'from-blue-600 to-blue-400',
            'Udemy': 'from-purple-600 to-purple-400',
            'Harvard University': 'from-red-700 to-red-500'
        };
        return colors[provider] || 'from-slate-600 to-slate-400';
    };

    return (
        <Section id="certifications" title="Certifications" subtitle="19 Industry-Recognized Credentials" className="bg-darker">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerContainer}
            >
                {/* Filter Buttons */}
                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
                    {providers.map((provider) => (
                        <button
                            key={provider}
                            onClick={() => setSelectedProvider(provider)}
                            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${selectedProvider === provider
                                ? 'bg-gradient-primary text-white shadow-lg scale-105'
                                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            {provider}
                        </button>
                    ))}
                </motion.div>

                {/* Certifications Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedProvider}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {filteredCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                variants={scaleIn}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="group bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                                style={{
                                    boxShadow: 'var(--shadow-md)',
                                }}
                            >
                                {/* Provider Badge */}
                                <div className="absolute top-0 right-0 p-3">
                                    <div className={`bg-gradient-to-r ${getProviderColor(cert.provider)} w-2 h-2 rounded-full`} />
                                </div>

                                {/* Icon */}
                                <motion.div
                                    className="mb-3 md:mb-4 inline-flex p-2 md:p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-sm md:text-base font-semibold text-white mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] group-hover:text-primary transition-colors">
                                    {cert.name}
                                </h3>

                                <div className="flex items-center justify-between mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-700/50">
                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">Provider</p>
                                        <p className="text-xs md:text-sm font-medium text-slate-200">{cert.provider}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 mb-1">Year</p>
                                        <p className="text-xs md:text-sm font-medium text-slate-200">{cert.year}</p>
                                    </div>
                                </div>

                                {cert.credentialUrl && (
                                    <motion.a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 flex items-center gap-1 text-xs text-primary hover:text-blue-400 transition-colors"
                                        whileHover={{ x: 3 }}
                                    >
                                        View Credential <ExternalLink className="w-3 h-3" />
                                    </motion.a>
                                )}

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Summary Stats */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto px-4"
                >
                    {providers.filter(p => p !== 'All').map(provider => {
                        const count = CERTIFICATIONS.filter(c => c.provider === provider).length;
                        return (
                            <div key={provider} className="glass-morphism p-3 md:p-4 rounded-lg text-center">
                                <div className="text-xl md:text-2xl font-bold gradient-text mb-1">{count}</div>
                                <div className="text-xs text-slate-400">{provider}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default Certifications;
