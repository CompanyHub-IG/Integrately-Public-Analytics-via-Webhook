// integratelyWebhookLibrary.js
//chidanand code 
var ig = (function () {
  var webhookURL;

  // Private function to get li_fat_id or _fbp cookie
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Public function to initialize the library with webhook URL or ID
  function init(webhookIdOrURL) {
    if (
      webhookIdOrURL.startsWith("https://webhooks.integrately.com/a/webhooks/")
    ) {
      webhookURL = webhookIdOrURL;
    } else {
      webhookURL =
        "https://webhooks.integrately.com/a/webhooks/" + webhookIdOrURL;
    }
  }

  function sendEvent(eventName, eventPayload, isForCookies) {
    var li_fat_id = getCookie("li_fat_id");
    var fbp = getCookie("_fbp");
    var c_user = getCookie("c_user");
    var fbc = getCookie("_fbc");
    var eventData = {};

    // Add cookies to eventData if present
    if (li_fat_id) {
      eventData.li_fat_id = li_fat_id;
    }
    if (fbp) {
      eventData._fbp = fbp;
      if(fbc){
        eventData._fbc = fbc;
      }
      if (c_user) {
        eventData.c_user = c_user;
      }
    }

    // Add event name and payload
    eventData.event = eventName;
    if (eventPayload) {
      Object.assign(eventData, eventPayload);
    }

    // Check conditions for sending the event
    if (!isForCookies || (isForCookies && (li_fat_id || fbp))) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://webhook.site/5c015147-0438-4395-9913-79611a69f02c", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("Request successful");
          console.log(xhr.responseText);
        } else {
          console.error("Request failed with status", xhr.status);
        }
      };
      var jsonData = JSON.stringify(eventData);
      xhr.send(jsonData);
    } else {
      console.log(
        "Skipping AJAX call because li_fat_id or _fbp is not present and isForCookies is true."
      );
    }
  }

  // Expose public methods
  return {
    init: init,
    sendEvent: sendEvent,
  };
})();
