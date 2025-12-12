import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#certificados", label: "Certificados" },
    { href: "#diferenciais", label: "Diferenciais" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-wide flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-display text-xl font-semibold text-foreground">
                    Clínica Sorriso
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="cta" size="sm" asChild>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4" />
                            Agendar
                        </a>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
                    isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <nav className="container-wide py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="cta" className="w-full mt-2" asChild>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4" />
                            Agendar Consulta
                        </a>
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
