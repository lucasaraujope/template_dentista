import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999";

const Footer = () => {
    return (
        <footer className="bg-surface-secondary border-t border-border">
            <div className="container-wide py-16">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-display text-2xl font-semibold text-foreground">
                            Clínica Sorriso
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Odontologia de excelência com atendimento humanizado.
                            Transformando sorrisos há mais de 10 anos.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-medium text-foreground">Contato</h4>
                        <div className="space-y-3">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                (11) 99999-9999
                            </a>
                            <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mt-0.5" />
                                <span>
                                    Av. Paulista, 1000 - Sala 501<br />
                                    Bela Vista, São Paulo - SP
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                Seg a Sex: 8h às 18h
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="font-medium text-foreground">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-foreground" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-foreground" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border">
                <div className="container-wide py-6">
                    <p className="text-xs text-muted-foreground text-center">
                        © {new Date().getFullYear()} Clínica Sorriso. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
