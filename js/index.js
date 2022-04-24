window.onkeydown = function (e1) {
    // alert(e1.keyCode);
    var keycode1 = e1.keyCode;
    if (keycode1 == 13 || keycode1 == 16 || keycode1 == 17 || keycode1 == 18) {
        var classkey = document.getElementsByClassName(keycode1);
        classkey[0].style.backgroundImage = "linear-gradient(#000000, #000000)";
        classkey[1].style.backgroundImage = "linear-gradient(#000000, #000000)";
    } else {
        document.getElementById(keycode1).style.backgroundImage = 'linear-gradient(#000000, #000000)';
    }
    document.getElementById('a1').innerHTML = keycode1;
}
window.onkeyup = function (e) {
    if (e.keyCode == 13 || e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18) {
        var classkey = document.getElementsByClassName(e.keyCode);
        classkey[0].style.backgroundImage = "linear-gradient(#b1b1b1, #494949)";
        classkey[1].style.backgroundImage = "linear-gradient(#b1b1b1, #494949)";
    } else {
        document.getElementById(e.keyCode).style.backgroundImage = 'linear-gradient(#b1b1b1, #494949)';
    }
    document.getElementById('a1').innerHTML = 'null';
}


// 禁用快捷键
function testKeyDown(event) {
    undefined
    if (
        (event.keyCode == 112) || //屏蔽 F1
        (event.keyCode == 113) || //屏蔽 F2
        (event.keyCode == 114) || //屏蔽 F3
        (event.keyCode == 115) || //屏蔽 F4
        (event.keyCode == 116) || //屏蔽 F5
        (event.keyCode == 117) || //屏蔽 F6
        (event.keyCode == 118) || //屏蔽 F7
        (event.keyCode == 119) || //屏蔽 F8
        (event.keyCode == 120) || //屏蔽 F9
        (event.keyCode == 121) || //屏蔽 F10
        (event.keyCode == 122) || //屏蔽 F11
        (event.keyCode == 123) ||
        (event.keyCode == 9) ||
        (event.keyCode == 91) ||
        (event.keyCode == 18)
    ) //屏蔽 F12
    {
        undefined
        event.keyCode = 0;
        event.returnValue = false;
    }
}
document.onkeydown = function () { testKeyDown(event); }
window.onhelp = function () { return false; }