
let i = 0
while( i !== 16){
  $('body').append('<div class="box1 click" onclick="dark('+i+')"><div>');
  i = i+1
}
$('.box1').wrapAll('<div class="grid"></div>')
$('.grid').wrapAll('<div class="auto"></div>')



function dark(i){
 console.log("clicked" + i);
 $('.click').eq(i).toggleClass("box1");
 $('.click').eq(i).toggleClass("box2");
 
}