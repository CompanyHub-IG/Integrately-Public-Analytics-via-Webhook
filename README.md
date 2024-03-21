# Integrately Webhook Sender Library

## Overview

This is a simple JavaScript library that allows you to send data via webhook to [webhooks.integrately.com](https://webhooks.integrately.com). It provides an easy-to-use method for sending events with data to your configured webhook endpoint.

## Usage

To send an event with data using this library, you can use the following syntax:

```javascript
ig.init("some_webhook_id_or_url");
ig.sendEvent("onclick", { key: "value" });


## Getting Started

### Include via jsDelivr

To include this library in your project via [jsDelivr](https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js), you can add the following script tag to your HTML file:

htmlCopy code

<script src="https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js"></script> 


### Inject via Google Tag Manager

You can also inject this library into your website using Google Tag Manager. Follow these steps:

1.  Log in to your Google Tag Manager account.
2.  Create a new Tag.
3.  Choose "Custom HTML" as the tag type.
4.  Paste the following code snippet into the HTML field:

htmlCopy code

<script>
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js';
    script.onload = function() {
        console.log("Script loaded successfully");
        initializeScript(); // Call the function after the script is loaded
    };
    document.head.appendChild(script);
})();
</script>


5.  Set the trigger to fire on all pages or specific pages where you want to use this library.
6.  Save the tag and publish your changes.
7. Include following code in your website to call the functions inside library.

<script>
// Function to initialize your script once it's loaded
function  initializeScript() {
	ig.init("some_webhook_id_or_url");
	ig.sendEvent("onclick", { key:  "value" });
}
</script>

Now, the Integrately Webhook Sender Library will be included in your website via Google Tag Manager.

## License

See the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvement.
