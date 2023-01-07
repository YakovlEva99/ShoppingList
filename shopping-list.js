$('ul').on('click', 'li', function(){
   $(this).toggleClass('done');
})
$('ul').on('click', 'span' , function(event){
    event.stopPropagation();
    $(this).parent().remove();
})


$('input').keypress(function(eve){
    if(eve.which===13){
        var itemText=$(this).val();
        $('ul').append('<li><span>x</span> ' + itemText + '</li>')
    }

})

$('h2 span').click(function(){
    
    $('input').fadeToggle();
})