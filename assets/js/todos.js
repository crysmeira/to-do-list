// Check off specific todos by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// Click on X to delete the todo
$("span").click(function(event) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
});
