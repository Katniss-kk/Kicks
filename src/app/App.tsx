import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage/HomePage';
import Layout from '@/layout/Layout';
import '@shared/assets/styles/global.css';
import CatalogPage from '@/pages/CatalogPage';
import { useDispatch } from '@/services/store';
import { useEffect } from 'react';
import { setData } from '@/services/slices/ProductsDataSlice/ProductsDataSlice';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData());
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
