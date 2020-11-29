// const assert = require('assert');

Feature('Liking Restoran');

Before(({I}) => {
  I.amOnPage('/#/favorit');
});

Scenario('tampilkan seluruh Restoran Favorit ', async ({I}) => {
  I.seeElement('card-component');
});
Scenario('unlike Restoran Favorit ', async ({I}) => {
  I.seeElement('.restoran-title');
  const restoranFirst = locate('.restoran-title').first();
  I.click(locate(restoranFirst));
  I.seeElement('.unlike');
  I.click('.unlike');
  I.amOnPage('/#/favorit');
  I.see('Restoran Favorit Masih Kosong', '#empaty');
});
