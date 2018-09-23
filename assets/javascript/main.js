
$(document).ready(function () {

    //Dropdown Menus
    if ($(window).width() > 980) {
        $('ul.nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).slideDown();
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).slideUp();
        });
    }


    // intro slider thing  
    $(document).ready(function () {
        $('#logoTwo').fadeIn(2000);
        $("p").fadeIn(2000);
        $(".abBlock").fadeIn(1000);
        $('#mhBlock').fadeIn(1000);
        //$("#bton").animate({'opacity':'1'},1000);
    })


    //shorten navbar scroll
    $(document).on("scroll", function () {

        if ($(document).scrollTop() > 100) {
            $(".navbar").removeClass("large").addClass("small");
            $("#logo").css('height', '70px')
            $("#logo").css('width', '50px')

        } else {
            $(".navbar").removeClass("small").addClass("large");
            $("#logo").css('height', '90px')
            $("#logo").css('width', '70px')

        }
    });

    //counter block members
    $(window).ready(function () {
        var counter = 0;
        var services = 0;
        var fee = 0
        setInterval(function () {
            if (counter < 150) {
                counter++
                var p = $("<p id='count'>" + counter + "+</p>")
                $(".showblock").html(p);
            }
        }, 80);

    })

    $(".sendbtn").click(function (e) {
        e.preventDefault();
        var newMail = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()

        };

        $.post("http://localhost:465/contact", newMail).then(function (data) {
            console.log("added", data)
        })
    })

    $(".memBlock").hover(
        function () {
            $("#memText").css("opacity", "0");
            $("#memBlurb1").css("opacity", "1");
            $("#memBlurb2").css("opacity", "1");
            $("#memBlurb3").css("opacity", "1");
            $("#memBlurb4").css("opacity", "1");
        },
        function () {
            $("#memText").css("opacity", "1");
            $("#memBlurb1").css("opacity", "0");
            $("#memBlurb2").css("opacity", "0");
            $("#memBlurb3").css("opacity", "0");
            $("#memBlurb4").css("opacity", "0");
        }
    )


})



//contact form ajax
/*
$(document).ready(function () {
            var user, to, subject, text;
            $("#send_email").click(function () {
                // enter your email account that you want to recieve emails at.
                to = "sasankgraju@gmail.com";
                name = $("#name").val();
                email = $("email").val();
                message = $("message").val();
                // $("#message").text("Sending E-mail...Please wait");
                $.get("http://localhost:8080/send", {
                    to: to,
                    name: name,
                    email: email,
                    message: message
                }, function (data) {
                    if (data == "sent") {
                        console.log("Email sent");
                    }
                });
            });
        });
        */