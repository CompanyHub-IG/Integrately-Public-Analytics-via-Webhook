
# Integrately Webhook Sender Library  
  
## Overview  
  
You can send website conversion data to Facebook/LinkedIn via webhooks from Integrately. And this is a simple JavaScript library that will help you send required website data via webhook to [[webhooks.integrately.com](http://webhooks.integrately.com/)]([https://webhooks.integrately.com](https://webhooks.integrately.com/)). It offers an intuitive method for sending events with data to your configured webhook endpoint.  
  
## Getting Started  
### To start sending website conversions to Facebook/LinkedIn, you must include a code in your website. This can be done in 2 ways :  
1) Include via jsDelivr  
2) Inject via Google Tag Manager  
### 1) Include via jsDelivr  
  
To include this library in your project via [jsDelivr]([https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js](https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js)), add the following script tag to your HTML file:  
  
htmlCopy code  
  
```  
<script src="[https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js](https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js)"></script>  
```  
To send an event with data using this library, you can follow this syntax:  
```  
ig.init("some_webhook_id_or_url");  
ig.sendEvent("onclick", { key: "value" }, false);  
```  
  
### 2) Inject via Google Tag Manager  
  
You can inject this library into your website using Google Tag Manager. Follow these steps:  
  
1. Log in to your Google Tag Manager account.  
2. Create a new Tag.  
3. Choose "Custom HTML" as the tag type.  
4. Paste the provided code snippet into the HTML field.  
```  
<script>  
(function () {  
var script = document.createElement('script');  
script.type = 'text/javascript';  
script.src = '[https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js](https://cdn.jsdelivr.net/gh/CompanyHub-IG/Integrately-Public-Analytics-via-Webhook@latest/integratelyWebhookLibrary.js)';  
script.onload = function () {  
console.log("Script loaded successfully");  
initializeScript(); // Call the function after the script is loaded  
};  
document.head.appendChild(script);  
})();  
  
// Function to initialize your script once it's loaded  
function initializeScript() {  
ig.init("some_webhook_id_or_url");  
ig.sendEvent("eventName", { someKey: "someValue" }, true);  
}  
</script>  
```  
6. Set the trigger to fire on all or specific pages where you want to use this library.  
7. Save the tag and publish your changes.  
  
**Note:** The above GTM code will send static data as defined in the code. If you want to send event data dynamically, you can also implement the following code on your website. When the script is loaded via Google Tag Manager (GTM), it will invoke the `initializeScript()` function. Within `initializeScript()`, you can call `ig.sendEvent()` to trigger the webhook on Integrately.  
  
Example as below,  
JavaScript Code :-  
```  
<script>  
function initializeScript() {  
ig.init("some_webhook_id_or_url");  
ig.sendEvent("eventName", {  
someKey: "someValue"  
}, false);  
}  
</script>  
```  
  
## Calling functions in the Code  
To proceed with using the library, you must  
1) Initialize code using `ig.init()` function.  
2) Send events using `ig.sendEvent()` function.

#### Before Initializing the code you must obtain the Webhook URL or ID from Integrately:
  
1. Visit [Integrately]([https://integrately.com](https://integrately.com/)).  
2. Select the "Webhook" app and choose the trigger operation under "Webhook / API Integration."  
3. Select the action to be performed when the trigger occurs.  
4. Click "Go," then on the "Connect Accounts" page, copy the webhook URL. Paste it into the `ig.init()` function. You can copy the full URL or just the ID at the end of the URL.  
### 1) Initialization  
  
Now, to start sending event data to Integrately, you must initialize the webhook URL or ID using the `ig.init()` function given in the above code. So, you must replace `"some_webhook_id_or_url"` with the actual webhook ID or URL obtained from Integrately.  
  
### 2) Sending Events  
  
The `ig.sendEvent()` function is used to transmit event data to Integrately. It accepts three arguments:  
  
1. **Event Name**: The type of event being sent, e.g., `"onclick"`.  
2. **Event Payload**: A JSON object containing relevant data for the event, such as LinkedIn conversion ID or other event-related information.  
3. **isForCookies:** Determines whether to check for the presence of a cookie and if the cookie is present it will check for LinkedIn or Facebook cookies before sending the event. It can be either true or false. If set to true, the event message will only be sent if the LinkedIn or Facebook cookies are present; otherwise, it will be sent regardless.  
  
**Example:** For LinkedIn cookie it will check for 'li_fat_id', and for Facebook it will check for '_fbp'.  
  
Now, the Integrately Webhook Sender Library will be included on your website via Google Tag Manager.  
  
## License  
  
See the LICENSE file for details.  
  
## Contributing  
  
Contributions are welcome! Feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvement.
