// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

(function(window) {
    const appVersion = window.require('electron').remote.app.getVersion();

    document.title = `Bot for Twitter - ${appVersion}`;
})(window);