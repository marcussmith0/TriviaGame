

 $( document ).ready(function() {

 	console.log("time for some action");

 	var h2 = "<h2>";
 	var h2c = "</h2>";

 	
	var wrong = 0;
	var correct = 0;

    var quiz = {





    	questions: [


        {
        	Question: "1. The hit song 'my girl' was recorded by which group?", 
            answers: [
                {
                	answer: "The Ohio Players", 
                	correct_answer: false
                },

                {
                	answer: "The Drifters", 
                	correct_answer: false
                },

                {
                	answer: "The Temptations", 
                	correct_answer: true
                },

                {
                	answer: "The Baby Harvesting Demon Maggots", 
                	correct_answer: false
                }

        ]},

        {
        	Question: "2. What is the Title of Stevie Wonders debut album?", 
            answers: [
                {
                	answer: "The Jazz Soul of Little Stevie", 
                	correct_answer: true
                },

                {
                	answer: "The Beautiful and Fantastic Adventrues of Stevie Wonder", 
                	correct_answer: false
                },

                {
                	answer: "Signed, Sealed, Delivered I'm Yours", 
                	correct_answer: false
                },

                {
                	answer: "For Once in My Life", 
                	correct_answer: false
                }

        ]},

        {
        	Question: "3. Which of the following was a member of the Beatles?", 
            answers: [
                {
                	answer: "Frank Warren", 
                	correct_answer: false
                },

                {
                	answer: "Chas Newby", 
                	correct_answer: true
                },

                {
                	answer: "Jim Morrison", 
                	correct_answer: false
                },

                {
                	answer: "Richard Nixon", 
                	correct_answer: false
                }

        ]},

        {
        	Question: "4. Which of the follow Jazz musicians was born on September 26, 1940?", 
            answers: [
                {
                	answer: "Gary Bartz", 
                	correct_answer: true
                },

                {
                	answer: "Bill Clinton", 
                	correct_answer: false
                },

                {
                	answer: "Dorothy Ashby", 
                	correct_answer: false
            	},

                {
                	answer: "Miles Davis", 
                	correct_answer: false
                }

        ]},

        {
        	Question: "5. How tall is Mick Fleetwood?", 
            answers: [
                {
                	answer: "6'8''", 
                	correct_answer: false
                },

                {
                	answer: "6'6''", 
                	correct_answer: true
                },

                {
                	answer: "6'3''", 
                	correct_answer: false
                },

                {
                	answer: "6'1''", 
                	correct_answer: false
                }

        ]},

        {
        	Question: "6. How many members did Parliament have?", 
            answers: [
                {
                	answer: "16", 
                	correct_answer: false
                },

                {
                	answer: "34", 
                	correct_answer: false
                },

                {
                	answer: "29", 
                	correct_answer: false
                },

                {
                	answer: "37", 
                	correct_answer: true
                }

        ]},

        {
        	Question: "7. Gil Scott Heron was best known for is song...", 
            answers: [
                {
                	answer: "The Revolution Will Not be Televised", 
                	correct_answer: true
                },

                {
                	answer: "What's Going On", 
                	correct_answer: false
                },

                {
                	answer: "My Girl", 
                	correct_answer: false
                },

                {
                	answer: "Sgt. Peppers Taught Me Guitar", 
                	correct_answer: false
                }

        ]},

        {
        	Question: "8. Which of the following artist designed the cover of the debut album of The Velvet Underground?", 
            answers: [
                {
                	answer: "Jean-Michel Basquiat", 
                	correct_answer: false
                },

                {
                	answer: "Pablo Picasso", 
                	correct_answer: false
                },

                {
                	answer: "Andy Warhol", 
                	correct_answer: true
                },

                {
                	answer: "Bob Ross", 
                	correct_answer: false
                }

        ]},


    ]





};






    $("#chosen").hide();




 	$("button").click(function() {

 		
        $("#chosen").show();
 		$("#button1").hide();




 		$("#question").html("<h3>" + quiz.questions[0].Question + "</h3>");


 		console.log(quiz.questions[0].answers[2].answer);
 		console.log(quiz.questions[0].answers[2].correct_answer);

 		console.log(quiz.questions[0].answers.length);






 		for (i = 0; i < quiz.questions.length; i++) {

 			console.log(JSON.stringify(quiz.questions[i].Question));

 			for (j = i; j < quiz.questions[j].answers.length; j++) {


 				console.log(JSON.stringify(quiz.questions[j].answers[j].answer));

                var listItems = $("<li><input type='radio' name='possibleAnswers'>");

                listItems.prepend(quiz.questions[i].answers[j].answer);

                $("#list-of-answers").prepend(listItems);




 			}





 		}





 	});
 


 });
