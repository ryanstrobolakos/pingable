window.addEventListener("load", () => {
  const workspace = document.querySelector(".workspace");
  const endpointButton_1 = document.querySelector("#endpoint-button-1");
  const clearButton = document.querySelector(".clear-button");

  let clickCount = 0;
  endpointButton_1.addEventListener("click", () => {
    if (clickCount == 0) {
      endpointButton_1.style.backgroundColor = "#449696";
      clickCount = 1;
      endpointButton_1.addEventListener("mouseenter", () => {
        endpointButton_1.style.backgroundColor = "#2d8282";
      });
      endpointButton_1.addEventListener("mouseleave", () => {
        endpointButton_1.style.backgroundColor = "#449696";
      });
    } else {
      endpointButton_1.style.backgroundColor = "#818181";
      clickCount = 0;
      endpointButton_1.addEventListener("mouseenter", () => {
        endpointButton_1.style.backgroundColor = "#6e6e6e";
      });
      endpointButton_1.addEventListener("mouseleave", () => {
        endpointButton_1.style.backgroundColor = "#818181";
      });
    }
  });

  // function inactiveMouseEnter(){
  //   endpointButton_1.style.backgroundColor = "#6e6e6e";
  // }

  // function inactiveMouseLeave(){
  //   endpointButton_1.style.backgroundColor = "#818181";
  // }

  //   createButton.addEventListener("click", function() {
  //     createEndpoint();
  //   });

  //   const createEndpoint = () => {
  //     const endpointButton = document.createElement("div");
  //     endpointButton.innerHTML = "Click to Configure";
  //     workspace.appendChild(endpointButton);

  //     clearButton.addEventListener("click", function() {
  //       const clearEndpoints = () => {
  //         workspace.removeChild(endpointButton);
  //       };
  //       clearEndpoints();
  //     });
  //   };
});
