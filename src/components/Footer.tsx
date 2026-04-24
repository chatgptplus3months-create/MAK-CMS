import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-1">
            <img
              src="/logos/mak-logo-white.png"
              alt="Masar Al Khaleej International LLC"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-brand-white/65">
              Masar Al Khaleej is an Oman-focused FMCG distribution partner serving modern trade, general trade, wholesalers, and institutions with agile launch support.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Quick Links</h4>
            <ul className="space-y-3 text-sm text-brand-white/65">
              <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/network" className="hover:text-brand-red transition-colors">Distribution Network</Link></li>
              <li><Link to="/brands" className="hover:text-brand-red transition-colors">Our Brands</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Capabilities</h4>
            <ul className="space-y-3 text-sm text-brand-white/65">
              <li><Link to="/trade" className="hover:text-brand-red transition-colors">Trade Execution</Link></li>
              <li><Link to="/logistics" className="hover:text-brand-red transition-colors">Logistics</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Partnership Inquiry</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Retailer Enquiries</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-white/65">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-red" /><span>+968 92457875</span></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-red" /><span>sumesh@masaralkhaleejint.com</span></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-red" /><span>Muscat, Sultanate of Oman</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-white/35">
          © {new Date().getFullYear()} Masar Al Khaleej Distribution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
