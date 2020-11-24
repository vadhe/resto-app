const itActsAsFavoriteRestoranModel = (restoranFavorit) => {
  it('should return the restoran that has been added', async () => {
    restoranFavorit.putRestoran({id: 1});
    restoranFavorit.putRestoran({id: 2});

    expect(await restoranFavorit.getRestoran(1))
        .toEqual({id: 1});
    expect(await restoranFavorit.getRestoran(2))
        .toEqual({id: 2});
    expect(await restoranFavorit.getRestoran(3))
        .toEqual(undefined);
  });

  it('should refuse a restoran from being added if it does not have the correct property', async () => {
    restoranFavorit.putRestoran({aProperty: 'property'});

    expect(await restoranFavorit.getAllRestoran())
        .toEqual([]);
  });

  it('can return all of the restoran that have been added', async () => {
    restoranFavorit.putRestoran({id: 1});
    restoranFavorit.putRestoran({id: 2});

    expect(await restoranFavorit.getAllRestoran())
        .toEqual([
          {id: 1},
          {id: 2},
        ]);
  });

  it('should remove favorite restoran', async () => {
    restoranFavorit.putRestoran({id: 1});
    restoranFavorit.putRestoran({id: 2});
    restoranFavorit.putRestoran({id: 3});

    await restoranFavorit.deleteRestoran(1);

    expect(await restoranFavorit.getAllRestoran())
        .toEqual([
          {id: 2},
          {id: 3},
        ]);
  });

  it('should handle request to remove a restoran even though the restoran has not been added', async () => {
    restoranFavorit.putRestoran({id: 1});
    restoranFavorit.putRestoran({id: 2});
    restoranFavorit.putRestoran({id: 3});

    await restoranFavorit.deleteRestoran(4);

    expect(await restoranFavorit.getAllRestoran())
        .toEqual([
          {id: 1},
          {id: 2},
          {id: 3},
        ]);
  });
};

export {itActsAsFavoriteRestoranModel};
