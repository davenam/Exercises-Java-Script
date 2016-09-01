$(function(){  
    
    
    var inputTask = $('#taskInput');
    var button = $('#addTaskButton');
    var list = $('#taskList');
    var remove = $('#removeFinishedTasksButton');
    var licznik = $("<p>Counter:</p><input id='counter'>");
    var counter = $("#counter");
    list.prepend(licznik);
    var total = 0;
//    console.log(inputTask);
//    console.log(button);
//    console.log(list);
//    console.log(remove);
    
    button.on('click',function(){
        console.log('klik pierwszy');
        var zadanie = inputTask.val();
        if (zadanie.length>5 && zadanie.length<100){
            var el = $('<li><h1>'+zadanie+'</h1><button class="delete">Delete</button>        <button class="done">Complete</button></li>');
        list.append(el);
        };
        
        ++total;
        licznik.val(total);  
        
        var del = el.find('.delete');
        var com = el.find('.done');
        
        
        com.on('click',function(){
            $(this).parent().toggleClass('complete');
            if ($(this).parent().hasClass('complete')){
            --total; 
            licznik.val(total);    
                
            } else {
             ++total; 
            licznik.val(total);    
                
            }
            
        });
     

    
          del.on('click', function(){
            console.log($(this).parent().hasClass('complete'));
            
            
             if ($(this).parent().hasClass('complete')){
                 $(this).parent().remove();
                 licznik.val(total);   
             
             } else {
            alert('Nie zakonczono zadania');
        //    --total;
            licznik.val(total); 
             }
            
        })
           
       
      
    
          
        
    });
        

    
    
    remove.click(function(){
        
        list.children().not(licznik).remove();
        
    })
    
   
  
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});









