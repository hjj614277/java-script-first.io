const quotes = [
    {
        quote: "Imagination is more important than knowledge.",
        author: "- Albert Einstein",
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "- Antoine de Saint-Exupery",
    },
    {
        quote: "A wise man will make more opportunities than he finds.",
        author: "- Sir Francis Bacon",
    },
    {
        quote: "Do not turn back when you are just at the goal.5",
        author: "- Publilius Syrus",
    },
    {
        quote: "Energy and persistence conquer all things.",
        author: "- Benjamin Franklin",
    },
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "- Benjamin Franklin",
    },
    {
        quote: "Everything comes to him who hustles while he waits.",
        author: "- Thomas A. Edison",
    },
    {
        quote: "Everything in your world is created by what you think.",
        author: "- Oprah Winfrey",
    },
    {
        quote: "Great hopes make great man.",
        author: "- Thomas Fuller",
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "- Washington Irving",
    },
    {
        quote: "He who has never hoped can never despair.",
        author: "- George Bernard Shaw",
    },
    {
        quote: "I am not afraid of storms for I am learning how to sail my ship.",
        author: "- Hellen Keller",
    },
    {
        quote: "I respect faith, but doubt is what gets you an education.",
        author: "- Wilson Mizner",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;