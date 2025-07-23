import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

const cities = [
  {
    name: "Ciudad de México",
    short: "CDMX",
    status: "Disponible",
    coverage: "Zonas: Roma, Condesa, Polanco, Santa Fe, Insurgentes",
    drivers: "800+",
    availability: "24/7",
    isActive: true
  },
  {
    name: "Guadalajara",
    short: "GDL", 
    status: "Disponible",
    coverage: "Zonas: Providencia, Chapultepec, Centro, Zapopan",
    drivers: "250+",
    availability: "24/7",
    isActive: true
  },
  {
    name: "Monterrey",
    short: "MTY",
    status: "Disponible",
    coverage: "Zonas: San Pedro, Centro, Cumbres, Valle",
    drivers: "150+",
    availability: "24/7",
    isActive: true
  }
];

const Cities = () => {
  return (
    <section id="ciudades" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Disponible en las principales ciudades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Operamos en las zonas urbanas de mayor demanda con la mejor cobertura y los conductores más calificados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cities.map((city, index) => (
            <Card key={index} className="p-6 border-0 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="space-y-4">
                {/* City Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                    <span className="text-2xl font-light text-muted-foreground">{city.short}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    city.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {city.status}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{city.drivers} conductores</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{city.availability}</span>
                  </div>
                </div>

                {/* Coverage */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Cobertura</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{city.coverage}</p>
                </div>

                {/* CTA */}
                <Button className="w-full mt-4" variant={city.isActive ? "default" : "outline"}>
                  {city.isActive ? "Solicitar conductor" : "Próximamente"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Expansion Info */}
        <div className="text-center bg-driibo-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Tu ciudad no está disponible?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos expandiendo constantemente. Regístrate para ser el primero en saber cuando 
            Driibo llegue a tu ciudad y recibe un descuento especial de lanzamiento.
          </p>
          <Button variant="premium" size="lg">
            Notificarme cuando esté disponible
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cities;