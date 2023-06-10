const quotes = [
{
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
},
{
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
},
{
    quote: "Fall 7 times, stand up 8.",
    author: "Anonymous",
},
{
    quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
},
{
    quote: "The merit of an action lies in finishing it to the end.",
    author: "Genghis Khan",
},
{
    quote: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton", 
},
{
    quote: "All great changes are preceded by chaos.",
    author: "Deepack Chopra",
},
{   quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
},
{   quote: "The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
    author: "Lion King"
},
{   quote: "The most important thing in life is to learn how to give out love, and to let it come in.",
    author: "Morrie Schwartz"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 명언 6가지 를  math 함수를 사용함. 근데 10개 명언있을때만 가능한 하드코딩이다.
// console.log(quotes[Math.floor(Math.random() * 10)]);

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;