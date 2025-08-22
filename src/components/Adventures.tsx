import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink, Star, Clock, TrendingUp } from "lucide-react";

const Adventures = () => {
  const nyRegions = [
    {
      id: 1,
      name: "Adirondack Park",
      description: "Six million acres of protected wilderness with 46 high peaks and countless trails.",
      coordinates: { lat: 44.0749, lng: -74.0042 },
      topTrails: [
        {
          name: "Mount Marcy Trail",
          difficulty: "Hard",
          length: "14.8 mi",
          rating: 4.7,
          allTrailsId: "mount-marcy-trail"
        },
        {
          name: "Cascade Mountain Trail", 
          difficulty: "Moderate",
          length: "4.8 mi",
          rating: 4.6,
          allTrailsId: "cascade-mountain-trail"
        },
        {
          name: "Avalanche Lake Trail",
          difficulty: "Moderate", 
          length: "4.6 mi",
          rating: 4.8,
          allTrailsId: "avalanche-lake-trail"
        }
      ]
    },
    {
      id: 2,
      name: "Catskill Mountains",
      description: "Scenic peaks, waterfalls, and diverse ecosystems just hours from NYC.",
      coordinates: { lat: 42.1962, lng: -74.5151 },
      topTrails: [
        {
          name: "Overlook Mountain Trail",
          difficulty: "Moderate",
          length: "5.0 mi",
          rating: 4.5,
          allTrailsId: "overlook-mountain-trail"
        },
        {
          name: "Kaaterskill Falls Trail",
          difficulty: "Easy",
          length: "1.4 mi", 
          rating: 4.4,
          allTrailsId: "kaaterskill-falls-trail"
        },
        {
          name: "Slide Mountain Trail",
          difficulty: "Hard",
          length: "5.4 mi",
          rating: 4.3,
          allTrailsId: "slide-mountain-trail"
        }
      ]
    },
    {
      id: 3,
      name: "Finger Lakes",
      description: "Rolling hills, vineyards, and pristine lakeshores perfect for all skill levels.",
      coordinates: { lat: 42.6526, lng: -76.9224 },
      topTrails: [
        {
          name: "Watkins Glen State Park Gorge Trail",
          difficulty: "Easy",
          length: "1.4 mi",
          rating: 4.8,
          allTrailsId: "watkins-glen-gorge-trail"
        },
        {
          name: "Taughannock Falls State Park Rim Trail",
          difficulty: "Easy",
          length: "0.8 mi",
          rating: 4.6,
          allTrailsId: "taughannock-falls-rim-trail"
        },
        {
          name: "Robert H. Treman State Park Gorge Trail",
          difficulty: "Moderate",
          length: "4.6 mi",
          rating: 4.5,
          allTrailsId: "robert-treman-gorge-trail"
        }
      ]
    },
    {
      id: 4,
      name: "Hudson Valley",
      description: "Historic landscapes, river views, and accessible trails near the Hudson River.",
      coordinates: { lat: 41.7658, lng: -73.8370 },
      topTrails: [
        {
          name: "Breakneck Ridge Trail",
          difficulty: "Hard",
          length: "3.7 mi",
          rating: 4.4,
          allTrailsId: "breakneck-ridge-trail"
        },
        {
          name: "Mount Beacon Trail",
          difficulty: "Moderate",
          length: "3.0 mi",
          rating: 4.3,
          allTrailsId: "mount-beacon-trail"
        },
        {
          name: "Walkway Over the Hudson",
          difficulty: "Easy",
          length: "2.4 mi",
          rating: 4.7,
          allTrailsId: "walkway-over-hudson"
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 border-green-200";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Hard": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const openAllTrails = (trailId: string) => {
    window.open(`https://www.alltrails.com/trail/us/new-york/${trailId}`, '_blank');
  };

  return (
    <section id="trails" className="py-20 bg-gradient-to-b from-white to-mountain-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            New York Trail Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the best hiking trails across New York's diverse regions. From the Adirondacks to the Hudson Valley, 
            explore trails for every skill level with direct links to AllTrails for detailed maps and reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {nyRegions.map((region) => (
            <Card key={region.id} className="shadow-card-soft hover:shadow-mountain transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                      {region.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {region.description}
                    </CardDescription>
                  </div>
                  <div className="p-2 bg-hero-gradient rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Top Trails
                  </h4>
                  
                  {region.topTrails.map((trail, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                      onClick={() => openAllTrails(trail.allTrailsId)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h5 className="font-medium text-foreground">{trail.name}</h5>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{trail.length}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{trail.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getDifficultyColor(trail.difficulty)}>
                        {trail.difficulty}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`https://www.alltrails.com/us/new-york`, '_blank')}
                  >
                    View All {region.name} Trails
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://www.alltrails.com/us/new-york', '_blank')}
          >
            Explore All New York Trails
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Adventures;