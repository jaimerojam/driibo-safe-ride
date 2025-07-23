import { Card } from "@/components/ui/card";
import { Smartphone, UserCheck, Car, MapPin } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Solicita un conductor",
    description: "Abre la app, indica tu ubicación y solicita un conductor profesional cuando no puedas manejar.",
    number: "01"
  },
  {
    icon: UserCheck,
    title: "Conductor verificado",
    description: "Un conductor certificado y verificado llega a tu ubicación con credenciales válidas.",
    number: "02"
  },
  {
    icon: Car,
    title: "Maneja tu auto",
    description: "El conductor profesional maneja tu propio vehículo siguiendo tus indicaciones de ruta.",
    number: "03"
  },
  {
    icon: MapPin,
    title: "Llega seguro",
    description: "Arribes a tu destino de forma segura en tu propio auto con trazabilidad completa del viaje.",
    number: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-driibo-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ¿Cómo funciona Driibo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y seguro en 4 pasos para que llegues a casa sin preocupaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative p-6 text-center bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Proceso 100% legal y rastreable
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Todos nuestros conductores cuentan con licencia vigente, seguro de responsabilidad civil 
              y han pasado por un riguroso proceso de verificación. Cada viaje queda registrado con 
              GPS y cámara de seguridad.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Conductores verificados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte disponible</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">GPS</div>
                <div className="text-sm text-muted-foreground">Rastreo en tiempo real</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;