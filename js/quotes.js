const quotes = [
    {
        quote: "The important thing was to love rather than to be loved.",
        author: "- William Somerset Maugham"
    },
    {
        quote: "We can only learn to love by loving.",
        author: "- Iris Murdoch"
    },
    {
        quote: "Love is the big booming beat which covers up the noise of hate.",
        author: "- Margaret Cho"
    },
    {
        quote: "Immature love says, I love you because I need you, mature love says, I need you because I love you.",
        author: "- Sir Winston Churchill"
    },
    {
        quote: "Dream as if you'll live forever. Live as if you'll die today.",
        author: "- James Dean"
    },
    {
        quote: "A great secret of success is to go through life as a man who never gets used up.",
        author: "- Albert Schweitzer"
    },
    {
        quote: "God doesn't require us to succeed; he only requires that you try.",
        author: "- Mother Teresa"
    },
    {
        quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author: "- Thomas A. Edison"
    },
    {
        quote: "You make me want to be a better man.",
        author: "- in As good as it gets"
    },
    {
        quote: "I'm not a smart man, but I know what love is.",
        author: "- in Forrest Gump"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;