document.addEventListener("DOMContentLoaded", function(){
    
    
    var nav = $('div');
    
    nav.attr('class', 'nav');
    
    
   var ul1 = nav.find('ul').eq(0);
    console.log(ul1);
    
    var elements = ul1.children();
    console.log(elements);
    
    
    $(elements).on('mouseover', function(e){
        if($(this).children('ul').length != 0){
            $(this).children('ul').css('display', 'block');
        
        };
    });
    
    $(elements).on('mouseout', function(f){
        if($(this).children('ul').length != 0){
            $(this).children('ul').css('display', 'none');
        
        };
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});