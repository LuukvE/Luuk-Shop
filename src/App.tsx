import { FC } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./App.scss";
import Success from "./Success";
import { useSelector, useDispatch, actions } from "./store";

const App: FC = () => {
  const dispatch = useDispatch();
  const { error, name, submitted } = useSelector((state) => state);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <strong>{error}</strong>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          if (!name) return;

          dispatch(
            actions.set({
              submitted: new Date().toJSON(),
            })
          );
        }}
      >
        <Form.Control
          placeholder="Name"
          value={name}
          onChange={(e) => {
            dispatch(
              actions.set({
                name: e.target.value,
              })
            );
          }}
        />
        <Button type="submit">
          {submitted ? `Submitted ${submitted}` : "Not submitted"}
        </Button>
      </Form>

      {submitted && <Success />}
    </div>
  );
};

export default App;
