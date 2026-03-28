00:00 Intro

## [Passenger counter app](https://www.youtube.com/watch?v=jS4aFq5-91M&t=221s)

04:39 Setting up file
07:42 Create variable
12:27 Mathematical operations
16:16 Reassigning & incrementing
19:23 Adding button
21:41 onclick event listener
25:10 Using functions to write less code
28:48 First function
29:34 Function that logs sum
32:25 Function that increments
34:23 Increment on clicks
36:35 Display count
41:53 Document Object Model
43:47 Display count w/ innerText
44:30 Create save button
46:40 What is string?
48:16 First string variable
52:00 Log greeting to console
53:18 Strings vs. Numbers
Render welcome message
Improve message w/ string concatenation
Use plus equal for count
Create save feature
Debugging online

```
<body>
        <h1>People entered:</h1>
        <h2 id="count-el">0</h2>
        <button id="increment-btn" onclick="increment()">INCREMENT</button>
        <button id="save-btn" onclick="save()">SAVE</button>
        <p id="save-el">Previous entries: </p>
        <script src="index.js"></script>
</body>
```

```
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}
```

Set count to 0
Recap
Variables practice
Concatenate strings
Incrementing & decrementing
Strings & numbers
Rendering error message
Calculator challenge

## [Build Blackjack Game](https://www.youtube.com/watch?v=jS4aFq5-91M&t=5487s)

1:31:27 Build Blackjack game

1:32:27 Add firstCard, secondCard, & sum

1:33:23 If...else conditionals

1:39:08 if...else statement

1:42:05 if/else...if/else statement

1:45:28 if...else statement for our game

1:47:32 hasBlackJack variable

1:49:38 isAlive variable

1:51:27 Practice boolean conditions

1:54:55 Add message variable

1:58:20 Link stylesheet

2:00:56 Add basic styling

2:05:19 Make start button work

2:11:13 Display message

2:13:48 Display sum

2:19:36 Display cards

2:21:34 New card button

2:25:16 Add to sum when newCard is clicked

2:28:36 Rename startGame function

2:30:52 Solving our cards problem w/ array

2:34:12 Arrays intro

2:39:30 Array indexes

2:43:50 Arrays w/ multiple data types

2:46:12 Adding & removing items from arrays

2:50:35 Creating cards array

2:51:43 Push new card to array

2:53:05 Counting

2:57:10 Loops

3:00:37 For loops & arrays

3:04:23 First array-based for loop

3:05:55 For loops, arrays, & DOM

3:08:55 Use loop to render cards

3:11:16 Avoid hard-coding values

3:12:51 Returning values

3:17:54 Use function to set card values

3:21:05 Generating random numbers w/ Math.random()

3:25:24 Math.random() \* 6

3:27:11 Flooring number w/ Math.floor()

3:28:40 Create

3:30:23 Completing dice function

3:33:04 Make getRandomCard() work

3:36:00 getRandomNumber function

3:39:06 Assign values in startGame function

3:41:52 Card feature is broken

3:42:54 Logical AND operator

3:46:39 Logical operators

3:48:47 logical OR operator

3:51:52 Only trigger newCard() if you're allowed to

Object sneak peek
Objects
Create first object
Store player data
Methods on object

```
<body>
    <h1>Blackjack</h1>
    <p id="message-el">Want to play a round?</p>
    <p id="cards-el">Cards:</p>
    <p id="sum-el">Sum:</p>
    <button onclick="startGame()">START GAME</button>
    <button onclick="newCard()">NEW CARD</button>
    <p id="player-el"></p>
    <script src="index.js"></script>
  </body>
```

```
let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
```

Recap
Objects & functions
if else
Loops & arrays
push, pop, unshift, shift challenge
Logical operators
Rock papers scissors
Sorting fruits

## [Build Chrome Extension](https://www.youtube.com/watch?v=jS4aFq5-91M&t=16434s)

4:33:54 Build Chrome Extension
4:38:30 Add button & input tag
4:40:06 Style button & input tag
4:47:28 Make input button work w/ onclick
4:48:49 Refactor to addEventListener
4:51:11 addEventListener()
4:52:58 Refactoring
4:54:25 Create myLeads array & inputEl
4:56:49 Using let & const
5:00:11 Push to myLeads array
5:01:24 Push value from input field
5:03:56 Use for loop to log out leads
5:05:38 Create unordered list
5:07:39 Render leads in unordered list
5:11:22 How to render li elements w/ innerHTML
5:13:01 innerHTML
5:14:34 More innerHTML practice
5:16:26 Render li elements w/ innerHTML
5:17:37 Use createElement() & append() instead of innerHTML
5:21:16 Improving performance of our app
5:24:37 Create render function
5:26:40 Clear input field
5:28:47 Add a tag
5:35:53 Template strings
5:35:54 Write template string
5:36:28 Make template string more dynamic
5:37:12 Template strings on multiple lines
5:41:03 Refactor app to use template string
5:42:19 Style list
5:46:13 Preparing deployment

```
<body>
        <input type="text" id="input-el">
        <button id="input-btn">SAVE INPUT</button>
        <button id="tab-btn">SAVE TAB</button>
        <button id="delete-btn">DELETE ALL</button>
        <ul id="ul-el">
        </ul>
        <script src="index.js"></script>
    </body>
```

```
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
```

Deploying Chrome Extension
What is localStorage?
First localStorage
Storing arrays in localStorage
Save leads
Get leads
Truthy & falsy values
Guess expression: truthy or falsy?
Checking localStorage before rendering
Style delete button
Make delete button work
How function parameters can improve our code
Write function parameter
Functions w/ multiple params
Numbers as function params
Arguments vs Params
Arrays as params
Refactor renderLeads() to use parameter
Create tabBtn
Save tab url
Get current tab
Use Chrome API to get tab
Deploy final version
