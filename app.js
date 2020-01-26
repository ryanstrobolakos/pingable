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

  const endpointDetails_1 = document.querySelector("#endpoint-details-1");

  const name_1 = document.querySelector("#name-1");
  const endpointName_1 = document.querySelector("#endpoint-name-1");
  const ipAddress_1 = document.querySelector("#ip-address-1");
  let ipAddressText_1 = "";

  let repeatPing;

  const timeDisplay_1 = document.querySelector("#time-display-1");
  let clock;
  let minutes;
  let seconds;
  let totalSeconds_1 = {
    value: 0
  };

  //**GENERAL FUNCTIONS
  //changeColor, changeOpacity, changeDisplay functions to change styling

  function changeColor(object, value) {
    object.style.backgroundColor = value;
  }

  function changeOpacity(object, value) {
    object.style.opacity = value;
  }

  function changeVisibility(object, value) {
    object.style.visibility = value;
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
    iconId,
    endpointDetails,
    totalSeconds,
    timeDisplay
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
        endpoint,
        configurationDetails,
        configurationForm,
        iconId,
        endpointDetails,
        totalSeconds,
        timeDisplay
      );
    }
  }

  function deactivateEndpoint(
    button,
    endpointBlock,
    endpoint,
    configurationDetails,
    configurationForm,
    iconId,
    endpointDetails,
    totalSeconds,
    timeDisplay
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
    changeVisibility(configurationDetails, "hidden");
    endpointDetails.className = "endpoint-details fadeOut";
    resetConfiguration(
      button,
      configurationForm,
      iconId,
      endpoint,
      totalSeconds,
      timeDisplay
    );
    clearTimeout(repeatPing);
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
      iconId_1,
      endpointDetails_1,
      totalSeconds_1,
      timeDisplay_1
    );
  });

  //**ENDPOINT CLICK FUNCTIONALITY
  //showConfiguration and submitConfiguration functions

  function showConfiguration(
    endpoint,
    configurationDetails,
    configure,
    endpointDetails
  ) {
    endpoint.addEventListener("click", () => {
      configurationDetails.style.animation = "fadeDown 0.5s";
      changeVisibility(configurationDetails, "visible");
      changeOpacity(configure, 0);
      endpointDetails.className = "endpoint-details fadeOut";
      endpoint.addEventListener("mouseenter", () => {
        changeOpacity(configure, 0);
      });
    });
  }

  function submitConfiguration(
    button,
    endpoint,
    configurationDetails,
    configure,
    endpointDetails,
    endpointName,
    nameField,
    ipAddressText,
    ipAddressField,
    totalSeconds,
    timeDisplay
  ) {
    button.addEventListener("click", () => {
      configurationDetails.style.animation = "fadeUp 0.5s";
      changeVisibility(configurationDetails, "hidden");
      endpointDetails.className = "endpoint-details fadeIn";
      endpoint.addEventListener("mouseenter", () => {
        changeOpacity(configure, 100);
      });
      endpoint.addEventListener("mouseleave", () => {
        changeOpacity(configure, 0);
      });
      endpointName.innerHTML = nameField.value;
      ipAddressText = ipAddressField.value;
      ping(ipAddressText, endpoint, totalSeconds, timeDisplay);
    });
  }

  //clock functionality - startClock, clockTimer, and resetClock functions
  function startClock(totalSeconds, timeDisplay) {
    clock = setInterval(() => {
      clockTimer(totalSeconds, timeDisplay);
    }, 1000);
  }

  function clockTimer(totalSeconds, timeDisplay) {
    ++totalSeconds.value;
    minutes = Math.floor(totalSeconds.value / 60);
    seconds = Math.floor(totalSeconds.value % 60);
    if (seconds < 10) seconds = "0" + seconds;

    timeDisplay.innerHTML = `${minutes}:${seconds}`;
  }

  function resetClock(totalSeconds, timeDisplay) {
    clearInterval(clock);
    totalSeconds.value = 0;
    minutes = 0;
    seconds = "0" + 0;

    timeDisplay.innerHTML = `${minutes}:${seconds}`;
  }

  //ping function using AJAX to send info to server
  function ping(ipAddressText, endpoint, totalSeconds, timeDisplay) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = this.responseText;
        console.log(response);
        repeatPing = setTimeout(function() {
          ping(ipAddressText, endpoint, totalSeconds, timeDisplay);
        }, 5000);
        if (response == "true") {
          changeColor(endpoint, "#A5CA93");
          resetClock(totalSeconds, timeDisplay);
          startClock(totalSeconds, timeDisplay);
        } else {
          changeColor(endpoint, "#f44e4e");
          resetClock(totalSeconds, timeDisplay);
          startClock(totalSeconds, timeDisplay);
        }
      }
    };
    xhttp.open("POST", "http://localhost:8080", true);
    xhttp.send(ipAddressText);
  }

  //calling showConfiguration on click of endpoint
  showConfiguration(
    endpoint_1,
    configurationDetails_1,
    clickToConfigure_1,
    endpointDetails_1
  );

  //calling submitConfiguration on click of submit button
  submitConfiguration(
    submitInput_1,
    endpoint_1,
    configurationDetails_1,
    clickToConfigure_1,
    endpointDetails_1,
    endpointName_1,
    name_1,
    ipAddressText_1,
    ipAddress_1,
    totalSeconds_1,
    timeDisplay_1
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

  function resetConfiguration(
    button,
    configurationForm,
    iconId,
    endpoint,
    totalSeconds,
    timeDisplay
  ) {
    button.addEventListener("click", () => {
      configurationForm.reset();
      resetIcon(iconId);
      changeColor(endpoint, "#f44e4e");
      clearTimeout(repeatPing);
      resetClock(totalSeconds, timeDisplay);
    });
  }

  //calling resetConfiguration on click of clear button
  resetConfiguration(
    clearInput_1,
    configurationForm_1,
    iconId_1,
    endpoint_1,
    totalSeconds_1,
    timeDisplay_1
  );
});
