import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Consultório odontológico moderno e acolhedor"
          className="w-full h-full object-cover animate-scale-in"
          style={{ animationDuration: "1.5s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-foreground/3 rounded-full blur-2xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container-wide w-full">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground opacity-0 animate-fade-in-down animation-delay-100">
              Odontologia de Excelência
            </p>
            <h1 className="text-display text-foreground opacity-0 animate-blur-in animation-delay-200">
              Seu sorriso merece{" "}
              <span className="block">cuidado especial</span>
            </h1>
            <p className="text-subheadline max-w-xl opacity-0 animate-fade-in-up animation-delay-400">
              Transformamos sorrisos com tecnologia avançada e atendimento humanizado. 
              Sua saúde bucal em mãos especializadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-500">
            <Button
              variant="cta"
              size="xl"
              asChild
              className="group transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Agendar Avaliação
              </a>
            </Button>
            <Button
              variant="ctaOutline"
              size="xl"
              asChild
              className="transition-all duration-300 hover:scale-105"
            >
              <a href="#servicos">
                Conheça os Serviços
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 pt-8">
            {[
              { value: "+10", label: "Anos de experiência" },
              { value: "+5.000", label: "Pacientes atendidos" },
              { value: "98%", label: "Satisfação" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <p className="text-3xl font-display font-semibold text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
        <a 
          href="#sobre" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="text-xs tracking-wider uppercase">Conheça mais</span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
