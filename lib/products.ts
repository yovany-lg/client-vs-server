type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My First Product',
    description: 'This is a first product - amazing!',
    price: 9.99,
  },
  {
    id: 'p2',
    title: 'My Second Product',
    description: 'This is a second product - amazing!',
    price: 9.99,
  },
  {
    id: 'p3',
    title: 'Third Product',
    description: 'This is a third product - amazing!',
    price: 9.99,
  },
  {
    id: 'p4',
    title: 'Fourth Product',
    description: 'This is a fourth product - amazing!',
    price: 9.99,
  },
  {
    id: 'p5',
    title: 'Fifth Product',
    description: 'This is a fifth product - amazing!',
    price: 9.99,
  },
];

export async function getProducts() {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(DUMMY_PRODUCTS);
    }, 1000);
  });
}