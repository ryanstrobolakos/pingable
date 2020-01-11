window.addEventListener("load", () => {
  const workspace = document.querySelector(".workspace");
  const createButton = document.querySelector(".create-button");
  const clearButton = document.querySelector(".clear-button");

  createButton.addEventListener("click", function() {
    createEndpoint();
  });

  const createEndpoint = () => {
    const endpointButton = document.createElement("button");
    endpointButton.innerHTML = "Click to Configure";
    workspace.appendChild(endpointButton);

    clearButton.addEventListener("click", function() {
      const clearEndpoints = () => {
        workspace.removeChild(endpointButton);
      };
      clearEndpoints();
    });
  };
});
