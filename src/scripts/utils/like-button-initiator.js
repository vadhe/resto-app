import FavoriteRestoran from '../data/restoran-favorit';
import {createLikeButtonTemplate, createLikedButtonTemplate} from '../views/components/ButtonCreateLike';

const LikeButtonInitiator = {
  async init({likeButtonContainer, restoran}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restoran;

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
    const restoran = await FavoriteRestoran.getRestoran(id);
    return !!restoran;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoran.putRestoran(this._restoran);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoran.deleteRestoran(this._restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
