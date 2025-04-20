import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-tarf-pink-dark to-tarf-pink text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 fill-white stroke-white" />
              <span className="font-display font-bold text-xl">TARFs Foundation</span>
            </div>
            <p className="mb-6 text-white/90">
              Empowering teenage girls through menstrual hygiene education, 
              spiritual growth, and holistic support programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/70 transition" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/70 transition" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/70 transition" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white/70 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white/70 transition">About Us</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white/70 transition">Programs</a>
              </li>
              <li>
                <a href="#get-involved" className="hover:text-white/70 transition">Get Involved</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white/70 transition">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>123 Empowerment Street, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@tarfsfoundation.org</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Newsletter</h3>
            <p className="mb-4 text-white/90">
              Subscribe to our newsletter to stay updated with our latest news and events.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none 
                  focus:bg-white/30 placeholder-white/70 text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-tarf-pink-dark font-bold py-2 px-6 rounded-lg 
                hover:bg-white/90 transition duration-300 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 text-center text-white/70">
          <p>© {new Date().getFullYear()} TARFs Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;