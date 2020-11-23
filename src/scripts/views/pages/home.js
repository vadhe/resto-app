import restoranDb from '../../data/restoran-db';
import '../components/CardComponent';
import '../components/Loader';
const Home = {
  async render() {
    const heroEl = document.querySelector('#hero');
    heroEl.classList.remove('hidden');
    return `
    <load-der></load-der>
    <card-component></card-component>
    `;
  },

  async afterRender() {
    try {
      const listRestorans = await restoranDb.listRestoran();
      const cardComponent = document.querySelector('card-component');
      await cardComponent.setRestoran(listRestorans.restaurants);
    } catch {
      alert('Check Your Connection');
    } finally {
      const loader = document.querySelector('load-der');
      loader.remove();
    }
  },
};

export default Home;
