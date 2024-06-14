$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            window.location.href = 'mailto:mc-tuinonderhoud@outlook.be?subject=Contact Website: ' + subject + ' (' + name + ')' + '&body=' + message;
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
