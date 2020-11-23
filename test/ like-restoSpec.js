import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import RestoranFavorit from '../src/scripts/data/restoran-favorit';

describe('create a fiuture Like the Restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('should show the like button when the restoran has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restoran"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restoran has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restoran"]')).toBeFalsy();
  });

  it('should be able to like the restoran', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restoran = await RestoranFavorit.getRestoran(1);

    expect(restoran).toEqual({id: 1});

    RestoranFavorit.deleteRestoran(1);
  });

  it('should not add a restoran again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: 1,
      },
    });

    await RestoranFavorit.putRestoran({id: 1});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestoranFavorit.getAllRestoran()).toEqual([{id: 1}]);
    RestoranFavorit.deleteRestoran(1);
  });

  xit('should not add a restoran when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {},
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await RestoranFavorit.getAllRestoran()).toEqual([]);
  });
});
