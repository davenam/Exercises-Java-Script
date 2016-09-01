/**
 * Created by Dawid on 08.2016
 */




document.addEventListener("DOMContentLoaded", function(){
    
//   var list = document.querySelectorAll(".gallery li");
//        console.log(list);
    
    var body = document.querySelector('body');
       

    var list = document.querySelectorAll('img');
     
    
    var div = document.createElement('div');
        div.classList.add('fullScreen');       
        div.innerHTML = '<img><button class="close">Close</button>';
  
    
    for(var i=0; i<list.length; i++){
    
            list[i].addEventListener('click', function(e){
          
            var src = this.getAttribute('src'); 
            var img = div.querySelector('img');
            img.setAttribute('src', src);
                
                
            body.appendChild(div);
                
    });
        
    }
    
        var close = div.querySelector('.close');      // odnajdujemy przycisk po klasie close i przypujemy do niego fukcje. 
            
        close.addEventListener('click', function(){
            body.removeChild(div);
            
        });
            
    
 
    
    
});

