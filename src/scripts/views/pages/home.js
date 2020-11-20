import restoranDb from '../../data/restoran-db';
import '../components/CardComponent';
const Home = {
  async render() {
    const heroEl = document.querySelector('#hero');
    heroEl.classList.remove('hidden');
    return `<card-component></card-component>`;
  },

  async afterRender() {
    const listRestorans = await restoranDb.listRestoran();
    const cardComponent = document.querySelector('card-component');
    await cardComponent.setRestoran(listRestorans.restaurants);
  },
};

export default Home;
