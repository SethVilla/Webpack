import Astro from "./astro.jpeg";
import "./astro-image.scss";

class AstroImage {
  render() {
    const img = document.createElement("img");
    img.src = Astro;
    img.alt = "astro";
    img.classList.add("astro");
    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default AstroImage;
