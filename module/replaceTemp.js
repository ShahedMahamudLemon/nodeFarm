module.exports = (temp, product) => {
  let replaceWithData = temp.replace(/{%ProductName%}/g, product.productName);
  replaceWithData = replaceWithData.replace(/{%Image%}/g, product.image);
  replaceWithData = replaceWithData.replace(/{%Quantity%}/g, product.quantity);
  replaceWithData = replaceWithData.replace(/{%Country%}/g, product.from);
  replaceWithData = replaceWithData.replace(/{%Price%}/g, product.price);
  replaceWithData = replaceWithData.replace(/{%ID%}/g, product.id);
  replaceWithData = replaceWithData.replace(
    /{%Nutrients%}/g,
    product.nutrients
  );
  replaceWithData = replaceWithData.replace(
    /{%Description%}/g,
    product.description
  );

  if (!product.organic) {
    replaceWithData = replaceWithData.replace(/{%NotOrganic%}/g, "not-organic");
  }
  return replaceWithData;
};
