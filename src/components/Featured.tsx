import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Users } from "lucide-react";

const Featured = () => {
  const featuredTrails = [
    {
      id: 1,
      name: "Bear Mountain Summit Trail",
      location: "Bear Mountain State Park",
      difficulty: "Moderate",
      length: "3.2 miles",
      duration: "2-3 hours",
      rating: 4.8,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Panoramic views of the Hudson Valley from the historic Bear Mountain summit."
    },
    {
      id: 2,
      name: "Breakneck Ridge Trail",
      location: "Cold Spring, NY",
      difficulty: "Strenuous",
      length: "5.5 miles",
      duration: "4-5 hours",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Challenging rock scramble with breathtaking Hudson River valley views."
    },
    {
      id: 3,
      name: "Kaaterskill Falls Trail",
      location: "Catskill Mountains",
      difficulty: "Easy",
      length: "1.4 miles",
      duration: "1-2 hours",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "New York's tallest waterfall cascade through stunning mountain scenery."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 border-green-200";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-200"; 
      case "Strenuous": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="trails" className="py-20 bg-mountain-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Trails
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover handpicked trails that showcase the best of New York's natural beauty, 
            from peaceful waterfall walks to challenging summit climbs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredTrails.map((trail) => (
            <Card key={trail.id} className="overflow-hidden shadow-mountain hover:shadow-glow transition-all duration-300 group bg-white/95 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={trail.image} 
                  alt={trail.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getDifficultyColor(trail.difficulty)}>
                    {trail.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/50 rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{trail.rating}</span>
                  <span className="text-white/80 text-sm">({trail.reviews})</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {trail.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{trail.location}</span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {trail.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{trail.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{trail.length}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="mountain" className="flex-1">
                    View Trail
                  </Button>
                  <Button variant="outline" size="default">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
            Explore All Trails
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Featured;