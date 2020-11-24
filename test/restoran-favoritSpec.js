import {itActsAsFavoriteRestoranModel} from './contract/favorite-restoran-contract';
import RestoranFavorit from '../src/scripts/data/restoran-favorit';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestoranFavorit.getAllRestoran()).forEach(async (movie) => {
      await RestoranFavorit.deleteRestoran(movie.id);
    });
  });

  itActsAsFavoriteRestoranModel(RestoranFavorit);
});
