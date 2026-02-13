import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import Layout from '@/layout/Layout';
import '@shared/assets/styles/global.css';
import CatalogPage from '@/pages/CatalogPage';
import { useDispatch } from '@/services/store';
import { lazy, useEffect } from 'react';
import { setData } from '@/services/slices/ProductsDataSlice/ProductsDataSlice';
import ProductSelectedPage from '@/pages/ProductSelectedPage';
import BasketPage from '@/pages/BasketPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { loadingUserFromStorage } from '@/services/slices/ProfileSlice/ProfileSlice';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData());
    dispatch(loadingUserFromStorage());
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
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
