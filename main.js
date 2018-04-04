var questionNum = 0;
var question = '<p>What is your name?</p>';

var output = document.getElementById('output');
output.innerHTML = question;

var input = 0;

function answer()
{
   input = document.getElementById("name").value;
   setTimeout(bot, 2000)
}

function bot() {
  if (questionNum == 0 )
  {
    output.innerHTML = '<p> Hello ' + input + '!</p>'
    document.getElementById('name').value = "";
    question = '<p>How old are you?</p>';
    setTimeout(timedQuestion, 2000);
  }
  else if (questionNum == 1)
  {
    output.innerHTML = "<p>You must be born in " + ( 2018 - input ) + ". I was born about a week ago.</p>";
    document.getElementById('name').value = "";
    question = '<p>What is the color of your shirt?</p>'
    setTimeout(timedQuestion , 2000);
  }
  else if (questionNum == 2)
  {
    output.innerHTML = "<p id='myColor'> Wow " + input + " is my favorite color!</p>";
    document.getElementById('myColor').style.color = input;
    document.getElementById('name').value = "";
    question = '<p>What are you doing over the weekend?</p>'
    setTimeout(timedQuestion , 2000);
  }
  else if (questionNum == 3)
  {
    output.innerHTML = "<p>Oh " + input + "? That sounds amazing!</p>";
    document.getElementById('name').value = "";
    question = '<p>Ok well I have to go now. Nice meeting you!</p>'
    document.getElementById('name').style.display = 'none';
    document.getElementById('myButton').style.display = 'none';

    setTimeout(timedQuestion , 2000);
  }
  else{
    setTimeout(timedQuestion , 2000);
  }

}

function timedQuestion()
{
    output.innerHTML = question;
 	  questionNum++;
    console.log(questionNum);

    onclick(answer, 2000);
}
