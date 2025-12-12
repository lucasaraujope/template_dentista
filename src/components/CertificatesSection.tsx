import { Award, BadgeCheck, FileCheck, GraduationCap } from "lucide-react";

const certificates = [
    {
        icon: GraduationCap,
        title: "Graduação em Odontologia",
        institution: "Universidade de São Paulo (USP)",
        year: "2012",
    },
    {
        icon: Award,
        title: "Especialização em Ortodontia",
        institution: "APCD - Associação Paulista de Cirurgiões-Dentistas",
        year: "2015",
    },
    {
        icon: FileCheck,
        title: "Especialização em Implantodontia",
        institution: "ABO - Associação Brasileira de Odontologia",
        year: "2017",
    },
    {
        icon: BadgeCheck,
        title: "Certificação em Harmonização Orofacial",
        institution: "Instituto Brasileiro de HOF",
        year: "2020",
    },
    {
        icon: Award,
        title: "Invisalign® Certified Provider",
        institution: "Align Technology",
        year: "2021",
    },
    {
        icon: FileCheck,
        title: "Curso Avançado em Lentes de Contato Dental",
        institution: "Instituto do Sorriso",
        year: "2023",
    },
];

const CertificatesSection = () => {
    return (
        <section id="certificados" className="section-padding bg-background">
            <div className="container-wide">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 opacity-0 animate-fade-in-up">
                    <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                        Formação e Qualificações
                    </p>
                    <h2 className="text-headline text-foreground">
                        Certificados e Especializações
                    </h2>
                    <p className="text-subheadline">
                        Compromisso com atualização constante e excelência profissional.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`group relative p-6 rounded-xl bg-surface-secondary border border-border 
                hover:bg-surface-tertiary hover:shadow-lg transition-all duration-300 
                opacity-0 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100 + 200}ms` }}
                        >
                            {/* Icon and Year Badge */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                                    <cert.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                                    {cert.year}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {cert.institution}
                            </p>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-foreground/5 border-l-[40px] border-l-transparent group-hover:border-t-foreground/10 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CRO Badge */}
                <div className="mt-12 text-center opacity-0 animate-fade-in-up animation-delay-500">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface-secondary border border-border">
                        <BadgeCheck className="w-5 h-5 text-foreground" />
                        <span className="text-sm font-medium text-foreground">
                            CRO-SP 123456
                        </span>
                        <span className="text-xs text-muted-foreground">
                            • Registro ativo e regularizado
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
