window.addEventListener("load", () => {
  const endpointButton_1 = document.querySelector("#endpoint-button-1");
  const endpoint_1 = document.querySelector("#endpoint-1");
  const configurationDetails_1 = document.querySelector(
    "#configuration-details-1"
  );
  const clickToConfigure_1 = document.querySelector(".click-to-configure-1");
  const submitInput_1 = document.querySelector(".submit-input-1");
  const clearButton = document.querySelector(".clear-button");

  //endpointButton_1 click functionality

  let clickCount = 0;
  endpointButton_1.addEventListener("click", () => {
    //click to activate endpoint button 1
    if (clickCount == 0) {
      endpointButton_1.style.backgroundColor = "#449696";
      clickCount = 1;
      endpointButton_1.addEventListener("mouseenter", () => {
        endpointButton_1.style.backgroundColor = "#2d8282";
      });
      endpointButton_1.addEventListener("mouseleave", () => {
        endpointButton_1.style.backgroundColor = "#449696";
      });
      endpoint_1.style.opacity = 100;
      endpoint_1.addEventListener("mouseenter", () => {
        clickToConfigure_1.style.opacity = 100;
      });
      endpoint_1.addEventListener("mouseleave", () => {
        clickToConfigure_1.style.opacity = 0;
      });
      //click to deactive endpoint button 1
    } else {
      endpointButton_1.style.backgroundColor = "#818181";
      clickCount = 0;
      endpointButton_1.addEventListener("mouseenter", () => {
        endpointButton_1.style.backgroundColor = "#6e6e6e";
      });
      endpointButton_1.addEventListener("mouseleave", () => {
        endpointButton_1.style.backgroundColor = "#818181";
      });
      endpoint_1.style.opacity = 0;
      configurationDetails_1.style.opacity = 0;
    }
  });

  //endpoint_1 click functionality
  endpoint_1.addEventListener("click", () => {
    configurationDetails_1.style.opacity = 100;
    clickToConfigure_1.style.opacity = 0;
    endpoint_1.addEventListener("mouseenter", () => {
      clickToConfigure_1.style.opacity = 0;
    });
  });

  submitInput_1.addEventListener("click", () => {
    configurationDetails_1.style.opacity = 0;
    endpoint_1.addEventListener("mouseenter", () => {
      clickToConfigure_1.style.opacity = 100;
    });
    endpoint_1.addEventListener("mouseleave", () => {
      clickToConfigure_1.style.opacity = 0;
    });
  });
});
