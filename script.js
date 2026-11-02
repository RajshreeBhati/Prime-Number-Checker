
let historyList = [];

function checkPrime() {

    let input = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (input.trim() === "" || !Number.isSafeInteger(Number(input))) {
        result.innerHTML = "Please enter a valid whole number!";
        result.className = "";
        return;
    }

    let num = Number(input);
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        result.innerHTML = "🎉 " + num + " is a PRIME number!";
        result.className = "prime";
    }
    else {
        result.innerHTML = "❌ " + num + " is NOT a PRIME number!";
        result.className = "not-prime";
    }

    historyList.unshift({
        number: num,
        type: isPrime ? "Prime" : "Not Prime"
    });

    displayHistory();
}

function displayHistory() {

    let history = document.getElementById("history");

    history.innerHTML = "";

    historyList.forEach(item => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${item.number}</span>
            <strong>${item.type}</strong>
        `;

        history.appendChild(li);
    });
}

function toggleHistory() {

    let section = document.getElementById("historySection");

    if (section.style.display === "none" ||
        section.style.display === "") {

        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
}

function clearInput() {

    document.getElementById("number").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
}

function clearHistory() {

    historyList = [];
    displayHistory();
}
