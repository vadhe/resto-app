import CONFIG from '../../globals/config';

class CardComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async setRestoran(restorants) {
    this._restorants = restorants;
    this.render();
  }

  render() {
    if (this._restorants) {
      this._restorants.map((restoran) => {
        this.innerHTML += `
         <div class="card">
           <img src="${CONFIG.BASE_IMAGE_URL}${restoran.pictureId}"
            alt="${restoran.pictureId}" crossorigin="anonymous"></img>
           <span class="tooltip">Kota ${restoran.city}</span>
           <div class="card-content">
             <p class="rating">rating: ${restoran.rating}</p>
             <a href="${`/#/detail/${restoran.id}`}">
               <h2>${restoran.name}</h2>
             </a>
             <p class="description">${restoran.description}</p>
           </div>
        </div>`;
      });
    }
  }
}
customElements.define('card-component', CardComponent);

export default CardComponent;


