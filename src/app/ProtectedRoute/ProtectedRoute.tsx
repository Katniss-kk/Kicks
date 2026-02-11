import type { RootState} from '@/services/store';
import { useSelector } from '@/services/store';
import type { ProtectedRouteProops } from './libs/types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: ProtectedRouteProops) {
  const user = useSelector((state: RootState) => state.Basket.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  if (user) {
    return <>{children}</>;
  }

  return null;
}
