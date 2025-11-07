let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 不要

// No 不要
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:("
];

// No 不要
noButton.addEventListener("click", function() {
    clickCount++;

    // 不要
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 不要
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **不要
    let moveUp = clickCount * 25; // 不要 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 不要
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 鍥剧墖鍙樺寲锛堝墠 5 娆″彉鍖栵級
    if (clickCount === 1) mainImage.src = "../img/dog1.gif"; // 不要
    if (clickCount === 2) mainImage.src = "../img/dog1.gif";   // 不要
    if (clickCount === 3) mainImage.src = "../img/dog2.gif";   // 不要
    if (clickCount === 4) mainImage.src = "../img/dog2.gif";  // 不要
    if (clickCount >= 5) mainImage.src = "../img/dog2.gif";  // 不要

});

yesButton.addEventListener("mouseenter", function() {
    questionText.innerText = "91 纪先生愿意做阚女士的小狗吗?";
})

yesButton.addEventListener("mouseleave", function() {
    questionText.innerText = "你愿意实名成为我的小狗吗？";
})

noButton.addEventListener("mouseenter", function() {
    questionText.innerText = "纪先生真的不愿意做小狗吗?";
})

noButton.addEventListener("mouseleave", function() {
    questionText.innerText = "你愿意实名成为我的小狗吗？";
})

// Yes 不要
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">阚小狗愿意和纪小狗做好朋狗吗？( >᎑<)♡︎ᐝ1>
            <img src="../img/dog3.gif" alt="!!!小狗你好!! ( >᎑<)♡︎ᐝ" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});