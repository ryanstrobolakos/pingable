window.addEventListener("load", () => {
  const workspace = document.querySelector(".workspace");
  const createButton = document.querySelector(".create-button");

  createButton.addEventListener("click", function() {
    createEndpoint();
  });

  const createEndpoint = () => {
    const endpointButton = document.createElement("button");
    endpointButton.innerHTML = "Click to Configure";
    workspace.appendChild(endpointButton);
  };
});
