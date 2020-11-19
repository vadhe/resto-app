import Home from '../views/pages/home';
import DetailResto from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': DetailResto,
};

export default routes;
