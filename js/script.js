$(document).ready(function(){

    $('p').hide();

    $('.arrow-down').hide();

    $('.arrow-up').hide();

    $('.arrow-right').hide();

    $('.arrow-left').hide();

    $('.topBox').click(function(){

        $('.text3').removeAttr("style");

        $('.text2').removeAttr("style");

        $('.text4').removeAttr("style");

        $('p').hide();

        $('.arrow-down').hide();

        $('.arrow-up').hide();

        $('.arrow-right').hide();

        $('.arrow-left').hide();

        $('.text1').css({"font-style": "italic" , "color":"#C4AA8E"});

        $('.top').fadeIn("slow");

        $('.arrow-down').show("fast")

    });

    $('.bottom').click(function(){

        $('.text1').removeAttr("style");

        $('.text2').removeAttr("style");

        $('.text4').removeAttr("style");

        $('p').hide();

        $('.arrow-down').hide();

        $('.arrow-up').hide();

        $('.arrow-right').hide();

        $('.arrow-left').hide();

        $('.text3').css({"font-style": "italic" , "color":"#474747"});

        $('.bottomBox').fadeIn("slow");

        $('.arrow-up').show("fast")

    });

    $('.rightBox').click(function(){

        $('.text1').removeAttr("style");

        $('.text3').removeAttr("style");

        $('.text4').removeAttr("style");

        $('p').hide();

        $('.arrow-down').hide();

        $('.arrow-up').hide();

        $('.arrow-right').hide();

        $('.arrow-left').hide();

        $('.text2').css({"font-style": "italic" , "color":"#424F5C"});

        $('.right').fadeIn("slow");

        $('.arrow-left').show("fast")

    });

    $('.leftBox').click(function(){

        $('.text1').removeAttr("style");

        $('.text2').removeAttr("style");

        $('.text3').removeAttr("style");

        $('p').hide();

        $('.arrow-down').hide();

        $('.arrow-up').hide();

        $('.arrow-right').hide();

        $('.arrow-left').hide();

        $('.text4').css({"font-style": "italic" , "color":"#B22C15"});

        $('.left').fadeIn();

        $('.arrow-right').show("fast")

    });

});


