import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../app/store/configureStore';
import BasketSummary from '../basket/BasketSummary';
import BasketTable from '../basket/BasketTable';

export default function Review() {
  const { basket } = useAppSelector(state => state.basket);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {basket &&
        <BasketTable items={basket.items} isBasket={false} />
      }
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ paddingBottom: "200px" }}
      >
        <Grid item xs={6}
        >
          <BasketSummary basket={basket} />
        </Grid>
      </Grid>
    </>
  );
}