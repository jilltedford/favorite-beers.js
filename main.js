let myFavoriteBeers = [
  { name: 'Space Dust', type: 'IPA', brewery: 'Elysian' }, 
  { name: 'Southern Vine Sour', type: 'Sour', brewery: 'New Belgium' }, 
  { name: 'Cardigans of the Galaxy', type: 'IPA', brewery: 'Monday Night Brewing' },
  { name: 'Bolo Coconut Brown', type: 'Brown', brewery: 'Burial' },
  { name: 'Trees: High And Mighty', type: 'IPA', brewery: 'Tailgate' },
  { name: 'Fourty Four', type: 'Porter', brewery: 'Black Abbey' },
  { name: 'Empire of Eternal Nothingness', type: 'Stout', brewery: 'Burial' },
  { name: 'Evil Octopus', type: 'IPA', brewery: 'Mayday Brewery' },
  { name: 'Guinness Draught', type: 'Stout', brewery: 'Guinness' }
];

const beerStyles = myFavoriteBeers.reduce((acc, beer) => {
  if (acc.hasOwnProperty(beer.type)) {
    acc[beer.type] += 1;
  } else {
    acc[beer.type] = 1;
  }
  return acc;
}, {});

console.log(beerStyles); // {IPA: 4, Sour: 1, Brown: 1, Porter: 1, Stout: 2}
