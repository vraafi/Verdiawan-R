import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ChevronDown, ChevronRight } from 'lucide-react';

const ProductsPage = () => {
  // State for filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample product categories
  const categories = [
    { id: 'all', name: 'Semua Kategori' },
    { id: 'templates', name: 'Template Website' },
    { id: 'ui-kits', name: 'UI Kit & Aset Desain' },
    { id: 'fonts', name: 'Font & Tipografi' },
    { id: 'plugins', name: 'Plugin & Add-ons' },
    { id: 'graphics', name: 'Grafik & Ilustrasi' }
  ];

  // Sample price ranges
  const priceRanges = [
    { id: 'all', name: 'Semua Harga' },
    { id: 'under-200k', name: 'Di bawah Rp 200.000' },
    { id: '200k-500k', name: 'Rp 200.000 - Rp 500.000' },
    { id: '500k-1m', name: 'Rp 500.000 - Rp 1.000.000' },
    { id: 'above-1m', name: 'Di atas Rp 1.000.000' }
  ];

  // Sample sort options
  const sortOptions = [
    { id: 'popular', name: 'Paling Populer' },
    { id: 'newest', name: 'Terbaru' },
    { id: 'price-low', name: 'Harga: Rendah ke Tinggi' },
    { id: 'price-high', name: 'Harga: Tinggi ke Rendah' },
    { id: 'rating', name: 'Rating Tertinggi' }
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      title: 'Template Website Portfolio Premium',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 499.000',
      category: 'templates',
      rating: 4.9,
      reviews: 124
    },
    {
      id: 2,
      title: 'UI Kit Dashboard Admin Modern',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 799.000',
      category: 'ui-kits',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: 'Font Premium Elegan Serif',
      image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 299.000',
      category: 'fonts',
      rating: 4.7,
      reviews: 56
    },
    {
      id: 4,
      title: 'Plugin SEO WordPress Premium',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 599.000',
      category: 'plugins',
      rating: 4.9,
      reviews: 112
    },
    {
      id: 5,
      title: 'Template E-commerce Responsive',
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 899.000',
      category: 'templates',
      rating: 4.8,
      reviews: 95
    },
    {
      id: 6,
      title: 'Set Ikon Premium 500+',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 349.000',
      category: 'graphics',
      rating: 4.6,
      reviews: 78
    },
    {
      id: 7,
      title: 'Font Sans-Serif Modern',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 249.000',
      category: 'fonts',
      rating: 4.5,
      reviews: 42
    },
    {
      id: 8,
      title: 'Plugin Keamanan Website',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: 'Rp 499.000',
      category: 'plugins',
      rating: 4.9,
      reviews: 67
    }
  ];

  // Filter products based on active filters
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by price range (simplified for demo)
    if (priceRange === 'under-200k') {
      return parseInt(product.price.replace(/\D/g, '')) < 200000;
    } else if (priceRange === '200k-500k') {
      const price = parseInt(product.price.replace(/\D/g, ''));
      return price >= 200000 && price <= 500000;
    } else if (priceRange === '500k-1m') {
      const price = parseInt(product.price.replace(/\D/g, ''));
      return price > 500000 && price <= 1000000;
    } else if (priceRange === 'above-1m') {
      return parseInt(product.price.replace(/\D/g, '')) > 1000000;
    }
    
    return true;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'newest') {
      return b.id - a.id; // Assuming newer products have higher IDs
    } else if (sortBy === 'price-low') {
      return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    } else if (sortBy === 'price-high') {
      return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    // Default: popular (by reviews count)
    return b.reviews - a.reviews;
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="heading-lg mb-4">Produk Digital</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Temukan koleksi produk digital premium kami untuk kebutuhan kreatif dan bisnis Anda.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Kategori</h3>
                <ul className="space-y-2 mb-8">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category.id
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-lg mb-4">Rentang Harga</h3>
                <ul className="space-y-2 mb-8">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <button
                        onClick={() => setPriceRange(range.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          priceRange === range.id
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {range.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filters Toggle & Sort */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6 lg:mb-8">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md lg:hidden"
                >
                  <Filter size={18} />
                  Filter
                  <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Urutkan:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md border-none focus:ring-2 focus:ring-primary"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Kategori</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeCategory === category.id
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Rentang Harga</h3>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => setPriceRange(range.id)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            priceRange === range.id
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {range.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Menampilkan {sortedProducts.length} produk
                </p>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <motion.div 
                  className="product-grid"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {sortedProducts.map((product) => (
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
                          {categories.find(c => c.id === product.category)?.name || product.category}
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">Tidak ada produk yang ditemukan</h3>
                  <p className="text-muted-foreground mb-6">
                    Coba ubah filter atau kata kunci pencarian Anda.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setPriceRange('all');
                      setSearchQuery('');
                    }}
                    className="btn-outline"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;

