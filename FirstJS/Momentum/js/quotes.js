const quotes = [
    {quote: "잘했고, 잘하고있고, 잘할거야", author: "정영욱",},
    {quote: "언제나 당신을 기억하고 있습니다", author: "아란",},
    {quote: "나아감으로써 힘을 얻는다", author: "메르세데스",},
    {quote: "큰 힘에는 큰 책임이 따른다", author: "은월",},
    {quote: "삶이 있으면, 희망이 있다", author: "에반",},
    {quote: "절대 절망하지 말아라", author: "팬텀",},
    {quote: "운명을 만드는 사람은, 바로 자신이다", author: "루미너스",},
    {quote: "불편해? 불편하면 자세를 고쳐앉아", author: "랄로",},
    {quote: "인생은 계획대로 되지 않더라", author: "Deborah copaken",},
    {quote: "내 실수로 생긴 흉터까지 다 내 별자린데", author: "지민",},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
