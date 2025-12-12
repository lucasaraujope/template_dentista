import { Button } from "../components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const CTASection = () => {
    return (
        <section className="section-padding bg-foreground">
            <div className="container-narrow text-center">
                <div className="space-y-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mx-auto opacity-0 animate-scale-in">
                        <Calendar className="w-8 h-8 text-background" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4 opacity-0 animate-fade-in-up animation-delay-100">
                        <h2 className="text-headline text-background">
                            Pronto para transformar seu sorriso?
                        </h2>
                        <p className="text-lg text-background/70 max-w-xl mx-auto">
                            Agende sua avaliação sem compromisso.
                            Primeira consulta com planejamento personalizado e orçamento transparente.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="opacity-0 animate-fade-in-up animation-delay-300">
                        <Button
                            size="xl"
                            className="bg-background text-foreground hover:bg-background/90 shadow-xl"
                            asChild
                        >
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                                Agendar pelo WhatsApp
                            </a>
                        </Button>
                    </div>

                    {/* Trust text */}
                    <p className="text-sm text-background/50 opacity-0 animate-fade-in-up animation-delay-400">
                        Resposta rápida • Atendimento humanizado • Sem filas
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
