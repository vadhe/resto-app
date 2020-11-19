import 'regenerator-runtime';
import 'regenerator-runtime';
import '../styles/sass/app.scss';
import App from './views/app';
import ServiceWorkerRegist from "./utils//service-worker-regist";

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
  ServiceWorkerRegist();
});
