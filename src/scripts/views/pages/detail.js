import UrlParser from '../../routes/url-parser';
import restoranDb from '../../data/restoran-db';
import  '../components/DetailComponent';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailResto = {
    async render() {
      const heroEl = document.querySelector('#hero');
      heroEl.classList.add('hidden')
      return `
       <detail-component></detail-component>
       <div id="likeButtonContainer"></div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const dataDetailResto = await restoranDb.detailRestoran(url.id);
      const detailComponent = document.querySelector('detail-component')
      detailComponent.setDetailRestorants(await dataDetailResto.restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restoran: {
         ...dataDetailResto.restaurant
        },
      });
    },
};

export default DetailResto;