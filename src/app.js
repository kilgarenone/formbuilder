import "./index.scss";

if (module.hot) {
  module.hot.accept();
}
const button = document.createElement("button");
button.textContent = "Open chat";
document.body.appendChild(button);
throw new Error("aa");
button.onclick = () => {
  import(/* webpackChunkName: "chat" */ "./chat").then(chat => {
    chat.init();
  });
};

const root = document.createElement("div");
root.innerHTML = `<p>Hello Webp99ack.</p>`;
document.body.appendChild(root);
