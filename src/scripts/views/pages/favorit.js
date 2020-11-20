import '../components/CardComponent';
import FavoriteRestoran from '../../data/restoran-favorit';
const Favorit = {
  async render() {
    const heroEl = document.querySelector('#hero');
    heroEl.classList.remove('hidden');
    return `<card-component></card-component>`;
  },

  async afterRender() {
    const listRestorans = await FavoriteRestoran.getAllRestoran();
    const cardComponent = document.querySelector('card-component');
    await cardComponent.setRestoran(listRestorans);
  },
};

export default Favorit;
