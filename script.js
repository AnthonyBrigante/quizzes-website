const quizzes = {
    minecraft: {
        title: "Minecraft Movie Quiz",
        questions: [
            {
                question: "What is the main material used to build in Minecraft?",
                options: ["Wood", "Stone", "Blocks", "Bricks"],
                answer: 2
            },
            {
                question: "What creature explodes when it gets close to the player?",
                options: ["Zombie", "Enderman", "Creeper", "Skeleton"],
                answer: 2
            },
            {
                question: "Which dimension in Minecraft is known for its floating islands?",
                options: ["Nether", "Overworld", "End", "The Twilight Forest"],
                answer: 2
            },
            {
                question: "What is the name of the player character in Minecraft?",
                options: ["Alex", "Steve", "Herobrine", "Enderman"],
                answer: 1
            },
            {
                question: "Which mob is known for dropping gunpowder?",
                options: ["Creeper", "Zombie", "Skeleton", "Spider"],
                answer: 0
            }
        ]
    },
    mcu: {
        title: "MCU Movies Quiz",
        questions: [
            {
                question: "Who is the first Avenger?",
                options: ["Iron Man", "Hulk", "Captain America", "Thor"],
                answer: 2
            },
            {
                question: "What is the name of Thor’s hammer?",
                options: ["Johnathon", "Mjolnir", "Thunderfist", "Gungnir"],
                answer: 1
            },
            {
                question: "Who plays Black Panther in the MCU?",
                options: ["Chadwick Boseman", "Michael B. Jordan", "Chris Hemsworth", "Don Cheadle"],
                answer: 0
            },
            {
                question: "Which Infinity Stone does Doctor Strange guard?",
                options: ["Space", "Mind", "Time", "Soul"],
                answer: 2
            },
            {
                question: "Who is the villain in Avengers: Infinity War?",
                options: ["Loki", "Ultron", "Thanos", "Hela"],
                answer: 2
            }
        ]
    },
    darkknight: {
        title: "Dark Knight Trilogy Quiz",
        questions: [
            {
                question: "Who directed The Dark Knight trilogy?",
                options: ["Zack Snyder", "Christopher Nolan", "Tim Burton", "Matt Reeves"],
                answer: 1
            },
            {
                question: "Who played the Joker in The Dark Knight?",
                options: ["Jared Leto", "Joaquin Phoenix", "Heath Ledger", "Jack Nicholson"],
                answer: 2
            },
            {
                question: "What is the name of Bruce Wayne’s company?",
                options: ["Wayne Enterprises", "Wayne Industries", "Gotham Industries", "Wayne Corp"],
                answer: 0
            },
            {
                question: "Who played Harvey Dent in The Dark Knight?",
                options: ["Aaron Eckhart", "Christian Bale", "Gary Oldman", "Joseph Gordon-Levitt"],
                answer: 0
            },
            {
                question: "Which city is the Dark Knight trilogy set in?",
                options: ["Metropolis", "Gotham", "Star City", "Central City"],
                answer: 1
            }
        ]
    }
};

let currentQuiz = [];
let currentQuestionIndex = 0;

function startQuiz(quizKey) {
    // Hide the images when a quiz starts
    document.getElementById("quiz-images").classList.add("hidden");

    const quiz = quizzes[quizKey];
    if (!quiz) return;

    document.getElementById("quizTitle").textContent = quiz.title;
    document.getElementById("quizContainer").style.display = "block";

    currentQuiz = quiz.questions;
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById("quizQuestion").textContent = questionData.question;

    const optionsDiv = document.getElementById("quizOptions");
    optionsDiv.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "btn btn-outline-secondary me-2 mb-2";
        btn.onclick = () => {
            if (index === questionData.answer) {
                btn.classList.remove("btn-outline-secondary");
                btn.classList.add("btn-success");
            } else {
                btn.classList.remove("btn-outline-secondary");
                btn.classList.add("btn-danger");
            }
            setTimeout(nextQuestion, 800);
        };
        optionsDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quizContainer").innerHTML = "<h2>Quiz Over! Thanks for playing!</h2>";
    // Show the images again when quiz ends
    document.getElementById("quiz-images").classList.remove("hidden");
}
