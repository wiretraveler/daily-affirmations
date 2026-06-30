let todaysAffirmation = "";

const loveNotes = [
    `I love you.`,
    `I'm so proud of you.`,
    `You make life brighter.`,
    `You are my favorite person.`,
    `You make my heart happy.`,
    `Just thinking about you.`,
    "🥒",
    `Porter loves you.`,
    `I'm always on your side.`,
    `You mean the world to me.`,
    `Hey, beautiful.`,
    `I still have a crush on you.`,
    "Hope you're having a good day.",
    "This is your reminder to smile. 😊",
    "That ass!",
    `You've got this.`,
    `Miss you.`,
    `You've been on my mind today.`,
    `I can't wait to see you.`,
];

async function loadAffirmation() {

    const response = await fetch("affirmations.json");
    const affirmations = await response.json();

    const specialResponse = await fetch("specialDates.json");
    const specialDates = await specialResponse.json();

    const now = new Date();

    const dateKey =
    `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    if (specialDates[dateKey]) {

        todaysAffirmation = specialDates[dateKey].text;

        updateGreeting();

        document.getElementById("focus").textContent =
            specialDates[dateKey].category;

        document.getElementById("affirmation-text").textContent =
            specialDates[dateKey].text;

        return;
    }

    const day =
        now.getFullYear() * 1000 +
        now.getMonth() * 100 +
        now.getDate();

    const today = affirmations[day % affirmations.length];

    todaysAffirmation = today.text;

    updateGreeting();

    document.getElementById("focus").textContent = today.category;
    document.getElementById("affirmation-text").textContent = today.text;

}

function updateGreeting() {

    const now = new Date();
    const hour = now.getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {

        greeting = "Good Morning";

    } else if (hour >= 12 && hour < 17) {

        greeting = "Good Afternoon";

    } else if (hour >= 17 && hour < 21) {

        greeting = "Good Evening";

    } else {

        const nightGreetings = [
            "Sweet dreams ❤️",
            "Good Night ❤️",
            "Sleep well ❤️"
        ];

        greeting =
            nightGreetings[Math.floor(Math.random() * nightGreetings.length)];

    }

    document.getElementById("greeting").textContent = greeting;

    document.getElementById("today").textContent =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
        });

}

function setupSecretLoveNote() {

    const card = document.getElementById("fact-container");
    const affirmation = document.getElementById("affirmation-text");
    const header = document.getElementById("header-content");

    let tapCount = 0;
    let tapTimer;

    card.addEventListener("click", () => {

        tapCount++;

        clearTimeout(tapTimer);

        tapTimer = setTimeout(() => {

            tapCount = 0;

        }, 5000);

        if (tapCount < 5) return;

        tapCount = 0;

        const note =
            loveNotes[Math.floor(Math.random() * loveNotes.length)];

        header.style.display = "none";
        affirmation.style.opacity = 0;

        setTimeout(() => {

            affirmation.textContent = note;

            affirmation.style.opacity = 1;

        }, 250);

        setTimeout(() => {

            affirmation.style.opacity = 0;

        }, 4750);

setTimeout(() => {

    affirmation.textContent = todaysAffirmation;

    affirmation.style.opacity = 1;

    header.style.display = "";

}, 5000);

    });

}

loadAffirmation();
setupSecretLoveNote();
