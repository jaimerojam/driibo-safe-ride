import { Card } from "@/components/ui/card";
import { Shield, Camera, FileCheck, Phone, Lock, Award } from "lucide-react";
import driverImage from "@/assets/professional-driver.jpg";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Verificación completa",
    description: "Todos los conductores pasan por verificación de antecedentes, licencia vigente y exámenes médicos."
  },
  {
    icon: Camera,
    title: "Cámara de seguridad",
    description: "Cada viaje se graba con cámara de seguridad para protección mutua de conductores y usuarios."
  },
  {
    icon: FileCheck,
    title: "Seguro de cobertura",
    description: "Cobertura completa de seguro durante todo el viaje para tu vehículo y personas a bordo."
  },
  {
    icon: Phone,
    title: "Soporte 24/7",
    description: "Equipo de soporte disponible las 24 horas para cualquier emergencia o consulta durante el viaje."
  },
  {
    icon: Lock,
    title: "Datos protegidos",
    description: "Toda tu información personal y de pago está protegida con encriptación de nivel bancario."
  },
  {
    icon: Award,
    title: "Certificación oficial",
    description: "Certificados por autoridades de transporte locales y cumplimiento de todas las normativas vigentes."
  }
];

const Safety = () => {
  return (
    <section id="seguridad" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Tu seguridad es nuestra prioridad
              </h2>
              <p className="text-lg text-muted-foreground">
                Hemos implementado múltiples capas de seguridad para garantizar que cada viaje 
                sea completamente seguro y confiable.
              </p>
            </div>

            <div className="grid gap-6">
              {safetyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Stats */}
            <div className="bg-driibo-gray rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Confían en nosotros</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Calificación promedio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Incidentes reportados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={driverImage}
                alt="Conductor profesional verificado"
                className="w-full rounded-2xl shadow-medium"
              />
              
              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 p-4 bg-background border-0 shadow-strong">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Conductor verificado</span>
                </div>
              </Card>
              
              <Card className="absolute -bottom-4 -right-4 p-4 bg-background border-0 shadow-strong">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">5.0 ★</div>
                  <div className="text-xs text-muted-foreground">Calificación</div>
                </div>
              </Card>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Proceso de verificación</h3>
              <div className="space-y-3">
                {[
                  "Verificación de identidad y antecedentes penales",
                  "Validación de licencia de conducir vigente",
                  "Examen médico y psicológico certificado",
                  "Capacitación en protocolo de seguridad Driibo",
                  "Prueba práctica de manejo supervisada"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;