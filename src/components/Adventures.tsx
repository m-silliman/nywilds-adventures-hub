import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Bike, Tent, Camera, Clock, Users, MapPin } from "lucide-react";

const Adventures = () => {
  const adventures = [
    {
      id: 1,
      title: "Adirondack Peak Challenge",
      description: "Conquer the highest peaks in the Adirondacks with breathtaking views and challenging terrain.",
      icon: Mountain,
      duration: "3-5 hours",
      difficulty: "Advanced",
      groupSize: "4-8 people",
      location: "Adirondack Mountains",
      features: ["Summit Photography", "Wildlife Spotting", "Panoramic Views"],
      price: "$89"
    },
    {
      id: 2,
      title: "Finger Lakes Cycling",
      description: "Scenic bike routes through wine country with rolling hills and stunning lake views.",
      icon: Bike,
      duration: "2-4 hours",
      difficulty: "Intermediate", 
      groupSize: "6-12 people",
      location: "Finger Lakes Region",
      features: ["Wine Tasting", "Lake Views", "Historic Sites"],
      price: "$65"
    },
    {
      id: 3,
      title: "Catskills Wilderness Camping",
      description: "Multi-day camping experience in pristine wilderness with hiking and photography workshops.",
      icon: Tent,
      duration: "2-3 days",
      difficulty: "Intermediate",
      groupSize: "8-15 people", 
      location: "Catskill Mountains",
      features: ["Night Photography", "Campfire Stories", "Nature Workshops"],
      price: "$189"
    },
    {
      id: 4,
      title: "Hudson Valley Photo Tour",
      description: "Capture the beauty of Hudson Valley's landscapes, waterfalls, and historic sites.",
      icon: Camera,
      duration: "Full Day",
      difficulty: "Beginner",
      groupSize: "4-10 people",
      location: "Hudson Valley",
      features: ["Photography Lessons", "Waterfall Shots", "Historic Mansions"],
      price: "$125"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="adventures" className="py-20 bg-gradient-to-b from-white to-mountain-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From challenging mountain peaks to serene lake cycling, discover New York's wilderness 
            through curated adventures designed for every skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {adventures.map((adventure) => (
            <Card key={adventure.id} className="shadow-card-soft hover:shadow-mountain transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-hero-gradient rounded-lg">
                      <adventure.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {adventure.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{adventure.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{adventure.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {adventure.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {adventure.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{adventure.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{adventure.groupSize}</span>
                  </div>
                  <div>
                    <Badge className={getDifficultyColor(adventure.difficulty)}>
                      {adventure.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="adventure" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" size="default">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Adventures
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Adventures;