const length = Number(prompt("Enter rectangle length:"));
const width = Number(prompt("Enter rectangle width:"));
const age = Number(prompt("Enter your age:"));

function rectangleArea(length, width) {
    return length * width;
}

function canVote(age) {
    return age >= 18 ? "You can vote." : "You cannot vote.";
}

const area = rectangleArea(length, width);

const output = `
Rectangle length: ${length}
Rectangle width: ${width}
Rectangle area: ${area}
${canVote(age)}
`;

console.log(output);
alert(output);



const userName = prompt("Please enter your name:");

document.getElementById("welcomeMessage").textContent =
    `Welcome, ${userName}!`;