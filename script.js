let heartTaps = 0;
let loveShownToday = false;
let todaysAffirmation = "";

async function loadAffirmation() {

    const response = await fetch("affirmations.json");
    const affirmations = await response.json();

    function getAffirmationIndex() {

        const now = new Date();

        const day =
            now.getFullYear() * 1000 +
            now.getMonth() * 100 +
            now.getDate();

        return day % affirmations.length;

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

            greeting = "Good Night";

        }

        document.getElementById("greeting").textContent = greeting;

        document.getElementById("today").textContent =
            now.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric"
            });

    }

    updateGreeting();

const today = affirmations[getAffirmationIndex()];
todaysAffirmation = today.text;

document.getElementById("focus").textContent =
    today.category;

document.getElementById("affirmation-text").textContent =
    today.text;

}

loadAffirmation();

const heart = document.querySelector(".heart-icon");

heart.addEventListener("click", () => {

    if (loveShownToday) return;

    heartTaps++;

    if (heartTaps < 7) return;

    loveShownToday = true;

    const affirmation =
        document.getElementById("affirmation-text");

    affirmation.style.opacity = 0;

    setTimeout(() => {

        affirmation.innerHTML =
            "I love you. ❤️<br><span style='font-size:.9rem;'>— Adam</span>";

        affirmation.style.opacity = 1;

    }, 250);

    setTimeout(() => {

        affirmation.style.opacity = 0;

    }, 4750);

    setTimeout(() => {

        affirmation.innerText = todaysAffirmation;

        affirmation.style.opacity = 1;

    }, 5000);

});
