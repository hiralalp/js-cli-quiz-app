const chalk = require('chalk');
var readlineSync = require('readline-sync');

console.log(chalk.redBright.bgYellowBright("Welcome to", chalk.green.red.bold.bold("MAHABHARAT"), "quiz!"));
console.log(chalk.bgCyan("This quiz will test your knowledge about the epic of Mahabharat"));

console.log();

console.log("💥");

const rules = `
*********************RULES OF THE GAME**********************
1)There are 2 levels in the game
2)Each level has 5 Questions
2)+2 will be awarded for correct answer
2)-1 for incorrect answer
3)AND -1 for invalid input(pressing anything except a/b/c/d)
`;

console.log(chalk.red(rules));

console.log();

console.log("💥");
console.log();
var nameOfUser = readlineSync.question(chalk.red.bgCyanBright("Enter your name to continue: "))

console.log();
console.log("💥");
console.log();
console.log(
  chalk.italic.cyan(
    'Hello', chalk.green.bold(nameOfUser), 'lets play the quiz game on Mahabharat!!!!'
  )
);
console.log();
console.log("💥");
console.log();

let score = 0;
let totalScore = 0;
let finalAnswerList = [];
// let leaderBoard=[];
var level1Questions = [
  {
    question: "Who wrote the Mahabharat?",
    "a": "Vyas",
    "b": "Valmiki",
    "c": "Tulsi Dasji",
    "d": "Lord Brahma",
    answer: "a"
  },
  {
    question: "Who is the eldest among the Pandavas?",
    "a": "Yudishthir",
    "b": "Arjun",
    "c": "Bheem",
    "d": "Karan",
    answer: "a"
  },
  {
    question: "Where was Krishna born?",
    "a": "Mathura",
    "b": "Ayodhya",
    "c": "Hastinapur",
    "d": "Patliputra",
    answer: "a"
  },
  {
    question: "What was Krishna's sister's name, who married Arjuna?",
    "a": "Devaki",
    "b": "Uttara",
    "c": "Subhadra",
    "d": "Satyabhama",
    answer: "c"
  },
  {
    question: "What was Nakula and Sahadeva's mother's name?",
    "a": "Kunti",
    "b": "Madri",
    "c": "Gandhari",
    "d": "Draupadi",
    answer: "b"
  },
]

function play(answer, answerByUser) {



  if (!(answerByUser === "a" || answerByUser === "b" || answerByUser === "c" || answerByUser === "d")) {
    score = score - 1;
    console.log(chalk.redBright("Invalid input"));
  }
  else if (answerByUser === answer) {
    score = score + 2;
    console.log(chalk.green("CORRECT :D"));
  }
  else {
    score = score - 1;
    console.log(chalk.red("WRONG ANSWER :/"));
  }
  console.log("SCORE:", score);
  console.log();
  console.log("💥");
  console.log();
}

function FinalAnswer(actualAnswer, userAnswer) {
  this.userAnswer = userAnswer;
  this.actualAnswer = actualAnswer;
}

function UserScore(nameOfUser, totalScore) {
  this.nameOfUser = nameOfUser;
  this.totalScore = totalScore;
}

function displayQ(question, a, b, c, d) {
  console.log(chalk.underline.bgBlue("Q" + (i + 1) + " " + question));
  console.log(chalk.yellow("(a) " + a));
  console.log(chalk.yellow("(b) " + b));
  console.log(chalk.yellow("(c) " + c));
  console.log(chalk.yellow("(d) " + d));

}

for (var i = 0; i < level1Questions.length; i++) {
  var current = level1Questions[i];
  displayQ(current.question, current.a, current.b, current.c, current.d);
  var answerByUser = readlineSync.question(chalk.bgRed.underline.bold("Select from a, b, c, d: "));

  play(current.answer, answerByUser);
  if (answerByUser == "") {
    finalAnswerList.push(new FinalAnswer(current[current.answer], "Not Answered"));
  } else {
    finalAnswerList.push(new FinalAnswer(current[current.answer], current[answerByUser]));
  }
}

console.log(chalk.bgRedBright("Your Score of Level 1:"), score);
console.log();
console.log("💥");
console.log();
console.log(chalk.black.bgYellowBright("Solution of the Level 1:"))
console.log();
console.table(finalAnswerList);

var level2Questions = [
  {
    question: "What was the name of Dronacharya's son?",
    "a": "Ashwathama",
    "b": "Karan",
    "c": "Shalya",
    "d": "Abhimanyu",
    answer: "a"
  },
  {
    question: "After escaping from the burning shellac palace, in which village did the Pandavas live in disguise as Brahmins?",
    "a": "Panchala",
    "b": "Ekachakrapura",
    "c": "Hastinapur",
    "d": "Magadha",
    answer: "b"
  },
  {
    question: "Who seized Draupadi by her hair and dragged her into the court?",
    "a": "Duryodhana",
    "b": "Duhshasana",
    "c": "Vidura",
    "d": "Drushtadyumna",
    answer: "b"
  },
  {
    question: "For whom was the epithet Vasudeva used?",
    "a": "Krishna",
    "b": "Arjuna",
    "c": "Nakula",
    "d": "Bheema",
    answer: "a"
  },
  {
    question: "What was the real name of Draupadi?",
    "a": "Krishna",
    "b": "Madri",
    "c": "Gandhari",
    "d": "Uttara",
    answer: "b"
  }
]



totalScore += score;

if (score === 10) {
  score = 0;
  finalAnswerList = []
  console.log(chalk.bgRedBright("Hurrey !!!! You have cleared level 1 "));
  console.log(chalk.bgCyan("Get Ready for the level 2 "));

  console.log();
  console.log("💥");
  console.log();

  for (var i = 0; i < level2Questions.length; i++) {
    var current = level2Questions[i];
    displayQ(current.question, current.a, current.b, current.c, current.d);
    var answerByUser = readlineSync.question(chalk.bgRed.underline.bold("Select from a, b, c, d: "));

    play(current.answer, answerByUser);
    if (answerByUser == "") {
      finalAnswerList.push(new FinalAnswer(current[current.answer], "Not Answered"));
    } else {
      finalAnswerList.push(new FinalAnswer(current[current.answer], current[answerByUser]));
    }
  }
  totalScore += score;
  console.log(chalk.bgRedBright("Your Score of Level 2:"), score);
  console.log();
  console.log(chalk.bgRedBright("Your Total Score of the Game:"), totalScore);
  console.log();
  console.log("💥");
  console.log();
  console.log(chalk.black.bgYellowBright("Solution of the Level 2:"))
  console.log();
  console.table(finalAnswerList);
  console.log();
  console.log("💥");
  console.log();
  // console.log(chalk.green("******LEADERS BOARD***********"))
  // leaderBoard.push(new UserScore(nameOfUser,totalScore));
  // console.table(leaderBoard.sort(function (a, b) {
  //   return b.value - a.value;
  // }));
  
  
  console.log(chalk.bgRedBright("Thanks for playing the game!!!!"));

} else {
  console.log();
  console.log("💥");
  console.log();
  console.log(chalk.bgRedBright("Sorry ! You are not eligible for the level 2"));
  console.log();
  console.log("💥");
  console.log();
  console.log(chalk.bgCyanBright("Your Total Score of the Game:"), totalScore);
  console.log();
  console.log("💥");
  console.log();
  console.log(chalk.red.bgYellowBright("Thanks for playing the game!!!!"));
}

