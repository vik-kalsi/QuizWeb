let quizScore = 0;



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 𝟭 #############################################################

$("input[name=”Q1Option”]").change(function(){
    $("#BtnQ1").removeClass("hidden");
});


$("#BtnQ1").click(function(){
    if ($("#Q1RadioBtn1").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
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
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
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
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
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
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
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
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
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
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q6Section").fadeOut();
    $("#Q7Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 7 #############################################################

$("input[name=”Q7Option”]").change(function(){
    $("#BtnQ7").removeClass("hidden");
});


$("#BtnQ7").click(function(){
    if ($("#Q7RadioBtn2").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q7Section").fadeOut();
    $("#Q8Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 8 #############################################################

$("input[name=”Q8Option”]").change(function(){
    $("#BtnQ8").removeClass("hidden");
});


$("#BtnQ8").click(function(){
    if ($("#Q8RadioBtn3").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q8Section").fadeOut();
    $("#Q9Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 9 #############################################################

$("input[name=”Q9Option”]").change(function(){
    $("#BtnQ9").removeClass("hidden");
});


$("#BtnQ9").click(function(){
    if ($("#Q9RadioBtn3").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q9Section").fadeOut();
    $("#Q10Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 10 #############################################################

$("input[name=”Q10Option”]").change(function(){
    $("#BtnQ10").removeClass("hidden");
});


$("#BtnQ10").click(function(){
    if ($("#Q10RadioBtn2").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q10Section").fadeOut();
    $("#Q11Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 11 #############################################################

$("input[name=”Q11Option”]").change(function(){
    $("#BtnQ11").removeClass("hidden");
});


$("#BtnQ11").click(function(){
    if ($("#Q11RadioBtn1").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q11Section").fadeOut();
    $("#Q12Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 12 #############################################################

$("input[name=”Q12Option”]").change(function(){
    $("#BtnQ12").removeClass("hidden");
});


$("#BtnQ12").click(function(){
    if ($("#Q12RadioBtn4").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q12Section").fadeOut();
    $("#Q13Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 13 #############################################################

$("input[name=”Q13Option”]").change(function(){
    $("#BtnQ13").removeClass("hidden");
});


$("#BtnQ13").click(function(){
    if ($("#Q13RadioBtn3").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q13Section").fadeOut();
    $("#Q14Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 14 #############################################################

$("input[name=”Q14Option”]").change(function(){
    $("#BtnQ14").removeClass("hidden");
});


$("#BtnQ14").click(function(){
    if ($("#Q14RadioBtn1").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q14Section").fadeOut();
    $("#Q15Section").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 15 #############################################################

$("input[name=”Q15Option”]").change(function(){
    $("#BtnQ15").removeClass("hidden");
});


$("#BtnQ15").click(function(){
    if ($("#Q15RadioBtn1").is(":checked")) {
        alert("Correct Answer");
        quizScore=quizScore + 1;
        $("#FinalScore").html(quizScore);
    } else {
        alert("Wrong Answer");
    }
    $("#Q15Section").fadeOut();
    $("#FinalScoreSection").fadeIn(3000);
});

//#########################################################################



//𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻 15 #############################################################

$("#BtnRefresh").click(function(){
    location.reload(true);
});


$("#FinalScore").html(quizScore);


//#########################################################################