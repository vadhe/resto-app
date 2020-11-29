import RestoranFavorit from '../src/scripts/data/restoran-favorit';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Create a fiuture unlike restoran', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestoranFavorit.putRestoran({id: 1});
  });

  afterEach(async () => {
    await RestoranFavorit.deleteRestoran(1);
  });

  xit('should display unlike button when the restoran has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});
    expect(document.querySelector('[aria-label="unlike this restoran"]'))
        .toBeTruthy();
  });

  xit('should not display like button when the restoran has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="like this restoran"]'))
        .toBeFalsy();
  });

  xit('should be able to remove liked restoran from the list', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    expect(await RestoranFavorit.getAllRestoran()).toEqual([]);
  });

  xit('should not throw error if the unliked restoran is not in the list', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});
    await RestoranFavorit.deleteRestoran(1);
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    expect(await RestoranFavorit.getAllRestoran()).toEqual([]);
  });
});
