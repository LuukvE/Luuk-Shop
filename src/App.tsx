import { FC, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./App.scss";
import Success from "./Success";
import { FormState } from "./types";

const App: FC = () => {
  const [obj, setObj] = useState<FormState>(null);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          if (!obj?.name) return;

          setObj(
            obj.submitted
              ? null
              : {
                  ...obj,
                  submitted: new Date(),
                }
          );
        }}
      >
        <Form.Control
          placeholder="Name"
          value={obj?.name || ""}
          onChange={(e) => {
            setObj({
              name: e.target.value,
              submitted: obj?.submitted,
            });
          }}
        />
        <Button type="submit">
          {obj?.submitted
            ? `Submitted ${obj.submitted.toJSON()}`
            : "Not submitted"}
        </Button>
      </Form>

      {obj?.submitted && <Success name={obj?.name || ""} />}
    </div>
  );
};

export default App;
