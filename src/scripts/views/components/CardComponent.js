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
      if (this._restorants.length > 0) {
        this._restorants.map((restoran) => {
          this.innerHTML += `
           <div class="card">
             <img class="lazyload" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL}${restoran.pictureId}"
              data-src="${CONFIG.BASE_IMAGE_URL}${restoran.pictureId}"
              alt="${restoran.pictureId}" crossorigin="anonymous"></img>
             <span class="tooltip">Kota ${restoran.city}</span>
             <div class="card-content">
               <p class="rating">rating: ${restoran.rating}</p>
               <a class="restoran-title" href="${`/#/detail/${restoran.id}`}">
                 <h3>${restoran.name}</h3>
               </a>
               <p class="description">${restoran.description}</p>
             </div>
          </div>`;
        });
      } else {
        this.innerHTML = `<div id="empaty"> Restoran Favorit  Masih Kosong</div>`;
      }
    }
  }
}
customElements.define('card-component', CardComponent);

