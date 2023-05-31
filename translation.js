var globalize = function (lang) {
    document.getElementById("description").innerHTML = description;
    document.getElementById("endgame").innerText = endgame;
    document.getElementById("restart-text").innerText = restartText;
    document.getElementById("start-button").innerText = startButton;
    document.getElementById("restart-button").innerHTML = restartButton;
    document.getElementById("start-button").href = './index.html?lang=' + lang;
    document.getElementById("homeLink").href = './index.html?lang=' + lang;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var lang = urlParams.get('lang') ? urlParams.get('lang') : 'en';

let i18nTag = document.createElement("script");
i18nTag.src = "./" + lang + "/i18n.js";
i18nTag.addEventListener('load', function () {
    globalize(lang);
});

document.getElementsByTagName("head")[0].appendChild(i18nTag);


document.getElementById("languages").onchange = (evt) => {
    lang = evt.target.value;
    
    if (lang) {
        document.getElementsByTagName("head")[0].childNodes.forEach((element) => {
            if (element && element.src && element.src.includes('i18n.js')) {
                element.parentNode.removeChild(element);
            }
        });

        let i18nTag = document.createElement("script");
        i18nTag.src = "./" + lang + "/i18n.js";
        i18nTag.addEventListener('load', function () {
            globalize(lang);
        });
        document.getElementsByTagName("head")[0].appendChild(i18nTag);
    }
}