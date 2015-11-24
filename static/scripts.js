$(document).ready(function() {
    $.ajax({
            url: '/balance'
        })
        .done(function (displayedNum) {
            $('body').html(displayedNum);
            console.log("Does This Work?");
        })
    ;})