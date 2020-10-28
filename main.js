const gameName = `Flip Flop Emoji.`;

/**
 * Make your vanilla js look like JQuery.
 * make your selector small like JQuery Selector.
 */

/**
 * @function $
 * @param {String} selector
 * @returns {Object} document node.
 */
const $ = (selector) => {
    return document.querySelector(selector);
};

/**
 * @function $
 * @param {String} selector
 * @returns {Array} document node.
 */
const $all = (selector) => {
    return document.querySelectorAll(selector);
};

let timeOut;

function typewriter() {
    let i = 0;
    $("#type").innerHTML = "";
    $("#cursor").classList.remove("blink");
    let interval = setInterval(() => {
        if (gameName[i] !== undefined && gameName[i]) {
            $("#type").innerHTML += gameName[i];
            i++;
        } else {
            $("#cursor").classList.add("blink");
            timeOut = setTimeout(() => {
                // 1800  $("#cursor").style.display = "none";
                typewriter();
            }, 3000);
            clearInterval(interval);
        }
    }, 100);
}

typewriter();

const winFinal = $("#win-final");
const insomnia = $("#insomnia");
const flip = $("#flip");
const oneWin = $("#one-win");
const clickable = $("#clickable");

const volume = ["fa-volume-up", "fa-volume-down", "fa-volume-mute"];
let volControls = 0;
let audio = true;
const container = $("#container");

$("#vol").classList.add(volume[volControls]);
$("#vol").addEventListener("click", (e) => {
    if (volControls < volume.length - 1) volControls += 1;
    else volControls = 0;
    $("#vol").className = "fas ";
    if (volControls === 0) {
        $("#vol").classList.add(volume[volControls]);
        audio = true;
        insomnia.play();
    } else if (volControls === 1) {
        $("#vol").classList.add(volume[volControls]);
        audio = true;
        insomnia.pause();
        insomnia.currentTime = 0;
    } else if (volControls === 2) {
        $("#vol").classList.add(volume[volControls]);
        audio = false;
    }
});
const key = "emoji";
const levelKey = "level";
const layoutKey = "layout";
const usernameKey = "username";
const emojis = [
    {
        name: "Emoticons",
        emojis: [
            { emoji: "1f60a", value: 1 },
            { emoji: "1f92c", value: 5 },
            { emoji: "1f975", value: 2 },
            { emoji: "1f608", value: 4 },
            { emoji: "1f976", value: 3 },
        ],
        time: 1.2,
    },
    {
        name: "Wild animals",
        emojis: [
            { emoji: "1f981", value: 1 },
            { emoji: "1f992", value: 2 },
            { emoji: "1f42f", value: 3 },
            { emoji: "1f98a", value: 4 },
            { emoji: "1f993", value: 5 },
        ],
        time: 1.1,
    },
    {
        name: "Pet animals",
        emojis: [
            { emoji: "1f436", value: 1 },
            { emoji: "1f410", value: 2 },
            { emoji: "1f431", value: 3 },
            { emoji: "1f43f", value: 4 },
            { emoji: "1f407", value: 5 },
        ],
        time: 1,
    },
    {
        name: "Domestic animal",
        emojis: [
            { emoji: "1f434", value: 1 },
            { emoji: "1f413", value: 2 },
            { emoji: "1f42a", value: 3 },
            { emoji: "1f404", value: 4 },
            { emoji: "1f418", value: 5 },
        ],
        time: 1,
    },
    {
        name: "Water animals",
        emojis: [
            { emoji: "1f427", value: 1 },
            { emoji: "1f9a2", value: 2 },
            { emoji: "1f42c", value: 3 },
            { emoji: "1f988", value: 4 },
            { emoji: "1f422", value: 5 },
        ],
        time: 0.9,
    },
    {
        name: "Birds",
        emojis: [
            { emoji: "1f426", value: 1 },
            { emoji: "1f985", value: 2 },
            { emoji: "1f99c", value: 3 },
            { emoji: "1f99a", value: 4 },
            { emoji: "1f989", value: 5 },
        ],
        time: 0.8,
    },
    {
        name: "Insects",
        emojis: [
            { emoji: "1f987", value: 1 },
            { emoji: "1f98b", value: 2 },
            { emoji: "1f40c", value: 3 },
            { emoji: "1f41b", value: 4 },
            { emoji: "1f41e", value: 5 },
        ],
        time: 0.8,
    },
    {
        name: "Insects 2",
        emojis: [
            { emoji: "1f41c", value: 1 },
            { emoji: "1f997", value: 2 },
            { emoji: "1f577", value: 3 },
            { emoji: "1f982", value: 4 },
            { emoji: "1f41d", value: 5 },
        ],
        time: 0.8,
    },
    {
        name: "Flower",
        emojis: [
            { emoji: "1f33c", value: 1 },
            { emoji: "1f33b", value: 2 },
            { emoji: "1f940", value: 3 },
            { emoji: "1f490", value: 4 },
            { emoji: "1f339", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Fruits",
        emojis: [
            { emoji: "1f34c", value: 1 },
            { emoji: "1f34b", value: 2 },
            { emoji: "1f34d", value: 3 },
            { emoji: "1f347", value: 4 },
            { emoji: "1f34e", value: 5 },
        ],
        time: 0.6,
    },
    {
        name: "Fruits 2",
        emojis: [
            { emoji: "1f349", value: 1 },
            { emoji: "1f96d", value: 2 },
            { emoji: "1f353", value: 3 },
            { emoji: "1f352", value: 4 },
            { emoji: "1f350", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Food",
        emojis: [
            { emoji: "1f345", value: 1 },
            { emoji: "1f346", value: 2 },
            { emoji: "1f33d", value: 3 },
            { emoji: "1f954", value: 4 },
            { emoji: "1f966", value: 5 },
        ],
        time: 0.6,
    },
    {
        name: "Food 2",
        emojis: [
            { emoji: "1f9c5", value: 1 },
            { emoji: "1f95c", value: 2 },
            { emoji: "1f951", value: 3 },
            { emoji: "1f952", value: 4 },
            { emoji: "1f955", value: 5 },
        ],
        time: 0.8,
    },
    {
        name: "Fast Food",
        emojis: [
            { emoji: "1f32d", value: 1 },
            { emoji: "1f32e", value: 2 },
            { emoji: "1f32f", value: 3 },
            { emoji: "1f35d", value: 4 },
            { emoji: "1f37f", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Chocolates",
        emojis: [
            { emoji: "1f36c", value: 1 },
            { emoji: "1f36a", value: 2 },
            { emoji: "1f36b", value: 3 },
            { emoji: "1f36d", value: 4 },
            { emoji: "1f953", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Maths",
        emojis: [
            { emoji: "2716", value: 1 },
            { emoji: "2795", value: 2 },
            { emoji: "2796", value: 3 },
            { emoji: "2797", value: 4 },
            { emoji: "2714", value: 5 },
        ],
        time: 0.6,
    },
    {
        name: "Plants",
        emojis: [
            { emoji: "1f344", value: 1 },
            { emoji: "1f332", value: 2 },
            { emoji: "1f335", value: 3 },
            { emoji: "1f334", value: 4 },
            { emoji: "1f33e", value: 5 },
        ],
        time: 0.6,
    },
    {
        name: "Leaves",
        emojis: [
            { emoji: "1f343", value: 1 },
            { emoji: "1f342", value: 2 },
            { emoji: "1f341", value: 3 },
            { emoji: "1f340", value: 4 },
            { emoji: "1f33f", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Face Emoji",
        emojis: [
            { emoji: "1f61e", value: 1 },
            { emoji: "1f61f", value: 2 },
            { emoji: "1f62a", value: 3 },
            { emoji: "1f62b", value: 4 },
            { emoji: "1f62c", value: 5 },
        ],
        time: 0.8,
    },
    {
        name: "Cat",
        emojis: [
            { emoji: "1f63a", value: 1 },
            { emoji: "1f63b", value: 2 },
            { emoji: "1f63c", value: 3 },
            { emoji: "1f63d", value: 4 },
            { emoji: "1f63e", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Wearings",
        emojis: [
            { emoji: "1f9e2", value: 1 },
            { emoji: "1f9e3", value: 2 },
            { emoji: "1f9e4", value: 3 },
            { emoji: "1f9e5", value: 4 },
            { emoji: "1f9e6", value: 5 },
        ],
        time: 0.8,
    },
    {
        name: "Kid Face",
        emojis: [
            { emoji: "1f9d2", value: 1 },
            { emoji: "1f9d2-1f3fc", value: 2 },
            { emoji: "1f9d2-1f3fd", value: 3 },
            { emoji: "1f9d2-1f3fe", value: 4 },
            { emoji: "1f9d2-1f3ff", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Young Face",
        emojis: [
            { emoji: "1f9d4", value: 1 },
            { emoji: "1f9d4-1f3fb", value: 2 },
            { emoji: "1f9d4-1f3fd", value: 3 },
            { emoji: "1f9d4-1f3fe", value: 4 },
            { emoji: "1f9d4-1f3ff", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Tools",
        emojis: [
            { emoji: "1f4cc", value: 1 },
            { emoji: "1f4cd", value: 2 },
            { emoji: "1f4ce", value: 3 },
            { emoji: "1f4cf", value: 4 },
            { emoji: "1f4d0", value: 5 },
        ],
        time: 0.7,
    },
    {
        name: "Flag",
        emojis: [
            { emoji: "1f1ee-1f1f3", value: 1 },
            { emoji: "1f1ed-1f1f2", value: 2 },
            { emoji: "1f1fa-1f1f8", value: 3 },
            { emoji: "1f1e8-1f1e6", value: 4 },
            { emoji: "1f1e7-1f1f9", value: 5 },
        ],
        time: 0.6,
    },
    {
        name: "Demons",
        emojis: [
            { emoji: "1f47b", value: 1 },
            { emoji: "2620", value: 2 },
            { emoji: "1f479", value: 3 },
            { emoji: "1f47e", value: 4 },
            { emoji: "1f47d", value: 5 },
        ],
        time: 0.6,
    },
    {
        name: "Hands",
        emojis: [
            { emoji: "1f91f", value: 1 },
            { emoji: "1f91f-1f3fb", value: 2 },
            { emoji: "1f91f-1f3fc", value: 3 },
            { emoji: "1f91f-1f3fd", value: 4 },
            { emoji: "1f91f-1f3fe", value: 5 },
        ],
        time: 0.5,
    },
    {
        name: "Kid",
        emojis: [
            { emoji: "1f93e", value: 1 },
            { emoji: "1f93e-1f3fb", value: 2 },
            { emoji: "1f93e-1f3fb-200d-2640-fe0f", value: 3 },
            { emoji: "1f93e-1f3fb-200d-2642-fe0f", value: 4 },
            { emoji: "1f93e-1f3ff-200d-2640-fe0f", value: 5 },
        ],
        time: 0.48,
    },
    {
        name: "Clock",
        emojis: [
            { emoji: "1f550", value: 1 },
            { emoji: "1f551", value: 2 },
            { emoji: "1f552", value: 3 },
            { emoji: "1f554", value: 4 },
            { emoji: "1f567", value: 5 },
        ],
        time: 0.45,
    },
    {
        name: "Ninja",
        emojis: [
            { emoji: "1f977-1f3fc", value: 1 },
            { emoji: "1f977-1f3fd", value: 2 },
            { emoji: "1f977-1f3fe", value: 3 },
            { emoji: "1f977", value: 4 },
            { emoji: "1f977-1f3fb", value: 5 },
        ],
        time: 0.36,
    },
];

console.log(emojis.length);

(() => {
    const modeEmojis = localStorage.getItem(key);
    if (modeEmojis) {
        modeEmojis = JSON.parse(modeEmojis);
        modeEmojis.forEach((emoji) => {
            emojis.push(emoji);
        });
    }
})();

function colorGenerator(node) {
    const alpha = ["a", "b", "c", "d", "e"];
    const alpha1 = alpha[randomIndexGenerator(5)];
    const alpha2 = alpha[randomIndexGenerator(5)];
    const alpha3 = alpha[randomIndexGenerator(5)];
    const num1 = randomIndexGenerator(9);
    const num2 = randomIndexGenerator(9);
    const num3 = randomIndexGenerator(9);
    const colorArray = [alpha1, num1, alpha2, num2, alpha3, num3];
    const color =
        "#" +
        colorArray[randomIndexGenerator(6)] +
        colorArray[randomIndexGenerator(6)] +
        colorArray[randomIndexGenerator(6)] +
        colorArray[randomIndexGenerator(6)] +
        colorArray[randomIndexGenerator(6)] +
        colorArray[randomIndexGenerator(6)];
    $all(".inner-div").forEach((node) => {
        node.style.background = color;
    });
}

let baseEmojis,
    renderLength,
    flipped = 0,
    flippedIndex = [],
    wins = [],
    timeInterval,
    gameStarted = false,
    renderEmojis,
    isRandom = false,
    min = 0,
    second = 0,
    hours = 0;
let level = localStorage.getItem(levelKey);
let playingLevel;
if (!!level && level !== "0") {
    $("#play").style.display = "inline-block";
}

const username = localStorage.getItem(usernameKey);
$("#username").innerText = username ? username : "Type Name";
$("#level").innerText = level ? parseInt(level) + 1 : 1;
$("#level-img").src = `https://flip.chattgo.com/assets/emojis/${
    emojis[level] ? emojis[level].emojis[0].emoji : "1f60d"
}.svg`;
(function init() {
    const bg = localStorage.getItem(layoutKey);
    if (!!bg && bg !== "") {
        layout(bg);
    }
})();

$("#username").addEventListener("input", (e) => {
    localStorage.setItem(usernameKey, e.target.innerHTML);
});

function resume() {
    isRandom = false;
    level = localStorage.getItem(levelKey);
    const levelIndex = level !== "" && level ? parseInt(level) : 0;
    playingLevel = levelIndex;
    baseEmojis = emojis[levelIndex].emojis;
    start();
}
$("#play").addEventListener("click", resume);

$("#random").addEventListener("click", () => {
    isRandom = true;
    const PLI = parseInt(Math.random() * emojis.length);
    baseEmojis = emojis[PLI].emojis;
    playingLevel = PLI;
    start();
});

$("#new-game").addEventListener("click", () => {
    isRandom = false;
    function newGame() {
        localStorage.setItem(levelKey, 0);
        baseEmojis = emojis[0].emojis;
        playingLevel = 0;
        start();
    }
    if (!!level && level !== "0") {
        const userConfirmation = window.confirm(
            "By starting new game you will lose all the saved levels."
        );
        if (userConfirmation) {
            newGame();
        }
    } else {
        newGame();
    }
});
$("#menu").addEventListener("click", () => {
    $(".modal").style.display = "flex";
    clearInterval(timeInterval);
    $("#play").removeEventListener("click", resume);
    $("#play").addEventListener("click", () => {
        $(".modal").style.display = "none";
        timer();
    });
});

function start() {
    reset();
    renderLength = baseEmojis.length * 6;
    renderEmojis = new Array(renderLength).fill(null);
    $(".modal").style.display = "none";
    insomnia.volume = 0.1;
    insomnia.play();
    play();
}

function reset() {
    clearInterval(timeInterval);
    baseEmojis;
    renderLength;
    flipped = 0;
    flippedIndex = [];
    wins = [];
    timeInterval;
    gameStarted = false;
    renderEmojis;
    min = 0;
    second = 0;
    hours = 0;
    second = 0;
    container.innerHTML = "";
    $("time").innerHTML = "";
}

function emptyContainers() {
    const emptyIndexes = [];
    renderEmojis.forEach((e, i) => {
        if (e === null) {
            emptyIndexes.push(i);
        }
    });
    return emptyIndexes;
}

function twoDigiNum(num) {
    return num < 10 ? "0" + num : num;
}

function gameOver() {
    clearInterval(timeInterval);
    if (!isRandom) {
        $("#play").innerHTML = "Play Again";
    }
    $(".modal").style.display = "flex";
    $("#play").style.display = "unset";
}

function timer() {
    second = emojis[playingLevel ? parseInt(playingLevel) : 0].time * 60;
    min = parseInt(second / 60);
    second = parseInt(second % 60);
    $("time").innerHTML = `<h1>${twoDigiNum(hours)} : ${twoDigiNum(
        min
    )} : ${twoDigiNum(second)}</h1>`;
    timeInterval = setInterval(() => {
        if (second === 0 && min === 0) {
            second = 0;
            min = 0;
            $("time").innerHTML = `<h1>${twoDigiNum(hours)} : ${twoDigiNum(
                min
            )} : ${twoDigiNum(second)}</h1>`;
            gameOver();
        } else {
            if (second === 0) {
                second = 59;
                min -= 1;
            }
            $("time").innerHTML = `<h1>${twoDigiNum(hours)} : ${twoDigiNum(
                min
            )} : ${twoDigiNum(second)}</h1>`;
        }
        second -= 1;
    }, 1000);
}

function emojiIndexes() {
    const emptyIndexes = emptyContainers();
    const indexes = [];
    let count = renderEmojis.length / baseEmojis.length;
    while (indexes.length < count) {
        const index = () => {
            return randomIndexGenerator(emptyIndexes.length);
        };
        let i = index();
        if (
            renderEmojis[emptyIndexes[i]] === null &&
            !indexes.includes(emptyIndexes[i])
        ) {
            indexes.push(emptyIndexes[i]);
        }
    }
    return indexes;
}

function createEmojis() {
    baseEmojis.forEach((emoji) => {
        emojiIndexes().forEach((ei) => {
            renderEmojis[ei] = emoji;
        });
    });
}

function randomIndexGenerator(len) {
    return parseInt(Math.random() * len);
}

function incrementLevel() {
    const currentLevelStr = localStorage.getItem(levelKey);
    let currentLevel = currentLevelStr ? parseInt(currentLevelStr) : 0;
    const level = (currentLevel += 1);
    localStorage.setItem(levelKey, level);
    $("#level").innerText = parseInt(level) + 1;
    $("#level-img").src = `https://flip.chattgo.com/assets/emojis/${
        emojis[level] ? emojis[parseInt(level)].emojis[0].emoji : "logo"
    }.svg`;
    baseEmojis = emojis[level];
}

function evaluate(id) {
    id = parseInt(id);
    if (!flippedIndex.includes(id)) {
        flipped += 1;
        flippedIndex.push(id);
        show(id);

        if (
            renderEmojis[flippedIndex[0]] &&
            renderEmojis[flippedIndex[1]] &&
            renderEmojis[flippedIndex[0]].value ===
                renderEmojis[flippedIndex[1]].value
        ) {
            if (audio) {
                oneWin.pause();
                oneWin.currentTime = 0;
                oneWin.volume = 1;
                oneWin.play();
            }
            flippedIndex.forEach((e) => {
                wins.push(e);
                $(`#emoji${e}`).classList.add("win");
            });
            if (wins.length === renderLength) {
                if (!isRandom) {
                    incrementLevel();
                    $(".modal").style.display = "flex";
                    $("#play").style.display = "unset";
                    $("#play").innerHTML = "Next Level";
                } else {
                    $(".modal").style.display = "flex";
                }
                clearInterval(timeInterval);
                audio && winFinal.play();
            }
            flippedIndex = [];
            flipped = 0;
        } else {
            if (flipped === 2) {
                setTimeout(() => {
                    if (audio) {
                        flip.currentTime = 0.4;
                        flip.play();
                        flip.volume = 0.4;
                    }
                    flippedIndex.forEach((flip) => hide(flip));
                    flippedIndex = [];
                }, 700);
                flipped = 0;
            }
        }
    }
}

function hide(id) {
    $(`#emoji${id}`).style.transform = "unset";
    $(`#emoji${id} > .emoji`).style.zIndex = "-1";
    $(`#emoji${id} >  .inner-div`).style.zIndex = "1";
}

function show(id) {
    $(`#emoji${id}`).style.transform = "rotateY(180deg)";
    $(`#emoji${id} > .emoji`).style.zIndex = "1";
    $(`#emoji${id} >  .inner-div`).style.zIndex = "-1";
}

function play() {
    createEmojis();
    renderEmojis.forEach((emoji, i) => {
        const div = document.createElement("div");
        div.classList.add("emoji-container");
        const span = document.createElement("span");
        const emojiNode = document.createElement("img");
        emojiNode.style = "width: 50%; height: 50%";
        emojiNode.src = `https://flip.chattgo.com/assets/emojis/${
            emoji ? emoji.emoji : ""
        }.svg`;
        emojiNode.dataset.id = i;
        span.classList.add("emoji");
        span.appendChild(emojiNode);
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner-div");
        const text = document.createTextNode(
            emojis[playingLevel ? parseInt(playingLevel) : 0].name
        );
        // text.src = `https://flip.chattgo.com/assets/emojis/${baseEmojis[0].emoji}.svg`;
        // text.style = "width: 40%;height: 40%";
        // text.dataset.id = i;
        innerDiv.style.fontSize = "10px";
        innerDiv.appendChild(text);
        div.appendChild(span);
        div.appendChild(innerDiv);
        div.dataset.id = i;
        div.id = "emoji" + i;
        innerDiv.dataset.id = i;
        span.dataset.id = i;
        div.addEventListener("click", (e) => {
            if (!wins.includes(parseInt(i))) {
                if (flippedIndex.length <= 1) {
                    if (!gameStarted) {
                        gameStarted = true;
                        timer();
                        window.addEventListener(
                            "beforeunload",
                            (e) => {
                                e.preventDefault();
                                e.returnValue = "";
                                return "Changes you made may not be saved.";
                            },
                            true
                        );
                    }
                    if (audio) {
                        clickable.pause();
                        clickable.currentTime = 0;
                        clickable.play();
                    }
                    evaluate(e.target.dataset.id);
                } else {
                    e.target.classList.add("warning");
                    setTimeout(() => {
                        e.target.classList.remove("warning");
                    }, 500);
                }
            }
        });
        container.appendChild(div);
    });
    colorGenerator();
}

$all(".layout-btn").forEach((layBtn) =>
    layBtn.addEventListener("click", (e) => {
        const bg = e.target.dataset.layout;
        localStorage.setItem(layoutKey, bg);
        layout(bg);
    })
);
function layout(bg) {
    $("#game-con").style.background = bg;
}
