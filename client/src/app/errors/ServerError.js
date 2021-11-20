import {
  Container,
  Paper,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError() {
  const history = useHistory();
  const { state } = useLocation();
  return (
    <Container component={Paper}>
      {state.error && state.error ? (
        <>
          <Typography variant="h5" color="error">
            {state.error.title}
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5">Server Error</Typography>
      )}
      <Button onClick={() => history.push("/catalog")}>
        Go back to the store
      </Button>
    </Container>
  );
}
