function boardWrite() {
    location.href = "boardWrite.html";
}

function postList() {
    location.href = "board.html";
}

function writeCancel(){
    if(!alert('작성을 취소하시겠습니까?'))
    document.location='board.html';    
}