import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div className="container py-20 text-center"><h1 className="heading-lg mb-4">Halaman Tidak Ditemukan</h1><p>Maaf, halaman yang Anda cari tidak ditemukan.</p></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

