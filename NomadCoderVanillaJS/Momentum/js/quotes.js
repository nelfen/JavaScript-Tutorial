const quotes = [
    {quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "-Mark Twain-",},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
