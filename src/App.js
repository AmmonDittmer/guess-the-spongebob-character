import logo from './logo.svg';
import './App.css';
import './easy.js';
import easy from './easy.js';




function App() {
  function easy() {
      const element = document.querySelector('#difficultySelected')
      const text = `Difficulty Selected: Easy | Questions: 3 | Question Format: Multiple Choice`

      element.textContent = text
  }
  function medium() {
    const element = document.querySelector('#difficultySelected')
    const text = `Difficulty Selected: Medium | Questions: 10 | Question Format: Multiple Choice`

    element.textContent = text
}
function hard() {
  const element = document.querySelector('#difficultySelected')
  const text = `Difficulty Selected: Hard | Questions: 25 | Question Format: Type the Answer`

  element.textContent = text
}
function very() {
  const element = document.querySelector('#difficultySelected')
  const text = `Difficulty Selected: Very Hard | Questions: 50 | Question Format: Type the Answer`

  element.textContent = text
}
function impossible() {
  const element = document.querySelector('#difficultySelected')
  const text = `Difficulty Selected: IMPOSSIBLE | Questions: 100 | Question Format: Type the Answer`

  element.textContent = text
}

function start() {
  const text = document.querySelector('#difficultySelected')
  
  const easy = text.textContent.includes('Easy')
  const medium = text.textContent.includes('Medium')
  const hard = text.textContent.includes('25')
  const very = text.textContent.includes('Very')
  const impossible = text.textContent.includes('IMPOSSIBLE')
  
  if (easy) {
    window.location.href = 'easy.js';
  } else if (medium) {
    window.location.href = 'medium.js'
  } else if (hard) {
    window.location.href = 'http://localhost:3000/'
  } else if (very) {
    window.location.href = 'https://thebomb.com'
  } else if (impossible) {
    window.location.href = 'https://impossible.com'
  } else {
    text.textContent = 'Select a difficulty!'
  }
  

}
  return (
    <>
    <script defer type="text/javascript" src="./javascript.js"></script>
      <div class="main">
        <h1 id="title">Guess the Spongebob Character</h1>
        <p id="difficulty">Select Difficulty Level:</p>
        <div class="difficulties">
          <button onClick={easy} id="easy" class="difficulties2">Easy</button>
          <button onClick={medium} id="medium" class="difficulties2">Medium</button>
          <button onClick={hard} id="hard" class="difficulties2">Hard</button>
          <button onClick={very} id="very" class="difficulties2">Very Hard</button>
          <button onClick={impossible} id="impossible" class="difficulties2">IMPOSSIBLE</button>
          </div>
          <div id="difficultySelected"></div>
          <div id="startButton">
            <button onClick={start} id="start">Start Quiz!</button>
          </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <div id="info">
            
            <h3>How it works: question format</h3>
          </div>
          <div id="multiple">
              <p id="multipleText"><b>Multiple Choice:</b> Pick one of the 4 answers provided, then click 'Next'. At the end of the quiz, you'll see the score you got. Once you click next, you can't go back to any previous question.</p>
          </div>
          <div id="type">
              <p id="typeText"><b>Type the Answer:</b> Type in the text box the character name then click 'Submit'. If you get it right, you move on to the next question. If it's wrong, you'll get -1 point to your total score and you stay on the same question until you get it right.</p>
          </div>

      </div>

    </>

   
)

}


export default App;

