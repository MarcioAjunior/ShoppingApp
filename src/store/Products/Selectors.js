//Retorna todos o produtos. 
export const allProducts = state => state.products;
//Retorna todos os produtos com checked true
export const selectedProductsfilter = state => state.products.filter(product => product.checked);
//Retorna o preço total dos produtor filtrador por checked true
export const totalPrice = state => state.products.filter(product => product.checked).reduce( (a ,b) => a + b.price, 0)

