import { Smile, CircleDot, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "../hooks/useScrollAnimation";

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
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="servicos" className="section-padding bg-background overflow-hidden">
            <div className="container-wide">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-2xl mx-auto mb-16 space-y-4 scroll-animate ${headerVisible ? 'visible' : ''}`}
                >
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
                <div
                    ref={cardsRef}
                    className={`grid md:grid-cols-3 gap-8 stagger-children ${cardsVisible ? 'visible' : ''}`}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-surface-secondary border border-border hover-lift cursor-default"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-foreground/10 group-hover:scale-110">
                                <service.icon className="w-7 h-7 text-foreground transition-transform duration-500 group-hover:rotate-6" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-display font-semibold text-foreground mb-3 transition-colors duration-300">
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
                                    <span className="text-sm font-medium relative">
                                        Saiba mais
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover/btn:w-full" />
                                    </span>
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                </a>
                            </Button>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />

                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 animate-shimmer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
