// ==UserScript==
// @name         Twitter Blur
// @namespace    https://begaydocrime.org
// @version      1.2
// @downloadURL  https://raw.githubusercontent.com/egefeyzioglu/twitter-blur/main/twitter-blur.user.js
// @updateURL    https://raw.githubusercontent.com/egefeyzioglu/twitter-blur/main/twitter-blur.user.js
// @match        https://twitter.com/*
// @match        https://x.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// @require      https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @require      https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js#sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kj1Iw0AYht+mLRWpONhBxCFDdbKLijiWWiyChdJWaNXB5NI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwcc9vHfvy913BwjtOlPNQBxQNcvIphJiobgqhl4RQJAKGJGYqadzi3l4jq97+Ph8F+NZ3vv+HENKyWSATySOM92wiDeI5zYtnfM+cYRVJYX4nHjKoAMSP3JddvmNc8VhgWdGjHx2gThCLFb6WO5jVjVU4lniqKJqlC8UXFY4b3FW603WPSe/YbikreS4TjWOFJaQRgYiZDRRQx0WYjRrpJjI0nrCwz/m+DPkkslVAyNHEg2okBw/+Bv87q1Znpl2k8IJIPhi2x8TQGgX6LRs+/vYtjsngP8ZuNJ6/kYbmP8kvdXTokfA8DZwcd3T5D3gcgcYfdIlQ3IkP5VQLgPvZ/RMRfoKt8Dgmtu37jpOH4A89Wr5Bjg4BCYrlL3uce+B/r79u6fbvx8NqnJ+bJ/21QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+gEBQQBO1uEFQQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAADpklEQVRYw+2YXWgcVRTHf/fupkWze2lIK1qcEWqhWKRYEKq09qEgpYL4ICgmzYxK/UCokiDkSX2ohD4YKH3xKeiMoVpEqFSjiLQIglK/qGJEbDWdG0u1xeBMaknSzPEhQ02bTTbd2eyC5P8ycD/O/c25c+49Z2BZy2qu1FIavyVMVFFkB/AosAVoA2LgJ2BIod6J/PKlSnOdcHyN9UrnrwC6QbwapaYir/x3PeCcIF4PDADbFxg2CjxjfTMEcOvgP0qnl7eL8AKKD61nBtQsg33A3UqpByOvPJELLozvQRjKPFZNKfAaYIAHABcYFs3m0S4zORvwNLAO+Egp/XDklS7VBpfcjMhJ4KYa3+8v4D7rm+HbBi+26JntTdozOIBdIuknTpisrsm8SF8OuF8UdAAbnSAO0+npnXrGJu3XDNyGyDdOkGy9HutumLQDnTm+jrUCHwPvAmesbz7QAEqTVFoP5DMniPudIDaLc57sAFbkAGzNngeKBf0ywIwHW+Qc8GeFCQWgBzjlBHGPG8alKgvcnjP4LwPd1jfdv+0uyRVA+5gR4OgCE9cA/SJYJ4gPukGyZV0wriuMW5kT8GvrmwOzG4r/ndiqX5CuKlu0CtgryN4p5KwTxMeBL4EfQUUgY0t6kzhB3Avsb+LN9qn1zf1zPOgG8QaBexX6dSFtA3qbBHj22oaZIFFKgDeE9AKwCxhrEuBIZcCinAIuAC3ApkVeUUuhHyoCjnaYNDscmylR8HlFwCxe9gMXmwh4MvLNuXkBrV+OgKcBaRLge5UarzpsrW8OAU8CEw2Gm0YxWBUwg3wTxV3AYWCyQYBHrWdGFgXoBPEGhE5gGDiS3Y9LHByqb77O4pyrRekRkdQHnAZ573Dkl7+ar3OOByOvNAE836BgiVHqxYUGVMpIsL45ArzUAMAe65V/r7nsdIK4AzgIczLuemjA+mZPtUF6oU7rm0NKsR7oBo4B54HpOsAdVwX9XF0LdzccXymSvpJlOjoH3BcotdN65aQugG4YF0R4BNhXh5T+fSXsjh4347l+fbhvJ1omZRPwEODNKknz1BqvrkgL+04/0ZpeV0bthsmdIvIUcENW3TvAxiy9r4e+U/Bs5JsTNaf8bpCsFaQX2APcWCewn4E+rfXgma5SWquRq7bYDZJVgnRmf6O21hAMY1l1+JYUC8dGO1vTvG85b5C4QdwusA3YDNyRbX1b9ilIljv+AfwKfI/ihBL9beSXpljWsv5H+hcYKjXokVc9bAAAAABJRU5ErkJggg==
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM_registerMenuCommand
// @grant        GM.registerMenuCommand
// @resource     bootstrap_style https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
// @resource     fa_style https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css
// @sandbox      JavaScript
// ==/UserScript==

GM_config.init(
    {
      'id': 'TwitterBlur', // The id used for this instance of GM_config
      'title': 'Twitter Blur Settings', // Panel Title
      'fields': // Fields object
      {
        'username': // This is the id of the field
        {
          'label': 'Twitter username', // Appears next to field
          'type': 'text', // Makes this setting a text field
          'default': '' // Default value if user doesn't change it
        },
        'auto':
        {
            'label': 'Auto blur when logged in',
            'type': 'checkbox',
            'default': true
        },
        'blur-size':{
            'label': 'Blur strength',
            'type': 'select',
            'options': ['Regular (10px)', 'High (15 px)', 'Fuck me up (250px)', 'Make it literally just a single colour (5000px)'],
            'default': 'Regular (10px)'
        }
        }
    }
);

GM_registerMenuCommand("Twitter Blur Settings", () => {
    GM_config.open();
});

let blurSize = "";

function init() {
    // Check if this is the correct user
    // Get the username we're logged into from the Profile link
    const profilePath = new URL($($('span:contains("Profile")')[0]).closest("a")[0].href).pathname;
    const username = profilePath.startsWith('/') ? profilePath.substring(1) : profilePath;
    // And compare it to the username we have. Bail out if they're not the same
    if(GM_config.get("username") != username)
        return;

    // Check if we need to start out blurred
    let defaultBlur = GM_config.get("auto") ? "checked" : "";
    
    // Add our content
    if($('nav #twitter-blur-container').length == 0){
        $($('nav')[0]).append(`
            <div id="twitter-blur-container" style="display: flex; font-family: TwitterChirp; font-size: 20px; padding-top: 4px; padding-bottom: 4px;">
            <div id="twitter-blur-inner-container" style="display: flex; padding: 12px; border-radius: 999999px;">
                <div><!--
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" height="1.75rem" viewBox="0 0 1080 820" xml:space="preserve"><desc>Created with Fabric.js 5.2.4</desc><defs></defs><rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect><g transform="matrix(1 0 0 1 540 540)" id="a1e03dbc-fb73-4a05-96a6-60ab671a5462"  ><rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" /></g><g transform="matrix(1 0 0 1 540 540)" id="a104dad9-0740-45d9-a99a-0f087b28a4f5"  ></g><g transform="matrix(2.04 0 0 2.04 409.54 543.62)" id="fa5da2d1-73fb-41e1-b4fa-77f6640d6dc4"  ><path style="stroke: rgb(0,0,0); stroke-width: 3; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-opacity: 0; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  transform=" translate(-192, -256)" d="M 192 512 C 86 512 0 426 0 320 C 0 228.8 130.2 57.7 166.6 11.7 C 172.6 4.2 181.5 0 191.1 0 L 192.9 0 C 202.5 0 211.4 4.2 217.4 11.7 C 253.8 57.7 384 228.8 384 320 C 384 426 298 512 192 512 z M 96 336 C 96 327.2 88.8 320 80 320 C 71.2 320 64 327.2 64 336 C 64 397.9 114.1 448 176 448 C 184.8 448 192 440.8 192 432 C 192 423.2 184.8 416 176 416 C 131.8 416 96 380.2 96 336 z" stroke-linecap="round" /></g></svg>
                    -->
                    <!-- <i class="fa-solid fa-droplet"></i> -->
                    <svg xmlns="http://www.w3.org/2000/svg" id="fa-droplet-icon" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>
                </div>
                <div style="margin-left: 20px; margin-right: 16px;">Blur Images</div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="blurImagesToggle" ` + defaultBlur + ` onclick=toggleHandler>
                    <!-- <label class="form-check-label" for="blurImagesToggle"></label> -->
                </div>
            </div>
            </div>`);
    }

    // Apply other settings
    let blurSize = (GM_config.get("blur-size").match(/\d+/)[0]) + "px";
    GM_addStyle(`
        :root{
            --blur-size: ` + blurSize + `
        }
    `);
    
    // If we don't know the state of the checkbox, and we should start blurred, start blurred
    blurImages(GM_config.get("auto") && $('#blurImagesToggle') == undefined)

    // Click handler
    $('div#twitter-blur-container').click(function() {
        $('input#blurImagesToggle')[0].checked = !($('input#blurImagesToggle')[0].checked);
        toggleHandler();
    })
}

function blurImages(force = false) {
    // console.log("blurImages called, force = " + force + ",  $('#blurImagesToggle')[0].checked = " +  $('#blurImagesToggle')[0].checked)
    if(force || $('#blurImagesToggle')[0].checked){
        $('img').parent().addClass("blurMe");
        $('video').addClass("blurMe");
    }else{
        $('img').parent().removeClass("blurMe");
        $('video').removeClass("blurMe");
    }
}

function toggleHandler() {
    // console.log("toggleHandler called")
    blurImages(false);
}

waitForKeyElements ("img", init);
waitForKeyElements ("img", blurImages);

$(function(){
    GM_addStyle(GM_getResourceText('bootstrap_style'));
    GM_addStyle(GM_getResourceText('fa_style'));
    GM_addStyle(`
        .blurMe{
            filter: blur(var(--blur-size));
        }
        #twitter-blur-inner-container:hover{
            background-color: rgba(15,20,25,0.1);
        }
        #twitter-blur-inner-container{
            cursor: pointer;
        }
        #fa-droplet-icon{
            width: 1.75rem;
            height: 1.75rem;
        }
    `)
})
