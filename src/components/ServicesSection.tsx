import { Smile, CircleDot, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20";

const services = [
    {
        icon: Smile,
        title: "Ortodontia",
        description: "Alinhamento dental com técnicas modernas. Aparelhos estéticos e alinhadores invisíveis para um sorriso harmonioso.",
        whatsappText: "Ortodontia",
    },
    {
        icon: CircleDot,
        title: "Implantes Dentários",
        description: "Recupere sua mastigação e sorriso com implantes de última geração. Tecnologia 3D para precisão e conforto.",
        whatsappText: "Implantes%20Dentários",
    },
    {
        icon: Sparkles,
        title: "Harmonização Orofacial",
        description: "Botox, preenchimentos e procedimentos estéticos para realçar sua beleza natural com resultados sutis e elegantes.",
        whatsappText: "Harmonização%20Orofacial",
    },
];

const ServicesSection = () => {
    return (
        <section id="servicos" className="section-padding bg-background">
            <div className="container-wide">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 opacity-0 animate-fade-in-up">
                    <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                        Tratamentos Especializados
                    </p>
                    <h2 className="text-headline text-foreground">
                        Cuidado completo para seu sorriso
                    </h2>
                    <p className="text-subheadline">
                        Oferecemos tratamentos personalizados com as técnicas mais avançadas
                        da odontologia moderna.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-2xl bg-surface-secondary border border-border 
                hover:bg-surface-tertiary hover:shadow-xl transition-all duration-500 
                opacity-0 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100 + 200}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                                <service.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <Button
                                variant="ghost"
                                className="p-0 h-auto text-foreground hover:bg-transparent group/btn"
                                asChild
                            >
                                <a href={`${WHATSAPP_LINK}${service.whatsappText}`} target="_blank" rel="noopener noreferrer">
                                    <span className="text-sm font-medium">Saiba mais</span>
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                </a>
                            </Button>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
