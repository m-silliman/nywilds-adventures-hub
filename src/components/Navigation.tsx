import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, Map, Tent, Bike } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Adventures", href: "#adventures", icon: Map },
    { label: "Gallery", href: "#gallery", icon: Camera },
    { label: "Trails", href: "#trails", icon: Bike },
    { label: "Camping", href: "#camping", icon: Tent },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">NY WILDS</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-white hover:text-mountain-light transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Book Adventure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/20"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-white hover:text-mountain-light transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="self-start">
                Book Adventure
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;