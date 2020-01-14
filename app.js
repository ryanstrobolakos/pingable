window.addEventListener("load", () => {
  const endpointButton_1 = document.querySelector("#endpoint-button-1");
  const endpointBlock_1 = document.querySelector("#endpoint-block-1");
  const endpoint_1 = document.querySelector("#endpoint-1");
  const configurationDetails_1 = document.querySelector(
    "#configuration-details-1"
  );
  const clickToConfigure_1 = document.querySelector("#click-to-configure-1");
  const submitInput_1 = document.querySelector("#submit-input-1");

  //changeColor, changeOpacity, changeDisplay functions to change styling

  function changeColor(object, value) {
    object.style.backgroundColor = value;
  }

  function changeOpacity(object, value) {
    object.style.opacity = value;
  }

  function changeDisplay(object, value) {
    object.style.display = value;
  }

  //activateEndpoint and deactivateEndpoint functions, called when clicking on endpointButton

  let clickCount = 0;

  function activateEndpoint(
    button,
    color,
    hoverColor,
    endpointBlock,
    endpoint,
    configure,
    configurationDetails
  ) {
    if (clickCount == 0) {
      changeColor(button, color);
      clickCount = 1;
      button.addEventListener("mouseenter", () => {
        changeColor(button, hoverColor);
      });
      button.addEventListener("mouseleave", () => {
        changeColor(button, color);
      });
      changeDisplay(endpointBlock, "flex");
      endpoint.addEventListener("mouseenter", () => {
        changeOpacity(configure, 100);
      });
      endpoint.addEventListener("mouseleave", () => {
        changeOpacity(configure, 0);
      });
    } else {
      deactivateEndpoint(button, endpointBlock, configurationDetails);
    }
  }

  function deactivateEndpoint(button, endpointBlock, configurationDetails) {
    changeColor(button, "#818181");
    clickCount = 0;
    button.addEventListener("mouseenter", () => {
      changeColor(button, "#6e6e6e");
    });
    button.addEventListener("mouseleave", () => {
      changeColor(button, "#818181");
    });
    changeDisplay(endpointBlock, "none");
    changeOpacity(configurationDetails, 0);
  }

  //calling activateEndpoint function on click of endpointButton

  endpointButton_1.addEventListener("click", () => {
    activateEndpoint(
      endpointButton_1,
      "#449696",
      "#2d8282",
      endpointBlock_1,
      endpoint_1,
      clickToConfigure_1,
      configurationDetails_1
    );
  });

  //calling showConfiguration on click of endpoint
  endpoint_1.addEventListener("click", () => {
    showConfiguration(endpoint_1, configurationDetails_1, clickToConfigure_1);
  });

  //calling submitConfiguration on click of submit
  submitInput_1.addEventListener("click", () => {
    submitConfiguration(endpoint_1, configurationDetails_1, clickToConfigure_1);
  });

  //endpoint_1 click functionality

  function showConfiguration(endpoint, configurationDetails, configure) {
    changeOpacity(configurationDetails, 100);
    changeOpacity(configure, 0);
    endpoint.addEventListener("mouseenter", () => {
      changeOpacity(configure, 0);
    });
  }

  function submitConfiguration(endpoint, configurationDetails, configure) {
    changeOpacity(configurationDetails, 0);
    endpoint.addEventListener("mouseenter", () => {
      changeOpacity(configure, 100);
    });
    endpoint.addEventListener("mouseleave", () => {
      changeOpacity(configure, 0);
    });
  }
});
