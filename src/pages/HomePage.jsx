import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      title: 'Template Website Portfolio Premium',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 499.000',
      category: 'Template Website',
      rating: 4.9,
      reviews: 124
    },
    {
      id: 2,
      title: 'UI Kit Dashboard Admin Modern',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 799.000',
      category: 'UI Kit',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: 'Font Premium Elegan Serif',
      image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 299.000',
      category: 'Font',
      rating: 4.7,
      reviews: 56
    },
    {
      id: 4,
      title: 'Plugin SEO WordPress Premium',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 599.000',
      category: 'Plugin',
      rating: 4.9,
      reviews: 112
    }
  ];

  // Sample portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Website E-commerce Fashion',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Website Korporat Finansial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Korporat'
    },
    {
      id: 3,
      title: 'Landing Page SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Landing Page'
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'CEO, PT Maju Bersama',
      content: 'Website yang dibuat sangat elegan dan profesional. Fitur-fiturnya lengkap dan sesuai dengan kebutuhan bisnis kami. Sangat merekomendasikan jasa DigitalCraft!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Siti Rahayu',
      role: 'Founder, Kreasi Digital',
      content: 'Produk digital yang saya beli kualitasnya luar biasa. Support yang diberikan juga sangat responsif. Pasti akan belanja lagi di sini.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Andi Wijaya',
      role: 'Marketing Director, Inovasi Tech',
      content: 'Proses pembuatan website sangat transparan dan tepat waktu. Hasilnya melebihi ekspektasi kami. Terima kasih DigitalCraft!',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(to right, #0A1128, #343A40)' }}>
        <div className="hero-overlay"></div>
        <div className="container h-full flex items-center">
          <motion.div 
            className="hero-content max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
              variants={fadeIn}
            >
              Produk Digital & Jasa Website Premium
            </motion.span>
            <motion.h1 
              className="heading-xl text-white mb-6"
              variants={fadeIn}
            >
              Solusi Digital <span className="text-primary">Elegan</span> untuk Bisnis Anda
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              variants={fadeIn}
            >
              Dapatkan produk digital berkualitas tinggi dan jasa pembuatan website dengan desain elegan yang akan membuat bisnis Anda menonjol dari kompetitor.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn}
            >
              <Link to="/products" className="btn-primary flex items-center justify-center gap-2">
                Jelajahi Produk
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline flex items-center justify-center gap-2">
                Lihat Layanan
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Produk Unggulan</span>
            <h2 className="heading-lg mt-2 mb-4">Produk Digital Terbaik</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan koleksi produk digital premium kami yang dirancang untuk memenuhi kebutuhan kreatif dan bisnis Anda.
            </p>
          </div>

          <motion.div 
            className="product-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                className="product-card group"
                variants={fadeIn}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-image group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-secondary">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">({product.reviews} ulasan)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{product.price}</span>
                    <Link 
                      to={`/products/${product.id}`}
                      className="text-primary hover:underline text-sm font-medium flex items-center"
                    >
                      Detail <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-outline">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Portofolio</span>
            <h2 className="heading-lg mt-2 mb-4">Karya Terbaik Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lihat beberapa proyek website yang telah kami kerjakan untuk klien dari berbagai industri.
            </p>
          </div>

          <motion.div 
            className="portfolio-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id}
                className="portfolio-item group"
                variants={fadeIn}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-overlay">
                  <div className="text-center p-4">
                    <span className="text-primary text-sm font-medium block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <Link 
                      to={`/portfolio/${item.id}`}
                      className="inline-block bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-outline">
              Lihat Semua Portofolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium">Layanan Kami</span>
              <h2 className="heading-lg mt-2 mb-6">Jasa Pembuatan Website Profesional</h2>
              <p className="text-muted-foreground mb-6">
                Kami menyediakan jasa pembuatan website dengan desain elegan dan fungsionalitas lengkap untuk kebutuhan bisnis dan personal Anda.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Desain Website Elegan</h3>
                    <p className="text-muted-foreground">
                      Desain website yang elegan dan profesional sesuai dengan identitas brand Anda.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Pengembangan Website Dinamis</h3>
                    <p className="text-muted-foreground">
                      Website dinamis dengan fitur-fitur interaktif dan sistem manajemen konten yang mudah digunakan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Optimasi SEO</h3>
                    <p className="text-muted-foreground">
                      Optimasi mesin pencari untuk meningkatkan visibilitas website Anda di Google.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/services" className="btn-primary">
                  Lihat Semua Layanan
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Web Development" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      5+
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tahun Pengalaman</h4>
                    <p className="text-sm text-muted-foreground">Dalam industri digital</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Testimonial</span>
            <h2 className="heading-lg mt-2 mb-4">Apa Kata Klien Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lihat apa yang dikatakan klien kami tentang produk dan layanan yang kami berikan.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-secondary">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Siap Untuk Memulai Proyek Digital Anda?</h2>
            <p className="text-lg text-white/90 mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors">
                Hubungi Kami
              </Link>
              <Link to="/products" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors">
                Lihat Produk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

