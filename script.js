const answersElement = document.querySelector('#answers');

const input = document.getElementById('question');

const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Sem dúvias!",
    "Pergunte novamente mais tarde.",
    "Tente novamente"
];

function askQuestion() {
    if (input.value == "") {
        alert("Digite sua pergunta!");
        return
    }
    const ask = "<div>" + input.value + "</div>";
    const totalAnswers = answers.length;
    const randomNumbers = Math.floor(Math.random() * totalAnswers);
    answersElement.innerHTML = ask + answers[randomNumbers];
    setTimeout(function() {
        answersElement.style.opacity = 0;}, 3000);
    onload = re
};

function reload() {
    document.location.reload(true);
}
