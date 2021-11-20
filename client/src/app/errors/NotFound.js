import {
  Container,
  Divider,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Oops - we could not find what are you looking
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to="/catalog">
        Go Back to Shop
      </Button>
    </Container>
  );
}
