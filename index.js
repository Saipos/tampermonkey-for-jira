// ==UserScript==
// @name         Jira
// @namespace    http://tampermonkey.net/
// @match        https://saipos.atlassian.net/jira/software/projects/SP/boards/15*
// @grant        none
// @require https://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    const remoteScript = document.createElement('script');
    remoteScript.src = 'https://saipos-estatico.s3-sa-east-1.amazonaws.com/tampermonkey/index.js?ts='+(+new Date());
    //remoteScript.onload = init;
    document.body.appendChild(remoteScript);
})();