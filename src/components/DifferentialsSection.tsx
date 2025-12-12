import { Heart, Cpu, ShieldCheck, Sparkles } from "lucide-react";

const differentials = [
    {
        icon: Heart,
        title: "Atendimento Personalizado",
        description: "Cada paciente recebe atenção exclusiva com plano de tratamento individualizado.",
    },
    {
        icon: Cpu,
        title: "Tecnologia Moderna",
        description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficientes.",
    },
    {
        icon: ShieldCheck,
        title: "Ambiente Seguro",
        description: "Protocolos rigorosos de biossegurança em ambiente confortável e acolhedor.",
    },
    {
        icon: Sparkles,
        title: "Saúde e Estética",
        description: "União perfeita entre funcionalidade e beleza para resultados que transformam vidas.",
    },
];

const DifferentialsSection = () => {
    return (
        <section id="diferenciais" className="section-padding bg-surface-secondary">
            <div className="container-wide">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 opacity-0 animate-fade-in-up">
                    <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                        Por que nos escolher
                    </p>
                    <h2 className="text-headline text-foreground">
                        Excelência em cada detalhe
                    </h2>
                </div>

                {/* Differentials Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentials.map((item, index) => (
                        <div
                            key={index}
                            className={`text-center p-8 rounded-2xl bg-background border border-border 
                hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100 + 200}ms` }}
                        >
                            <div className="w-16 h-16 rounded-full bg-surface-tertiary flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentialsSection;
