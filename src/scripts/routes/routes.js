import Home from '../views/pages/home';
import DetailResto from '../views/pages/detail';
import Favorit from '../views/pages/favorit';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorit': Favorit,
  '/detail/:id': DetailResto,
};

export default routes;
