import UrlParser from '../../routes/url-parser';
import restoranDb from "../../data/restoran-db";
import  "../components/DetailComponent";
import "../components/ButtonLike";

const DetailResto = {
    async render() {
      const heroEl = document.querySelector('#hero');
      heroEl.classList.add('hidden')
      return `
       <detail-component></detail-component>
       <button-like></button-like>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const dataDetailResto = await restoranDb.detailRestoran(url.id);
      const detailComponent = document.querySelector('detail-component') 
      detailComponent.setDetailRestorants(await dataDetailResto.restaurant);
      // const buttonLike = document.querySelector('button-like');
    },
};

export default DetailResto;