import "./hello-button.scss";

class HelloButton {
  buttonCssClass = "hello-button";
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "hello world";
      p.classList.add("hello-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloButton;
