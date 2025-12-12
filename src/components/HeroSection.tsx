import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Consultório odontológico moderno e acolhedor"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container-wide w-full">
                <div className="max-w-2xl space-y-8">
                    <div className="space-y-6 opacity-0 animate-fade-in-up">
                        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                            Odontologia de Excelência
                        </p>
                        <h1 className="text-display text-foreground">
                            Seu sorriso merece{" "}
                            <span className="block">cuidado especial</span>
                        </h1>
                        <p className="text-subheadline max-w-xl">
                            Transformamos sorrisos com tecnologia avançada e atendimento humanizado.
                            Sua saúde bucal em mãos especializadas.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-300">
                        <Button
                            variant="cta"
                            size="xl"
                            asChild
                            className="group"
                        >
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                                Agendar Avaliação
                            </a>
                        </Button>
                        <Button
                            variant="ctaOutline"
                            size="xl"
                            asChild
                        >
                            <a href="#servicos">
                                Conheça os Serviços
                            </a>
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap gap-8 pt-8 opacity-0 animate-fade-in-up animation-delay-500">
                        <div className="text-center">
                            <p className="text-3xl font-display font-semibold text-foreground">+10</p>
                            <p className="text-sm text-muted-foreground">Anos de experiência</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-display font-semibold text-foreground">+5.000</p>
                            <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-display font-semibold text-foreground">98%</p>
                            <p className="text-sm text-muted-foreground">Satisfação</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
