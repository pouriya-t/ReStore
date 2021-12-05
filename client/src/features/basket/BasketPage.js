import {
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  const { basket } = useAppSelector((state) => state.basket);

  if (!basket || (basket && basket.items.length === 0))
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <>
      <BasketTable items={basket.items} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ paddingBottom: "200px" }}
      >
        <Grid item xs={6}>
          <BasketSummary basket={basket} />
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            size="large"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
