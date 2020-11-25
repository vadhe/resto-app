import UrlParser from '../../routes/url-parser';
import restoranDb from '../../data/restoran-db';
import RestoranFavorit from '../../data/restoran-favorit';
import '../components/DetailComponent';
// import '../components/Loader';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailResto = {
  async render() {
    const heroEl = document.querySelector('#hero');
    heroEl.classList.add('hidden');
    return `
       <load-der></load-der>
       <detail-component></detail-component>
       <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const dataDetailResto = await restoranDb.detailRestoran(url.id);
      const detailComponent = document.querySelector('detail-component');
      detailComponent.setDetailRestorants(dataDetailResto.restaurant);
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestorans: RestoranFavorit,
        restoran: {
          ...dataDetailResto.restaurant,
        },
      });
      // const loader = document.querySelector('load-der');
      // loader.remove();
    } catch {
      alert('Check Your Connection');
    } finally {
      const loader = document.querySelector('load-der');
      loader.remove();
    }
  },
};

export default DetailResto;
