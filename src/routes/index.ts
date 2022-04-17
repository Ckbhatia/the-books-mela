import { routes } from '../constants/routes';
import Index from '../Pages';
import BookDetails from '../Pages/BookDetails';
import SearchBooks from '../Pages/SearchBooks';

export const protectedRoutes = [
  { path: routes.search, element: SearchBooks },
  { path: routes.detail, element: BookDetails },
];

export const publicRoutes = [
  { path: routes.homepage, element: Index },
];