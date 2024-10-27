# webHOOK.js
# System and Browser Info to Discord Webhook

This JavaScript project collects the user's IP address, browser name, browser version, and operating system and sends the information to a specified Discord webhook. This can be useful for monitoring or gathering general information about visitors to a web page.

## Features

- Retrieves the IP address of the user using `api.ipify.org`.
- Detects the user's browser name and version.
- Identifies the user's operating system.
- Sends this information to a Discord webhook URL.

## Usage

1. **Install/Setup**:
    - Clone this repository.
    - Replace `YOUR_DISCORD_API` in the code with your Discord webhook URL.
    
2. **Configuration**:
   ```javascript
   const ipAddressWebhookUrl = "https://api.ipify.org?format=json";
   const discordWebhookUrl = "https://discord.com/api/webhooks/YOUR_DISCORD_API";


## Eg OUTPUT:
**YOUR_SITE_URL** 
IP Address: xxx.xxx.xxx.xxx
Browser: Chrome 93.0
Operating System: Windows
Accessed through a desktop or laptop.
