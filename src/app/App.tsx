import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import Layout from '@/layout/Layout';
import '@shared/assets/styles/global.css';
import '@shared/assets/styles/colors.css';
import CatalogPage from '@/pages/CatalogPage';
import { useDispatch } from '@/services/store';
import { lazy, useEffect } from 'react';
import { setData } from '@/services/slices/ProductsDataSlice/ProductsDataSlice';
import ProductSelectedPage from '@/pages/ProductSelectedPage';
import BasketPage from '@/pages/BasketPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { loadUserFromStorage } from '@/services/slices/BasketSlice/BasketSlice';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData());
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogPage />} />
          <Route path="product/:id" element={<ProductSelectedPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
