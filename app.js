window.addEventListener("load", () => {
  const endpointButton_1 = document.querySelector("#endpoint-button-1");
  const endpointBlock_1 = document.querySelector("#endpoint-block-1");
  const endpoint_1 = document.querySelector("#endpoint-1");
  const configurationDetails_1 = document.querySelector(
    "#configuration-details-1"
  );
  const clickToConfigure_1 = document.querySelector("#click-to-configure-1");
  const submitInput_1 = document.querySelector("#submit-input-1");

  const iconId_1 = document.querySelector("#iconId-1");

  const website_1 = document.querySelector("#website-1");
  const server_1 = document.querySelector("#server-1");
  const computer_1 = document.querySelector("#computer-1");
  const printer_1 = document.querySelector("#printer-1");
  const networkDevice_1 = document.querySelector("#network-device-1");

  const configurationForm_1 = document.querySelector("#configuration-form-1");
  const clearInput_1 = document.querySelector("#clear-input-1");

  //**GENERAL FUNCTIONS
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

  //**activateEndpoint and deactivateEndpoint FUNCTIONS
  //called when clicking on endpointButton

  let clickCount = 0;
  function activateEndpoint(
    button,
    color,
    hoverColor,
    endpointBlock,
    endpoint,
    configure,
    configurationDetails,
    configurationForm,
    iconId
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
      configurationDetails.style.animation = "none";
    } else {
      deactivateEndpoint(
        button,
        endpointBlock,
        configurationDetails,
        configurationForm,
        iconId
      );
    }
  }

  function deactivateEndpoint(
    button,
    endpointBlock,
    configurationDetails,
    configurationForm,
    iconId
  ) {
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
    resetConfiguration(button, configurationForm, iconId);
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
      configurationDetails_1,
      configurationForm_1,
      iconId_1
    );
  });

  //**ENDPOINT CLICK FUNCTIONALITY
  //showConfiguration and submitConfiguration functions

  function showConfiguration(endpoint, configurationDetails, configure) {
    endpoint.addEventListener("click", () => {
      configurationDetails.style.animation = "fadeDown 0.5s";
      changeOpacity(configurationDetails, 100);
      changeOpacity(configure, 0);
      endpoint.addEventListener("mouseenter", () => {
        changeOpacity(configure, 0);
      });
    });
  }

  function submitConfiguration(
    button,
    endpoint,
    configurationDetails,
    configure
  ) {
    button.addEventListener("click", () => {
      configurationDetails.style.animation = "fadeUp 0.5s";
      changeOpacity(configurationDetails, 0);
      endpoint.addEventListener("mouseenter", () => {
        changeOpacity(configure, 100);
      });
      endpoint.addEventListener("mouseleave", () => {
        changeOpacity(configure, 0);
      });
    });
  }

  //calling showConfiguration on click of endpoint
  showConfiguration(endpoint_1, configurationDetails_1, clickToConfigure_1);

  //calling submitConfiguration on click of submit button
  submitConfiguration(
    submitInput_1,
    endpoint_1,
    configurationDetails_1,
    clickToConfigure_1
  );

  //**CHANGE ICON FUNCTIONALITY
  //icon constants, changeIcon function, and resetIcon function

  const defaultIcon = "fas fa-question";
  const websiteIcon = "far fa-address-card";
  const serverIcon = "far fa-clone";
  const computerIcon = "fas fa-laptop";
  const printerIcon = "fas fa-print";
  const networkDeviceIcon = "fas fa-arrows-alt";

  function changeIcon(button, iconId, value) {
    button.addEventListener("click", () => {
      iconId.className = value;
    });
  }

  function resetIcon(iconId) {
    iconId.className = defaultIcon;
  }

  //calling changeIcon function for each icon
  changeIcon(website_1, iconId_1, websiteIcon);
  changeIcon(server_1, iconId_1, serverIcon);
  changeIcon(computer_1, iconId_1, computerIcon);
  changeIcon(printer_1, iconId_1, printerIcon);
  changeIcon(networkDevice_1, iconId_1, networkDeviceIcon);

  //**RESET CONFIGURATION DETAILS FUNCTIONALITY

  function resetConfiguration(button, configurationForm, iconId) {
    button.addEventListener("click", () => {
      configurationForm.reset();
      resetIcon(iconId);
    });
  }

  //calling resetConfiguration on click of clear button
  resetConfiguration(clearInput_1, configurationForm_1, iconId_1);
});
