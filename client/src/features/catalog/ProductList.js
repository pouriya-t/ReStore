import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
