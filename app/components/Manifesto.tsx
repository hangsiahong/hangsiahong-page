'use client';

export default function Manifesto() {
    return (
        <section id="manifesto" className="py-24 bg-white dark:bg-black relative border-t border-gray-200 dark:border-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white text-center">
                        The <span className="text-blue-600 dark:text-blue-500">Zero Cost</span> Manifesto
                    </h2>

                    <div className="grid gap-12">
                        <div className="group">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-3">
                                <span className="text-blue-600 dark:text-blue-500">01.</span>
                                Constraints Breed Creativity
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pl-8 border-l-2 border-gray-200 dark:border-gray-800 group-hover:border-blue-500 transition-colors">
                                They say you need powerful servers and expensive cloud bills to serve users.
                                I say they're wrong. By leveraging modern free-tier offerings effectively,
                                we can build robust, scalable full-stack applications without spending a dime.
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-3">
                                <span className="text-purple-600 dark:text-purple-500">02.</span>
                                Open Source Everything
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pl-8 border-l-2 border-gray-200 dark:border-gray-800 group-hover:border-purple-500 transition-colors">
                                Knowledge should be free. Code should be accessible. I document my
                                entire process, opening the tech stack to everyone. If I can build it,
                                I'll teach you how to deploy it for free.
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-3">
                                <span className="text-green-600 dark:text-green-500">03.</span>
                                Performance First
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed pl-8 border-l-2 border-gray-200 dark:border-gray-800 group-hover:border-green-500 transition-colors">
                                Free doesn't mean slow. Using edge computing, static generation, and
                                efficient databases, my "free" stack often outperforms paid legacy
                                hosting options.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
