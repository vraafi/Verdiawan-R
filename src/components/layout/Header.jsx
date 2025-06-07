import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            Digital<span className="text-accent">Craft</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Beranda</Link>
          <Link to="/products" className="nav-link">Produk Digital</Link>
          <Link to="/portfolio" className="nav-link">Portofolio</Link>
          <Link to="/services" className="nav-link">Layanan</Link>
          <Link to="/about" className="nav-link">Tentang Kami</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Kontak</Link>
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <Link to="/account" className="p-2 rounded-full hover:bg-muted transition-colors">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-muted transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-4">
            <Link to="/" className="block py-2 nav-link" onClick={toggleMenu}>Beranda</Link>
            <Link to="/products" className="block py-2 nav-link" onClick={toggleMenu}>Produk Digital</Link>
            <Link to="/portfolio" className="block py-2 nav-link" onClick={toggleMenu}>Portofolio</Link>
            <Link to="/services" className="block py-2 nav-link" onClick={toggleMenu}>Layanan</Link>
            <Link to="/about" className="block py-2 nav-link" onClick={toggleMenu}>Tentang Kami</Link>
            <Link to="/blog" className="block py-2 nav-link" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="block py-2 nav-link" onClick={toggleMenu}>Kontak</Link>
            
            <div className="flex items-center space-x-4 pt-2 border-t border-border">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <Link to="/account" className="p-2 rounded-full hover:bg-muted transition-colors">
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

