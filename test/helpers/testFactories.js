import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoran from '../../src/scripts/data/restoran-favorit';

const createLikeButtonPresenter = async (restoran) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestorans: FavoriteRestoran,
    restoran,
  });
};

export {createLikeButtonPresenter};
