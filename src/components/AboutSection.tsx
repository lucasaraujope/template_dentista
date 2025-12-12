import { Award, GraduationCap, Heart, Sparkles } from "lucide-react";
import dentistImage from "../assets/dentist-portrait.jpg";

const credentials = [
    {
        icon: GraduationCap,
        title: "Formação",
        description: "Graduação em Odontologia pela USP",
    },
    {
        icon: Award,
        title: "Especialização",
        description: "Ortodontia e Implantodontia",
    },
    {
        icon: Sparkles,
        title: "Certificação",
        description: "Harmonização Orofacial",
    },
    {
        icon: Heart,
        title: "Filosofia",
        description: "Atendimento humanizado e acolhedor",
    },
];

const AboutSection = () => {
    return (
        <section id="sobre" className="section-padding bg-surface-secondary">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="relative opacity-0 animate-scale-in">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={dentistImage}
                                alt="Dra. Ana Carolina - Dentista"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-muted-foreground/20 rounded-2xl -z-10" />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4 opacity-0 animate-fade-in-up">
                            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                                Conheça a Especialista
                            </p>
                            <h2 className="text-headline text-foreground">
                                Dra. Ana Carolina
                            </h2>
                            <p className="text-body text-muted-foreground leading-relaxed">
                                Com mais de 10 anos dedicados à odontologia de excelência,
                                minha missão é proporcionar sorrisos saudáveis e autoestima elevada
                                através de tratamentos personalizados e tecnologia de ponta.
                            </p>
                            <p className="text-body text-muted-foreground leading-relaxed">
                                Cada paciente é único, e cada tratamento é planejado com atenção
                                aos mínimos detalhes para garantir resultados que superam expectativas.
                            </p>
                        </div>

                        {/* Credentials Grid */}
                        <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-up animation-delay-200">
                            {credentials.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-background border border-border hover:shadow-md transition-shadow duration-300"
                                >
                                    <item.icon className="w-6 h-6 text-foreground mb-3" strokeWidth={1.5} />
                                    <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
