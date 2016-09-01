
/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function(){
    
    
    var tooltips = $('.tooltip')
    console.log(tooltips);
    
    
    tooltips.on('mouseover', function(){
        $(this).append('<span class="tooltipText">'+$(this).data('text')+'</span>');
        
        
    })
    
    
    tooltips.on('mouseout', function(){
        
         $('.tooltipText').remove();
        

        
    })
    
    
    
    
    
    
    
    
});