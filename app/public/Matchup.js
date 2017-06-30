


/**
 * A lot of this I got help from Tim on went back to the old way using nested arrays
 * just to try and make it work.
 */


$(document).ready(function(){

    var AnswerOne = 0, AnswerTwo =0,AnswerThree = 0, AnswerFour = 0, AnswerFive = 0,  AnswerSix= 0, AnswerSeven = 0, AnswerEight = 0, AnswerNine = 0, AnswerTen = 0;
    var scoreArray = [];
    var closestMatch = 30;
    var userName;

    //1
    $("#questionOne li").on("click", function(){
        AnswerOne = $(this).val();
    });

    //2
    $("#questionTwo li").on("click", function(){
        AnswerTwo = $(this).val();
    });

    //3
    $("#questionThree li").on("click", function(){
        AnswerThree = $(this).val();
    });

    //4
    $("#questionFour li").on("click", function(){
        AnswerFour = $(this).val();
    });

    //5
    $("#questionFive li").on("click", function(){
        AnswerFive = $(this).val();
    });

    //6
    $("#questionSix li").on("click", function(){
        AnswerSix = $(this).val();
    });

    //7
    $("#questionSeven li").on("click", function(){
        AnswerSeven = $(this).val();
    });

    //8
    $("#questionEight li").on("click", function(){
        AnswerEight = $(this).val();
    });

    //9
    $("#questionNine li").on("click", function(){
        AnswerNine = $(this).val();
    });

    //10
    $("#questionTen li").on("click", function(){
        AnswerTen = $(this).val();
    });



    $("#submitAnswers").on("click", function(){

        var scoreArray = [AnswerOne, AnswerTwo, AnswerThree, AnswerFour, AnswerFive, AnswerSix, AnswerSeven, AnswerEight, AnswerNine, AnswerTen];
        var userName = $("#userName").val().trim();
        var animalObject = {
            "name": userName,
            "scores": scoreArray
        };


        $.post("/api/friends", animalObject, function(){
            $("#userName").val('');
        });

        matchUp(scoreArray);

    });

    function matchUp(scoreArray){
        var sumArray = [];
        var sum = 0;
        var closestNumber= 0;
        var currentURL = window.location.origin;

        $.ajax(
            {
                url: currentURL + '/api/friends',
                method: 'GET'
            })
            .done(function(friends) {

                //cycles through the friends array [f] = friends

                for(var f = 0; f < friends.length -1; f++){

                    // nested for loop for the scores of each answer [s] = scores

                    for(var s = 0; s < scoreArray.length; s++) {
                        sum += (Math.abs(scoreArray[s] - friends[f].scores[s]));
                    }

                    sumArray.push(sum);
                    sum = 0;
                    AnswerOne = 0, AnswerTwo =0, AnswerThree = 0, AnswerFour = 0, AnswerFive = 0, AnswerSix = 0, AnswerSeven = 0, AnswerEight = 0, AnswerNine = 0, AnswerTen = 0;

                }

                // the sum or total of both arrays [t] = total to ge the closest match

                for (var t = 0 ; t< sumArray.length;t++){

                    if(sumArray[t] < closestMatch){
                        closestMatch = sumArray[t];
                        closestNumber = t;
                    }
                }

                fireModal(friends, closestNumber);
            });
    }

    function fireModal(friends,closestNumber){

        $('.modal-body').empty();
        $('.modal').modal('show');

        var closeName = friends[closestNumber].name;
        var nameDiv = $('<h3>');
        console.log(closeName);
        nameDiv.text(closeName);

        $('.modal-body').append(nameDiv);
    }
});
