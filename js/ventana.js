$(document).ready(main);
var contador =1 ;

function main (){
$('.menu_bar').click(function (){


if (contador==1){
$('#lmu').animate({
left:'0'
});
contador=0;
}else{
$('#lmu').animate({
left:'-100%'
});
contador=1;
}
});

};