import Heading from "./components/heading/heading";
import AstroImage from "./components/astro-image/astro-image";
import _ from "lodash";

const heading = new Heading();
const image = new AstroImage();

heading.render(_.upperFirst("astro"));
image.render();
