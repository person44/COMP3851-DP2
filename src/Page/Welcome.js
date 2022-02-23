import ReactDOM from "react-dom";
import Typist from "react-typist";
import { Button } from "react-bootstrap";

/* Typing effect by hiteshsahu
URL: https://codesandbox.io/s/k54yp599oo?file=/src/index.js*/

function Welcome() {
    const heading = {
        fontSize: 70
    }

  return (
    <div
      style={{
        color: "#fff",
        backgroundColor: "#000",
        height: "100vh",
        fontSize: 40,
        fontFamily: "monospace",
        padding: 100
      }}
    >
        <Typist>
          <p style={ heading }> Welcome to UON iPath! </p>
          <Typist.Delay ms={50} />
          We are always here for you!
          <br />
          UON iPath helps you to find your perfect pathway from a freshman to the day you graduate.
          <br />
          TRY US!
              </Typist>
              <Button variant="success" href="./Login">SKIP AHEAD AND LOGIN</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);


export default Welcome;