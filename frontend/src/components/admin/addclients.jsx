import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Add Client</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/addclients/create-clients")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
