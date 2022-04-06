(function () {
    var btnClick = document.getElementById("btnClicker");
    var imagemBtn = document.getElementById("imagemBtn");
    var score = document.getElementById("pontos");
    var power = document.getElementById("clickPower");
    var clkSeg = document.getElementById("autoClicks");
    var clicks = 0;
    var autoClick = 0;
    var tempoAtual;
    var tempoClick = 1000;
    var cost = 1;
    var upgrade01 = document.getElementById("upgrade01");
    var upgrade02 = document.getElementById("upgrade02");
    var cursor = {
        clickPower: 1
    };

    function totalClicks() {
        score.innerHTML = clicks + autoClick;
    };

    function cursorPower() {
        power.innerHTML = cursor.clickPower;
    };

    function autoClicker() {
        clearInterval(tempoAtual);
        tempoAtual = setInterval(function() {
            clicks += autoClick;
            totalClicks();
        }, tempoClick);
    }


    btnClick.addEventListener("mouseup", function () {
        imagemBtn.src = imagemBtn.src.replace("images/clickedButton.png", "images/button.png");
    });

    btnClick.addEventListener("mousedown", function () {
        imagemBtn.src = imagemBtn.src.replace("images/button.png", "images/clickedButton.png");
        clicks += parseInt(cursor.clickPower);
        totalClicks();
    });

    function buyUpgrade(c, button) {
        if (clicks < c) {
            button.className = 'btn btn-danger';
            setTimeout(function() {
                var e = document.getElementsByClassName("btn-danger")[0];
                e.className = 'btn btn-success';
            }, 1000);
            return false;
        }
        clicks -= c;
        return true;
    };

    upgrade01.onclick = function() {
        if (!buyUpgrade(cost, this)) return;
        cursor.clickPower ++;
        cost = Math.pow(2, cursor.clickPower);
        totalClicks();
        cursorPower();
        document.getElementById("custo1").innerHTML = `CUSTO: ${cost} clicks`;
        power.innerHTML = `Poder do click: ${cursor.clickPower}`;
    };

    upgrade02.onclick = function() {
        var custoUpgrade = (Math.pow(3, autoClick)) * 10;
        if (!buyUpgrade(custoUpgrade, this)) return;
        autoClick ++;
        totalClicks();
        document.getElementById("custo2").innerHTML = `CUSTO: ${(Math.pow(3, autoClick)) * 10} clicks`;
        clkSeg.innerHTML = `Cliques por segundo: ${autoClick}`;
    };

    autoClicker();

})();