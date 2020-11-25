const assert = require('assert');

Feature('Liking Restoran');

Before(({I}) => {
  I.amOnPage('/#/favorit');
});

Scenario('test tampilkan Restoran Favorit  Masih Kosong', ({I}) => {
  I.seeElement('#empaty');
  I.see('Restoran Favorit Masih Kosong', '#empaty');
});


Scenario('suka restoran favorit', async ({I}) => {
  I.see('Restoran Favorit Masih Kosong', '#empaty');

  I.amOnPage('/');
  // eslint-disable-next-line codeceptjs/no-pause-in-scenario
  // pause();

  I.seeElement('.restoran-title');

  const restoranFirst = locate('.restoran-title').first();
  const titleLikeRestoranFirst = await I.grabTextFrom(restoranFirst);

  I.click(locate(restoranFirst));

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorit');

  I.seeElement('.card');

  const titleLikeRestoranLike = await I.grabTextFrom('.restoran-title');
  assert.strictEqual(titleLikeRestoranFirst, titleLikeRestoranLike);
});
