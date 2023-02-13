const newJoke = document.getElementById('joke');
const btn = document.getElementById('btn');
const jokes = [
    {number: 0, joke: "If anything is worth doing, it is worth doing badly"},
    {number: 1, joke: "The six stages of debugging: 1. That can't happen. 2. That doesn't happen on my machine. 3. That shouldn't happen. 4. Why does that happen? 5. Oh, I see. 6. How did that ever work?"},
    {number: 2, joke: "UDP is better in the COVID era since it avoids unnecessary handshakes."},
    {number: 3, joke: "Judge: I sentence you to the maximum punishment... Me (thinking): Please be death, please be death... Judge: Learn Java! Me: Damn."},
    {number: 4, joke: "I have these weird muscle spasms in my gluteus maximus. I figured out from my doctor that everything was alright: He said Weird flex, butt okay."},
    {number: 5, joke: "I was going to tell a dead baby joke. But I decided to abort."},
    {number: 6, joke:"Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone."},
    {number: 7,joke: "Hey girl are you a school? Because I want to shoot some kids up inside of you."},
    {number: 8, joke: "Yo mama is so old, she knew Burger King while he was still a prince."},
    {number: 9, joke: "The six stages of debugging: 1. That can't happen. 2. That doesn't happen on my machine. 3. That shouldn't happen. 4. Why does that happen? 5. Oh, I see. 6. How did that ever work?"},
    {number: 10, joke: "How do you tell HTML from HTML5? - Try it out in Internet Explorer - Did it work? - No? - It's HTML5."},
    {number: 11, joke: "A guy walks into a bar and asks for 1.4 root beers. The bartender says I'll have to charge you extra, thats a root beer float. The guy says In that case, better make it a double."},
    {number: 12, joke: "A  ddd guy walks into a bar and asks for 1.4 root beers. The bartender says I'll have to charge you extra, thats a root beer float. The guy says In that case, better make it a double."},
];
function GetJoke(){
    let randomNumber = Math.floor(Math.random()*(jokes.length));
    newJoke.classList.add("fade");
    newJoke.textContent = jokes[randomNumber].joke;
}
btn.addEventListener('click',GetJoke);