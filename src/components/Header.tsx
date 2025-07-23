import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8bcb10f5-bd72-4eb4-be7e-19b0391eba28.png" 
              alt="Driibo Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Cómo funciona
            </a>
            <a href="#ciudades" className="text-foreground hover:text-primary transition-colors">
              Ciudades
            </a>
            <a href="#seguridad" className="text-foreground hover:text-primary transition-colors">
              Seguridad
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Iniciar sesión</Button>
            <Button variant="hero">Descargar App</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
                Cómo funciona
              </a>
              <a href="#ciudades" className="text-foreground hover:text-primary transition-colors">
                Ciudades
              </a>
              <a href="#seguridad" className="text-foreground hover:text-primary transition-colors">
                Seguridad
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Iniciar sesión</Button>
                <Button variant="hero">Descargar App</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;