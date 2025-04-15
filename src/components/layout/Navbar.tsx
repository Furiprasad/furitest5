
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench, MessageSquare, QrCode, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About Us",
      path: "/about"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Blog",
      path: "/blog"
    },
    {
      name: "Contact Us",
      path: "/contact"
    }
  ];

  const toolLinks = [
    {
      name: "WhatsApp Link Generator",
      path: "/free-tools/whatsapp-link-generator",
      icon: <MessageSquare className="mr-2 h-4 w-4" />
    },
    {
      name: "Google Reviews QR Code",
      path: "/free-tools/google-reviews-qr",
      icon: <QrCode className="mr-2 h-4 w-4" />
    },
    {
      name: "Email Signature Generator",
      path: "/free-tools/email-signature",
      icon: <Mail className="mr-2 h-4 w-4" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img 
                src="/lovable-uploads/10c78178-66cf-48bd-9016-789d7df13ba8.png" 
                alt="Furi Logo" 
                className="h-8"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium text-gray-800 hover:text-red-600 transition-colors"
                  onClick={scrollToTop}
                >
                  {link.name}
                </Link>
              ))}
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium text-gray-800 hover:text-red-600 transition-colors bg-transparent">
                      <span className="flex items-center">
                        <Wrench className="mr-1 h-4 w-4" />
                        Free Tools
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[320px]">
                        {toolLinks.map((tool) => (
                          <li key={tool.name} className="row-span-1">
                            <NavigationMenuLink asChild>
                              <Link
                                to={tool.path}
                                className="flex p-2 select-none rounded-md hover:bg-red-50 hover:text-red-600"
                                onClick={scrollToTop}
                              >
                                {tool.icon}
                                <div className="text-sm font-medium">{tool.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="default" className="bg-red-600 hover:bg-red-700">
              <Link to="/contact" onClick={scrollToTop}>Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block animate-fade-in" : "hidden animate-fade-out"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-gray-50"
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Tools Dropdown */}
          <div className="px-3 py-2">
            <div className="font-medium text-gray-800 mb-2 flex items-center">
              <Wrench className="mr-2 h-4 w-4" />
              Free Tools
            </div>
            <div className="pl-6 space-y-2">
              {toolLinks.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.path}
                  className="block py-1 text-sm font-medium text-gray-700 hover:text-red-600"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  <div className="flex items-center">
                    {tool.icon}
                    {tool.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="px-3 py-3">
            <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
              <Link
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
