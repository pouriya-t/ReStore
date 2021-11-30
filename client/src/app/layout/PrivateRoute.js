import { Route, Redirect } from "react-router";
import { useAppSelector } from "../store/configureStore";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAppSelector((state) => state.account);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
