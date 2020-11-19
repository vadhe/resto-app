import CONFIG from "../../globals/config";
class DetailComponent extends HTMLElement {
  connectedCallback() {
      this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  
  setDetailRestorants(restorants)  {
    this._restorants = restorants;
    this.render();
  }
  render() {
      this.innerHTML = `
      <div class="detail">
        <div class="detail__header">
          <h3>${this._restorants.name}</h3>
          <img src="${CONFIG.BASE_IMAGE_URL}${this._restorants.pictureId}" alt="${this._restorants.name}"/>
        </div>
        <div class="detail__body">
          <p class="description">${this._restorants.description}"</p>
          <address>Kota: ${this._restorants.city} jln ${this._restorants.address}</address>
          <div>kategori: ${this._restorants.categories.map((res)=> res.name).join(',')}</div>
          <div><span>Daftar Makanan: </span>${this._restorants.menus.foods.map((res)=> res.name).join(', ')}</div>
          <div><span> Daftar Minuman: </span>${this._restorants.menus.drinks.map((res)=> res.name).join(', ')}</div>
          <h3>Rating Restouran: <span class="rating">${this._restorants.rating}</span></h3>
        </div>
      </div>
      <div class="review">
        ${this._restorants.customerReviews.map(review => `
        <div class="review__main">
          <h3>${review.name}</h3>
          <p>${review.review}</p>
          <span class="date">${review.date}</span>
        </div>
        ` ).join('')}
       </div>`
  }
}

customElements.define('detail-component', DetailComponent);
export default DetailComponent;