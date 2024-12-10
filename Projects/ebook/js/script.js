// window.onload = function () {
//     function startCountdown(id, targetNumber) {
//         let currentNumber = 0;
//         const element = document.getElementById(id);

//         const interval = setInterval(() => {
//             if (currentNumber < targetNumber) {
//                 currentNumber++;
//                 element.textContent = currentNumber;
//             } else {
//                 clearInterval(interval);
//             }
//         }, 0.5);
//     }

//     startCountdown('countdown-1', 3);
//     startCountdown('countdown-2', 170000);
//     startCountdown('countdown-3', 86);
//     startCountdown('countdown-4', 700);
// };


window.onload = function () {
    document.querySelectorAll('.counter-target').forEach(element => {
        let currentNumber = element.innerHTML;
        const targetNumber = element.getAttribute('data-target');
        const speed = element.getAttribute('data-speed') || 0.5;
        const interval = setInterval(() => {
            if (currentNumber < targetNumber) {
                currentNumber++;
                element.textContent = currentNumber;
            } else {
                clearInterval(interval);
            }
        }, speed);
    });
};


window.onscroll = function () {
    let scrollToTopBtn = document.getElementById("scrollToTop");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("visible");

    } else {
        scrollToTopBtn.classList.remove("visible");
    }
};

document.getElementById("scrollToTop").addEventListener("click", function () {
    document.getElementById("top-view").scrollIntoView({
        behavior: "smooth"
    });
});


const submitButton = document.getElementById('submit-btn');
const emailInput = document.getElementById('email-input');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    console.log('Email entered:', email);
    emailInput.value = "";
});