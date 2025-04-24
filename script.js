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
    },
    marvelrivals: {
        title: "Marvel Rivals Quiz",
        questions: [
            {
                question: "which of the following characters is not a part of the original roster?",
                options: ["Iron Man", "The Thing", "Spider-Man", "Star-Lord"],
                answer: 1
            },
            {
                question: "Which character is not a support?",
                options: ["Cloak & Dagger", "Adam Warlock", "Captain America", "Mantis"],
                answer: 2
            },
            {
                question: "what is the least skillful dps character in the game",
                options: ["All of the above", "Magnito's daughter", "Scarlet witch", "Wanda"],
                answer: 0
            },
            {
                question: "which of these is not a real map",
                options: ["Ego the living planet", "Asgard", "New York", "Wakanda"],
                answer: 0
            },
            {
                question: "how many players are on each team",
                options: ["3", "17", "6", "493"],
                answer: 2
            }
        ]
    },
    rdr2: {
        title: "Red Dead Redemption 2 Quiz",
        questions: [
            {
                question: "What is the name of the main protagonist in Red Dead Redemption 2?",
                options: ["John Marston", "Arthur Morgan", "Dutch van der Linde", "Sadie Adler"],
                answer: 1
            },
            {
                question: "Which gang is Arthur Morgan a part of?",
                options: ["The Van der Linde Gang", "The Pinkertons", "The O'Driscoll Gang", "The Murfree Brood"],
                answer: 0
            },
            {
                question: "what is the main mount of Aruthur Morgan",
                options: ["Horse", "Frank", "Aligator", "Tumbleweed"],
                answer: 0
            },
            {
                question: "what is arthur morgan",
                options: ["Spaceman", "Knight", "Business man", "Cowboy"],
                answer: 3
            },
            {
                question: "What year is Red Dead Redemption 2 set in?",
                options: ["1899", "1905", "1911", "1875"],
                answer: 0
            }
        ]
    },
    ssbu: {
        title: "Super Smash Bros Ultimate Quiz",
        questions: [
            {
                question: "Which character is the face of the Super Smash Bros franchise?",
                options: ["Mario", "Link", "Pikachu", "Donkey Kong"],
                answer: 0
            },
            {
                question: "Which new character was added to Super Smash Bros Ultimate as part of the DLC?",
                options: ["steve", "Waluigi", "Sonic", "Luigi"],
                answer: 0
            },
            {
                question: "which of these is a heavy character",
                options: ["yoshi", "bowser", "pacman", "peach"],
                answer: 1
            },
            {
                question: "How many characters are in the base roster of Super Smash Bros Ultimate?",
                options: ["50", "70", "90", "80"],
                answer: 2
            },
            {
                question: "What is the name of the mode where players fight against waves of enemies in Super Smash Bros Ultimate?",
                options: ["Adventure Mode", "Classic Mode", "Spirits Mode", "All-Star Mode"],
                answer: 1
            }
        ]
    }, 
   
   
 

};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0; // Keep track of correct answers

function startQuiz(quizKey) {
    // Hide the images when a quiz starts
    document.getElementById("quiz-images").classList.add("hidden");

    const quiz = quizzes[quizKey];
    if (!quiz) return;

    // Clear previous text before starting new quiz
    document.getElementById("quizContainer").innerHTML = `
        <h2 id="quizTitle"></h2>
        <div id="quizQuestion"></div>
        <div id="quizOptions"></div>
    `;

    document.getElementById("quizTitle").textContent = quiz.title;
    document.getElementById("quizContainer").style.display = "block";

    currentQuiz = quiz.questions;
    currentQuestionIndex = 0;
    score = 0; // Reset score
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
                score++; // Increase score if correct
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
    document.getElementById("quizContainer").innerHTML = `
        <h2>Quiz Over! Thanks for playing!</h2>
        <p>You scored ${score} out of ${currentQuiz.length}!</p>
    `;
    // Show the images again when quiz ends
    document.getElementById("quiz-images").classList.remove("hidden");
}
