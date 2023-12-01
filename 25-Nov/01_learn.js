const browserName = "chrome";

function getBrowserVersion(browserName) {
    let browserVersion = "119.0.6045.160";

    if (browserName == "chrome") {
     console.log("browser name is chrome and version is ${browserVersion}"); 
    }
    console.log(browserVersion)
}
getBrowserVersion(browserName);