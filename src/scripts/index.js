import 'regenerator-runtime';
import '../styles/sass/app.scss';
import App from './views/app';
import serviceWorkerRegist from './utils//service-worker-regist';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

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
  serviceWorkerRegist();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
