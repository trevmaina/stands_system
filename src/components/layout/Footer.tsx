import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl">PCEA St Andrew's</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Building bridges of faith, hope, and love in our community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/testimonies" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonies
                </Link>
              </li>
               <li>
                <Link to="/give" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Give
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-primary-foreground/80 hover:text-accent transition-colors text-xs opacity-60">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Congregations */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Congregations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/congregations/main" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Main Congregation
                </Link>
              </li>
              <li>
                <Link to="/congregations/youth" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Youth Congregation
                </Link>
              </li>
              <li>
                <Link to="/congregations/french" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  French Congregation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  State House Rd/Nyerere Rd Junction, Nairobi
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  +254(0) 707 257 000
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">
                  info@pceastandrews.org
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} PCEA St Andrew's Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};