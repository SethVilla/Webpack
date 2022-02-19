import HelloButton from "./components/button/hello-button";
import Heading from "./components/heading/heading";
import _ from "lodash";

const helloButton = new HelloButton();
const heading = new Heading();
heading.render(_.upperFirst("kiwi"));
helloButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Prod");
} else if (process.env.NODE_ENV === "development") {
  console.log("dev");
}
