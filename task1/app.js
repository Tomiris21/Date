document.querySelector("#button").addEventListener("click" , calculate);
function calculate() {
    const birthdayInput = document.getElementById("input");
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    if (!birthdayInput.value) {
        error.style.display = "block";
        result.textContent = "";
        return;
    }
    error.style.display = "none"
    const selectDate = new Date(birthdayInput.value)

    const today = new Date();
    const currentYear = today.getFullYear()
    const birthdayThisYear = new Date(currentYear,
        selectDate.getMonth(),
        selectDate.getDate()
    ) 

    const differenceInTime = birthdayThisYear - today;

    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)
);

    result.textContent = `До вашего дня рождения осталось ${differenceInDays} ${dayWord(differenceInDays)}`
}

document.getElementById('input').addEventListener("input", () => {
    document.getElementById("error").style.display = "none"; })

function dayWord(number) {
    const lastDigits = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastDigits <= 14) {
        return "дней";
    }

    if (lastDigits === 1){
        return "день"
    }
    if (lastDigits >=2 && lastDigits <= 4) {
        return "дня";
    }
        return "дней"
    }
