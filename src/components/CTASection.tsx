import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const CTASection = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <section className="section-padding bg-foreground overflow-hidden">
            <div ref={ref} className="container-narrow text-center">
                <div className="space-y-8">
                    {/* Icon */}
                    <div
                        className={`w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mx-auto scroll-animate-scale ${isVisible ? 'visible' : ''}`}
                    >
                        <Calendar className="w-8 h-8 text-background animate-pulse-soft" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div
                        className={`space-y-4 scroll-animate ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <h2 className="text-headline text-background">
                            Pronto para transformar seu sorriso?
                        </h2>
                        <p className="text-lg text-background/70 max-w-xl mx-auto">
                            Agende sua avaliação sem compromisso.
                            Primeira consulta com planejamento personalizado e orçamento transparente.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div
                        className={`scroll-animate ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <Button
                            size="xl"
                            className="bg-background text-foreground hover:bg-background/90 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                            asChild
                        >
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                                Agendar pelo WhatsApp
                            </a>
                        </Button>
                    </div>

                    {/* Trust text */}
                    <p
                        className={`text-sm text-background/50 scroll-animate ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Resposta rápida • Atendimento humanizado • Sem filas
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
