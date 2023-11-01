
//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 𝟭 #############################################################

$("input[name=”Q1Option”]").change(function(){
    $("#BtnQ1").removeClass("hidden");
});


$("#BtnQ1").click(function(){
    if ($("#Q1RadioBtn1").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q1Section").fadeOut();
    $("#Q2Section").fadeIn(3000);
});

//#########################################################################




//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 2 #############################################################

$("input[name=”Q2Option”]").change(function(){
    $("#BtnQ2").removeClass("hidden");
});


$("#BtnQ2").click(function(){
    if ($("#Q2RadioBtn3").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q2Section").fadeOut();
    $("#Q3Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 3 #############################################################

$("input[name=”Q3Option”]").change(function(){
    $("#BtnQ3").removeClass("hidden");
});


$("#BtnQ3").click(function(){
    if ($("#Q3RadioBtn2").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q3Section").fadeOut();
    $("#Q4Section").fadeIn(3000);
});

//#########################################################################




//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 4 #############################################################

$("input[name=”Q4Option”]").change(function(){
    $("#BtnQ4").removeClass("hidden");
});


$("#BtnQ4").click(function(){
    if ($("#Q4RadioBtn4").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q4Section").fadeOut();
    $("#Q5Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 5 #############################################################

$("input[name=”Q5Option”]").change(function(){
    $("#BtnQ5").removeClass("hidden");
});


$("#BtnQ5").click(function(){
    if ($("#Q5RadioBtn2").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q5Section").fadeOut();
    $("#Q6Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 6 #############################################################

$("input[name=”Q6Option”]").change(function(){
    $("#BtnQ6").removeClass("hidden");
});


$("#BtnQ6").click(function(){
    if ($("#Q6RadioBtn1").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q6Section").fadeOut();
    $("#Q7Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 6 #############################################################

$("input[name=”Q7Option”]").change(function(){
    $("#BtnQ7").removeClass("hidden");
});


$("#BtnQ7").click(function(){
    if ($("#Q7RadioBtn2").is(":checked")) {
        alert("Correct Answer");
    } else {
        alert("Wrong Answer");
    }
    $("#Q7Section").fadeOut();
    $("#Q8Section").fadeIn(3000);
});

//#########################################################################