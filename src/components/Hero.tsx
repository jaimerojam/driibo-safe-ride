import { Button } from "@/components/ui/button";
import { Play, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/driibo-service-illustration.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Tu auto, tu destino,
                <span className="text-primary-glow"> nuestro conductor</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                La forma más segura de llegar a casa cuando no puedes conducir. 
                Conductores profesionales validados manejan tu propio vehículo.
              </p>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-primary-foreground">100% Verificado</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-primary-foreground">24/7 Disponible</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-primary-glow" />
                <span className="text-sm text-primary-foreground">CDMX • GDL • MTY</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Descargar App Gratis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Play className="w-5 h-5 mr-2" />
                Ver cómo funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">50K+</div>
                <div className="text-sm text-primary-foreground/60">Viajes seguros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">1,200+</div>
                <div className="text-sm text-primary-foreground/60">Conductores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">3</div>
                <div className="text-sm text-primary-foreground/60">Ciudades</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="Driibo App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-strong"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;