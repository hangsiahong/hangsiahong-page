'use client';

export default function WorkExperience() {
    const works = [
        {
            company: 'KOOMPI',
            role: 'Enterprise Software Engineer',
            period: 'Present',
            description: 'Building the next generation of sovereign computing infrastructure.',
            products: [
                {
                    name: 'KOOMPI Cloud',
                    description: 'A sovereign cloud infrastructure platform designed for enterprise and government data privacy.',
                    tech: ['Rust', 'Go', 'Kubernetes'],
                    type: 'Infrastructure'
                },
                {
                    name: 'KOOMPI OS',
                    description: 'A custom Linux distribution optimized for education and enterprise productivity.',
                    tech: ['Linux', 'Shell Scripting', 'C++'],
                    type: 'Operating System'
                },
                {
                    name: 'KOOMPI AI',
                    description: 'Localized AI models and inference engines focused on Khmer language processing.',
                    tech: ['Python', 'PyTorch', 'LLMs'],
                    type: 'Artificial Intelligence'
                }
            ]
        }
    ];

    return (
        <section className="py-24 bg-background relative border-b border-gray-200 dark:border-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-foreground text-center">
                    Enterprise <span className="text-purple-600 dark:text-purple-500">Engineering</span>
                </h2>

                <div className="max-w-6xl mx-auto">
                    {works.map((work, idx) => (
                        <div key={idx} className="relative">
                            {/* Company Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-foreground mb-2">{work.company}</h3>
                                    <p className="text-xl text-purple-600 dark:text-purple-400">{work.role}</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-muted-foreground text-sm">
                                        {work.period}
                                    </span>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {work.products.map((product, pIdx) => (
                                    <div
                                        key={pIdx}
                                        className="group bg-gray-50 dark:bg-gray-900/30 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all hover:bg-gray-100 dark:hover:bg-gray-900/50"
                                    >
                                        <div className="mb-6">
                                            <span className="text-xs font-bold tracking-wider text-purple-600 dark:text-purple-500 uppercase mb-2 block">
                                                {product.type}
                                            </span>
                                            <h4 className="text-xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {product.name}
                                            </h4>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 min-h-[80px]">
                                            {product.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {product.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
