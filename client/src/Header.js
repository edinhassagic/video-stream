import "./page.css";

import Button from "@mui/material/Button";
import { useHistory } from "react-router";
const Header = () => {
  let history = useHistory();

  return (
    <header>
      <div className="right">
        <Button
          onClick={() => history.push("/")}
          color="primary"
          variant="contained"
        >
          Go Back
        </Button>
      </div>
    </header>
  );
};

export default Header;
