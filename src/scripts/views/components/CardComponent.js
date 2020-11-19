import CONFIG from "../../globals/config";

class CardComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // attributeChangedCallback() {
    
  // }

  setRestoran(restorants) {
    this._restorants = restorants;
    this.render();
  }

  render() {
    if(this._restorants !== null){
      this._restorants.map(restoran => {
        this.innerHTML += `
         <div class="card">
           <img src="${CONFIG.BASE_IMAGE_URL}${restoran.pictureId}" alt="${restoran.pictureId}"></img>
           <span class="tooltip">Kota ${restoran.city}</span>
           <div class="card-content">
             <p class="rating">rating: ${restoran.rating}</p>
             <a href="${`/#/detail/${restoran.id}`}"> <h3>${restoran.name}</h3></a>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi reiciendis in! Nisi natus minima explicabo. Enim, accusantium? Sit distinctio magnam architecto, minima odit ut officia nulla non! A, doloremque.</p>
           </div>
        </div>`
      });
    }
  }
}
customElements.define('card-component', CardComponent);

export default CardComponent;




