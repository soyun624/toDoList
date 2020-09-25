$(function(){
    
   
    $('#btn-add').click(function(e){
        e.preventDefault();
        const task = $('#input-todo').val();
        const toDoList = $('<p></p>').text(task);
        $('#list-container').append(toDoList);
        $('#input-todo').val('');
        $('#btn-add').attr('disabled',true);
    })


    $('#input-todo').keydown(function(){
        $('#btn-add').attr('disabled',false);
    })

    $('#list-container').click(function(e){
    
        $(e.target).toggleClass('completed');
    })

    
})