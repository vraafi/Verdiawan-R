import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold text-white">
                Digital<span className="text-secondary">Craft</span>
              </h2>
            </Link>
            <p className="text-gray-300 max-w-xs">
              Penyedia produk digital berkualitas tinggi dan jasa pembuatan website elegan untuk kebutuhan bisnis dan personal Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
                  Produk Digital
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Jl. Contoh No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">info@digitalcraft.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Berlangganan</h3>
            <p className="text-gray-300 mb-4">
              Dapatkan update terbaru dan penawaran spesial dari kami.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
                >
                  Kirim
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Kami tidak akan pernah membagikan email Anda kepada pihak lain.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} DigitalCraft. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link to="/refund" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Kebijakan Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

