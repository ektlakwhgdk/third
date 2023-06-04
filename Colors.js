var Links = {
    setColor : function (color)
{
//     var alist = document.querySelectorAll('a');
// var i  = 0;
// while (i < alist.length) {
//     console.log(alist[i]);
//     alist[i].style.color = color;
//     i++;  
// }
   $('a').css('color', color);


}
}

var Body = {

    setColor: function (color)
   {
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
   },
    setBackgroundColor : function (color)
   {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
   }
}


function nightDayHandler(self) {
    if(self.value == 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('White')
    self.value = 'day';
    Links.setColor('greenyellow');
}
else{
Body.setBackgroundColor('white');
Body.setColor('black');
self.value = 'night';
Links.setColor('blue');
}


}