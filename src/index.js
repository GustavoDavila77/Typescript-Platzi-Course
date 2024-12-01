//@ts-check
(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProducto(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
    toString() {
      return `${this.name} ${this.lastName} has limit `;
    }
  }
  const rta = person +  limit.toString();
  console.log(rta);
});
