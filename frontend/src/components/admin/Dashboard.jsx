import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Dashboard = () => {
  
  const auth = useSelector((state) => state.auth);
  // React.useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   let token_obj = JSON.parse(token);
    // console.log(token_obj)
  // }, [])
  // if (!auth.isAdmin) return <p>Access denied. Not an Admin!</p>;

  <h3>Quick Links</h3>
  return (
    <StyledDashboard>
      <SideNav>

        {auth.isAdmin === 'admin' ? (<NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/addclients"
        >
          Add Client
        </NavLink>) : null}

       {auth.isAdmin === 'TPO' ? (<NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/hirings"
        >

          Companies Hiring
        </NavLink>) : null}

       {auth.isAdmin === 'TPO' ? (<NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/acceptedRequest"
        >

          Accepted Requests
        </NavLink>) : null }

        {auth.isAdmin === 'TPO'? (<NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/allStudentData"
        >
          All student data
        </NavLink>) : null}
        {auth.isAdmin === 'TPO' ? (<NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/algorithm"
        >
          Skills Recommmendatiom 
        </NavLink>) : null}
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;
