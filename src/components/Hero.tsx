import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, TreePine, Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Hero Background with Mountain Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/d6b4caf1-3ccc-48f9-968b-fddab8f722ed.png')`,
        }}
      >
        <div className="absolute inset-0 bg-overlay-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            NY WILDS
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light tracking-wide opacity-90">
            Viewing outdoors through lens and brush
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Discover the untamed beauty of New York's wilderness through hiking, biking, camping, and adventure photography.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Explore Adventures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              View Gallery
            </Button>
          </div>
          
          {/* Activity Icons */}
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <Mountain className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 opacity-80" />
              <p className="text-sm md:text-base opacity-70">Hiking</p>
            </div>
            <div className="text-center">
              <TreePine className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 opacity-80" />
              <p className="text-sm md:text-base opacity-70">Camping</p>
            </div>
            <div className="text-center">
              <Compass className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 opacity-80" />
              <p className="text-sm md:text-base opacity-70">Adventure</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;