import 'regenerator-runtime';
import 'regenerator-runtime';
import '../styles/sass/app.scss';
import App from './views/app';
// import FavoriteRestoran from './data/restoran-favorit';
import ServiceWorkerRegist from './utils//service-worker-regist';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // const movie = {
  //   id:1,
  //   title: "movie.title",
  //   overview: "movie.overview",
  //   backdrop_path:" movie.backdrop_path",
  //   vote_average: "movie.vote_average",
  // };
  // const data =  FavoriteRestoran.getRestoran(1);
  // console.log(data);
  ServiceWorkerRegist();
});
