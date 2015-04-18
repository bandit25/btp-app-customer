$(document).ready(function() {
    var panels = $('.user-infos');
    var panelsButton = $('.dropdown-user');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
            }
        })
    });


    $('[data-toggle="tooltip"]').tooltip();

    $('button').click(function(e) {
        e.preventDefault();
        
    });
});
var local = window.localStorage;
document.getElementById("title").innerHTML = window.localStorage.getItem("username");
document.getElementById("user_name").innerHTML = window.localStorage.getItem("username");
document.getElementById("user_address").innerHTML = window.localStorage.getItem("useraddress");
document.getElementById("user_email").innerHTML = window.localStorage.getItem("useremail");
document.getElementById("user_no").innerHTML = window.localStorage.getItem("user");