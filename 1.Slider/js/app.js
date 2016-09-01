
document.addEventListener("DOMContentLoaded", function(){
    
    
    console.log("działa");
    
    var index = 0;
    
    var next = document.querySelector("#nextPicture");
    var prev = document.querySelector("#prevPicture");
    var list = document.querySelectorAll("li");
    
    
    console.log(next);
    console.log(prev);
    console.log(list);
    

    list[index].classList.add("visible");         //dodajemy cklase do 1 elementu listy zeby byl widoczny
    
   
    next.addEventListener('click', function(e){
 //        console.log("kliknieto guzik Next");
        list[index].classList.remove("visible");
        index++;                                                // mozemy rowniez zapisac jako   index = index+1
        if(index>= list.length) {
           index=0; 
        }
        list[index].classList.add("visible");
        
    });
 
        
        
    prev.addEventListener('click', function(e){
//        console.log("kliknieto guzik prev");
        list[index].classList.remove("visible");
        index--;
        if(index<0) {
           index=list.length-1; 
        }
        list[index].classList.add("visible");
        
    });
    
    
});

