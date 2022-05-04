import { Route, RouteProps } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {useNavigate} from 'react-router-dom'

const ProtectedRoute = (props: RouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  if (auth.account) {
    if (props.path === "/login") {
      navigate("/");
    }
    return <Route {...props} />;
  } else if (!auth.account) {
    navigate("/login");
  } else {
    return <div>Not found</div>;
  }
};

export default ProtectedRoute;