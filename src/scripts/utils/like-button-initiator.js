import {createLikeButtonTemplate, createLikedButtonTemplate} from '../views/components/ButtonCreateLike';
// import FavoriteRestoran from '../data/restoran-favorit';

const LikeButtonInitiator = {
  async init({likeButtonContainer, favoriteRestorans, restoran}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restoran;
    this._favoriteRestorans = favoriteRestorans;
    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restoran;

    if (await this._restoLiked(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _restoLiked(id) {
    const restoran = await this._favoriteRestorans.getRestoran(id);
    return !!restoran;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestorans.putRestoran(this._restoran);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestorans.deleteRestoran(this._restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
