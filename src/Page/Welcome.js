import ReactDOM from "react-dom";
import Typist from "react-typist";
import { Button } from "react-bootstrap";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

/* Typing effect by hiteshsahu
URL: https://codesandbox.io/s/k54yp599oo?file=/src/index.js*/

function Welcome() {
    const heading = {
        fontSize: "6vw"
    }

  return (
    <div
      style={{
        color: "#fff",
        backgroundColor: "#000",
        height: "100vh",
        fontSize: "4vw",
        fontFamily: "monospace",
        padding: "5vw"
      }}
    >
        <Typist>
          <p style={ heading }> Welcome to UON iPath! </p>
          <Typist.Delay ms={50} />
          We help you to find your perfect pathway from a freshman to the day you graduate. TRY US! <br />
          </Typist>
          
          <Button variant="success" href="../Login">SKIP AHEAD AND LOGIN</Button>
    </div>
  );
}


export default Welcome;