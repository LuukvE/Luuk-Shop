import { FC } from "react";
import Alert from "react-bootstrap/Alert";

import "./Success.scss";

const Success: FC = () => {
  return (
    <Alert className="Success" variant="success">
      Your form has been submitted!
    </Alert>
  );
};

export default Success;
