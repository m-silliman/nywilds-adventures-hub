import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mountain, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Adventures",
      links: [
        { label: "Hiking Tours", href: "#hiking" },
        { label: "Bike Trails", href: "#biking" },
        { label: "Camping Trips", href: "#camping" },
        { label: "Photography Tours", href: "#photography" },
      ]
    },
    {
      title: "Destinations",
      links: [
        { label: "Adirondack Mountains", href: "#adirondacks" },
        { label: "Catskill Mountains", href: "#catskills" },
        { label: "Hudson Valley", href: "#hudson" },
        { label: "Finger Lakes", href: "#finger-lakes" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Trail Maps", href: "#maps" },
        { label: "Gear Guide", href: "#gear" },
        { label: "Safety Tips", href: "#safety" },
        { label: "Weather", href: "#weather" },
      ]
    }
  ];

  return (
    <footer className="bg-mountain-darkest text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-mountain-light" />
              <h3 className="text-2xl font-bold">NY WILDS</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Discover the untamed beauty of New York's wilderness through guided adventures, 
              expert photography, and sustainable outdoor experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-mountain-light" />
                <span className="text-white/80">adventures@nywilds.art</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-mountain-light" />
                <span className="text-white/80">(518) 555-WILD</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-mountain-light" />
                <span className="text-white/80">Albany, New York</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-mountain-light">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
              <p className="text-white/70">Get the latest trail updates, adventure tips, and exclusive offers.</p>
            </div>
            
            <div className="flex gap-3 max-w-sm mx-auto lg:mx-0">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-mountain-light"
              />
              <Button variant="hero" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center lg:flex lg:items-center lg:justify-between">
          <p className="text-white/60 text-sm mb-4 lg:mb-0">
            © 2024 NY Wilds. All rights reserved. Adventure responsibly.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
            <a href="#privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="text-white/60 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;