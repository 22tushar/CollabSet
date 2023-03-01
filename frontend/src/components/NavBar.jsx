import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  
  const navigate=useNavigate();
  console.log(auth);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>CollabSet</h2>
      </Link>
      {auth._id ? (
        <Links>
          {auth.isAdmin== 'admin'? (
            <div>
              <Link to="/admin/adminpage">Admin</Link>
            </div>
          ) : null}
          <div
            onClick={() => {
              dispatch(logoutUser(null));
              navigate("/")
              toast.warning("Logged out!", { position: "bottom-left" });
            }}
          >
           {auth._id ? (<h4>Logout</h4>) : null}
          </div>
        </Links>
      ) : (
        <AuthLinks>
          <Link to="/login">Login</Link>
        </AuthLinks>
      )}
    </nav>
  );
};

export default NavBar;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
`;
