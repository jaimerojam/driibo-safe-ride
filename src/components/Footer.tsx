import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-driibo-navy text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <img 
                src="/lovable-uploads/8bcb10f5-bd72-4eb4-be7e-19b0391eba28.png" 
                alt="Driibo Logo" 
                className="h-8 w-auto"
              />
              <p className="text-primary-foreground/80 max-w-md">
                La plataforma de transporte más segura para cuando no puedes conducir. 
                Conductores profesionales verificados que manejan tu propio vehículo.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded flex items-center justify-center">
                      <span className="text-xs">📱</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-primary-foreground/60">Descargar en</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </Button>
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded flex items-center justify-center">
                      <span className="text-xs">📲</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-primary-foreground/60">Disponible en</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
              <nav className="flex flex-col space-y-3">
                <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
                <a href="#como-funciona" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cómo funciona
                </a>
                <a href="#ciudades" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ciudades
                </a>
                <a href="#seguridad" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Seguridad
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Conductor
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Soporte
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-glow" />
                  <span className="text-primary-foreground/80">+52 55 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-glow" />
                  <span className="text-primary-foreground/80">hola@driibo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary-glow" />
                  <span className="text-primary-foreground/80">CDMX, México</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="font-medium">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Facebook className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Twitter className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Instagram className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Driibo. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;