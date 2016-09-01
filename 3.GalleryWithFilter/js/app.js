document.addEventListener("DOMContentLoaded", function(){
    
    var imgs = document.querySelectorAll('#gallery img');
    var hide = document.querySelector('#hideButton');
    var show = document.querySelector('#showButton');
    var input = document.querySelector('input');
    
    //console.log(imgs, hide, show, input);
    
//    for( var i=0; i<imgs.length; i++){
//        imgs[i].classList.add('invisible');
//       }
    
    
    hide.addEventListener('click', function(){
       var tag = input.value;    // tag wpisany do inputa
        input.value = '';
        
        
        
        for(var i=0; i<imgs.length; i++) {
            var tags = imgs[i].dataset.tag      //tagi z obrazków 
            
                for(var j=0; j<tags.length; j++) {
                    if (tag == tags.substring(j, j+ tag.length)) {
                        imgs[i].classList.add('invisible');
                        console.log('znaleziono!');
                        break;
                    }
                }
        }
        
    });
    
    
     show.addEventListener('click', function(){
       var value = input.value;
        input.value = '';
           
           
        for(var i=0; i<imgs.length; i++) {
            var tags = imgs[i].dataset.tag      //tagi z obrazków 
            
                for(var j=0; j<tags.length; j++) {
                    if (tag == tags.substring(j, j+ tag.length)) {
                        imgs[i].classList.remove('invisible');
                        console.log('znaleziono!');
                        break;
                    }
                }
        }
         
         
         
         
         
         
    });
    
    
    
    
    
    
    
    
    
    
    
 
    
    
});
