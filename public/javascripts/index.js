$(function () {
    $('[data-id]').click(function () {
        var elem = $(this);
        var text = prompt('изменение', $(elem).html());
        $.ajax({
            url: "/change/" + elem.attr('data-id'),
            data: {title:text},
            method: "POST",
            success: function () {

            },
            statusCode: {
                200: function () {
                    elem.html(text)
                },
                403: function (jqXHR) {
                    var error = JSON.parse(jqXHR.responseText);
                    $('.error', form).html(error.message);
                }
            }
        });

    });
});