import { Link } from "react-router-dom";

// import { Routes, Route, Navigate } from "react-router-dom";

export default function ProductList({ products, type, styles }) {
  const filteredProducts = products.filter(
    (product) => product.type === styles
  );
  console.log(filteredProducts);
  if (styles) {
    return (
      <section>
        <h2>All {type}</h2>
        <article className="products">
          <ul>
            {filteredProducts.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/${type.toLowerCase()}/${product.id}`}>
                    <h4>{product.name}</h4>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    );
  } else {
    return (
      <section>
        <h2>All {type}</h2>
        <article className="products">
          <ul>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/${type.toLowerCase()}/${product.id}`}>
                    <h4>{product.name}</h4>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    );
  }
}
