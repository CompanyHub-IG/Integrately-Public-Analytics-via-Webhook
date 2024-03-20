// integratelyWebhookLibrary.js

var integratelyWebhookLibrary = (function () {
    
    var webhookURL;

    // Private function to get li_fat_id cookie
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) 
            return parts.pop().split(";").shift();
    }

    // Public function to initialize the library with webhook URL or ID
    function init(webhookIdOrURL) {
        if (webhookIdOrURL.startsWith("https://webhooks.integrately.com/a/webhooks/")) {
            webhookURL = webhookIdOrURL;
        } else {
            webhookURL = "https://webhooks.integrately.com/a/webhooks/" + webhookIdOrURL;
        }
    }

    // Public function to send event to Integrately webhook
    function sendEventIGToWebhook(eventName, eventPayload) {
        var li_fat_id = getCookie('li_fat_id');

        //if (li_fat_id) {
            var eventData = { li_fat_id: li_fat_id };
            if (eventPayload) {
                eventData.event = eventName;
                eventData.payload = eventPayload;
            } else {
                eventData.event = eventName;
            }

            var xhr = new XMLHttpRequest();
            xhr.open("POST", webhookURL, true);
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
       // } else {
        //    console.log("li_fat_id cookie not found. Skipping AJAX call.");
       // }
    }

    // Expose public methods
    return {
        init: init,
        sendEventIGToWebhook: sendEventIGToWebhook
    };
})();
