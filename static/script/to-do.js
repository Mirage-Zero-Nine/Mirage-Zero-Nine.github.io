// noinspection JSJQueryEfficiency
$("ul li.task").on('click', 'a', function () {

    $(this).toggleClass('completed');

});

// remove task
// noinspection JSJQueryEfficiency
$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();       // in this call back, itself is parent
    });
    e.stopPropagation();
});

// add new task
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {     // press enter key
        let newTask = $(this).val();
        $(this).val("");
        $('ul').append('<li><span> <i class="fas fa-trash-alt"> </i> </span><a href="#">' + newTask + '</a></li>');
    }
});


$("#input-toggle").click(function () {
    $("label").fadeToggle();
});