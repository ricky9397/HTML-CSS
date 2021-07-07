window.onload = function () {
    /* 버튼클릭시 실행 */
    let hw = document.getElementById('hw');
    hw.addEventListener('click', function () {
        alert('hello');
    })
}

/* @confirm */
function func_confirm() {
    if (confirm('ok?')) {
        alert('ok');
    } else {
        alert('cancel');
    }
}

/* @제어대상찾기 */
/*  제어대상찾기 tag => getElementsByTagName
    제어대상찾기 class => getElementsByclassName
    제어대상찾기 Id => getElementsByTagId(속도가 가장빠름, id를가져오기땜에 하나만사용) */
var lis = document.getElementsByTagName('li');
for(var i = 0; i < lis.length; i++){
    lis[i].style.color='red';
}