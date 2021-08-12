import { FC, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

import "./Success.scss";

const Success: FC<{ name: string }> = ({ name }) => {
  useEffect(() => {
    console.log("updated");

    return () => {
      console.log("cleanup update");
    };
  }, [name]);

  return (
    <Alert className="Success" variant="success">
      Your form has been submitted!
    </Alert>
  );
};

export default Success;
