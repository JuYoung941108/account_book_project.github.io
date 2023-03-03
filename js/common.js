// header
let dropDownMenu = true;
// $(".menu-icon").click(() => {
//     if (dropDownMenu) {
//         $(".sub_menu").slideDown(700);
//     } else {
//         $(".sub_menu").slideUp(700);
//     }
//     dropDownMenu = !dropDownMenu;
// })

$(".menu-icon").click(() => {
        $(".sub_menu").slideToggle();
})

// index
function signUp() {
    location.href = "sign_up.html";
}

// board
function boardWrite() {
    location.href = "board_write.html";
}

function postList() {
    location.href = "board.html";
}

function writeCancel() {
    if (confirm('작성을 취소하시겠습니까?'))
        document.location = 'board.html';
}

// signUp
function checkBlankForm() {
    // document.body..offsetWidth: 브라우저 크기를 기준으로 팝업창을 중앙에 띄운다.
    let popX=(document.body.offsetWidth/2.5)-(200/2);
    window.open('sign_up_check.html', '_black', 'width=460, height=450, resizable=no, titlebar=yes, left='+popX);
}

// signUpCheck
function signCancle(){
    if(confirm('가입을 취소하시겠습니까?'))
    window.close();
}