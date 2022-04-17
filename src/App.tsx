import './App.css';
import ProtectedRoutes from './Components/ProtectedRoutes';
import PublicRoutes from './Components/PublicRoutes';
import { getIsAuthenticated } from './utils/auth';

function App() {
const isAuthenticated  = getIsAuthenticated();

  return isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />;
}

export default App;
