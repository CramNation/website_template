$(document).ready(function (e) {
    $('#down-arrow-question').on('click', function (e) {
        e.preventDefault(); 
        $('#question-id').toggle(150);
        $("#down-arrow-question").toggleClass('flip');    
    });

    $('#down-arrow-explanation').on('click', function (e) {
        e.preventDefault();
        $('#explanation-id').toggle(150);
        $("#down-arrow-explanation").toggleClass('flip');
    });

    $('#down-arrow-comments').on('click', function (e) {
        e.preventDefault();
        $('#comments-id').toggle(150);
        $("#down-arrow-comments").toggleClass('flip');
    });
});