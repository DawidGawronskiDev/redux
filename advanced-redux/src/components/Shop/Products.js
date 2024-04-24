import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 0,
    title: "Desktop",
    price: 500,
    description: "",
  },
  {
    id: 1,
    title: "Laptop",
    price: 300,
    description: "",
  },
  {
    id: 2,
    title: "Lamp",
    price: 20,
    description: "",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
