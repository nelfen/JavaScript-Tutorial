const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("please write a real positive number.");
} else if (age < 18) {
    console.log("you are kid.");
} else if (18 <= age && age < 65) {
    console.log("you are adult.");
} else {
    console.log("Congratulations!");
}