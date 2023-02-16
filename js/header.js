let dropDownMenu=true;
$(".menuIcon").click(()=>{
    if(dropDownMenu){
        $(".menu").slideDown(500);
    }else{
        $(".menu").slideUp(500);
    }
    dropDownMenu=!dropDownMenu;
})