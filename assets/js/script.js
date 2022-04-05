(function () {
    var btn = document.getElementById("btnClicker");
    var imagemBtn = document.getElementById("imagemBtn");
    var score = document.getElementById("pontos");
    var clicks = 0;
    var upgrades = document.getElementById("upgrade");
    
    btn.addEventListener("mouseup", function () {
        imagemBtn.src = imagemBtn.src.replace("images/clickedButton.png", "images/button.png");
    });

    btn.addEventListener("mousedown", function () {
        imagemBtn.src = imagemBtn.src.replace("images/button.png", "images/clickedButton.png");
        clicks += 1;
        score.innerText = clicks;
        if (clicks >= 10) {
            upgrades.disabled = false;
        } else {
            upgrades.disabled = true;
        };
    });    
})();