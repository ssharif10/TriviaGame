var correctCount = 0;
var inCorrectCount = 0;
var unAnsweredCount = 0;
var sec = 40;
var timer;

//Question array
var quizList = [
	{	
		name: "question1",
		question: "1. Justin Bieber had three of the top five songs on the Billboard Hot 100 chart for January 2nd, 2016. Sorry, Love Yourself and...?",
		answer: "What Do You Mean?",
		choices: ["What Do You Mean?", "I'll Show You", "Purpose", "The Feeling"]
	},
	{
		name: "question2",
		question: "2. Which artist had hits with the songs When We Were Young and Hello in 2016?",
		answer: "Adele",
		choices: ["Lady Gaga", "Adele", "Ariana Grande", "Beyonce"]
	},
	{
		name: "question3",
		question: "3. Canadian singer and songwriter Abel Makkonen Tesfaye is better known as?",
		answer: "The Weekend",
		choices: ["Whiz Khalifa", "Future", "Drake", "The Weekend"]
	},
	{
		name: "question4",
		question: "4. Dave Grohl is the lead singer for which American rock band?",
		answer: "Foo Fighters",
		choices: ["Pearl Jam", "Coldplay", "Nirvana", "Foo Fighters"]
	},
	{
		name: "question5",
		question: "5. Which of these songs was a 2016 hit for Barbadian singer Rihanna?",
		answer: "Needed Me",
		choices: ["Needed Me", "Lost Boy", "New Romantics", "Same Old Love"]
	},
	{
		name: "question6",
		question: "6. What was Madonna’s first UK top ten single?",
		answer: "Holiday",
		choices: ["Vogue","Papa Don't Preach","Like A Prayer", "Holiday"]
	},
	{
		name: "question7",
		question: "7. True or False. Miley Cyrus is the daughter of country singer Billy Ray Cyrus?",
		answer: "True",
		choices: ["True","False","Maybe","Not Sure"]
	},
	{
		name: "question8",
		question: "8. What was Smokey Robinson’s most famous band called?",
		answer: "The Miracles",
		choices: ["The Miracles","The Spinners","Smokey Robinson and Crew","The Four Tops"]
	},
	{
		name: "question9",
		question: "9. Which singer appeared in the feature film, Battleship?",
		answer: "Rihanna",
		choices: ["Katy Perry","Rihanna","Janet Jackson","Mel B."]
	},
	{
		name: "question10",
		question: "10. American DJ Robert Weston Smith was better known by what stage name?",
		answer: "Wolfman Jack",
		choices: ["Smitty Bob","Ready Rob","Wolfman Jack","Casey Casem"]
	}
];

//Timer Display
function displayTime(){
	$(".time-left").html("Time left<br>" + --sec + "<br>seconds");
}



$(document).ready(function() {

	//When click on start button
	$("#start").click(displayQuestions);

	//When click on submit button
	$("#submit").click(onSubmit);

});