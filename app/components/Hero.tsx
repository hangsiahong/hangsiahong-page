'use client';

import { config } from '../config';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#050505]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="inline-flex gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wide">
                        ENTERPRISE ENGINEER
                    </span>
                    <span className="text-gray-400 dark:text-gray-600">|</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide">
                        OPEN SOURCE MAKER
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">
                    Building <span className="text-purple-600 dark:text-purple-500">Scale.</span> <br />
                    Shipping <span className="text-blue-600 dark:text-blue-500">Free.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    I engineer enterprise-grade OS & Cloud infrastructure by day,
                    and build zero-cost open source tools by night.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold transition-transform hover:scale-105"
                    >
                        See What I Build
                        <span className="absolute inset-0 rounded-lg bg-black/20 dark:bg-white/20 blur-lg transition-opacity opacity-0 group-hover:opacity-100" />
                    </a>

                    <a
                        href={`https://github.com/${config.github.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-lg font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
