document.getElementById('userInput').focus();

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Add event listener for Enter key
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    submitGuess();
  }
});

function submitGuess() {
  const userInput = parseInt(document.getElementById("userInput").value);
  
  // Clear the input field
  document.getElementById("userInput").value = "";
  
  // Check if the guess is correct
  if (userInput === randomNumber) {
    addMessage("Congratulations! You guessed the correct number (" + userInput + ") in " + attempts + " attempts.");
    document.getElementById("userInput").disabled = true;
    return;
  }
  
  attempts++;
  
  // Provide hints based on the user's guess
  if (userInput < randomNumber) {
    if (randomNumber - userInput <= 10) {
      addMessage("Somewhere above the range. Try a slightly higher number.");
    } else {
      addMessage("Too low. Try a higher number.");
    }
  } else {
    if (userInput - randomNumber <= 10) {
      addMessage("Somewhere below the range. Try a slightly lower number.");
    } else {
      addMessage("Too high. Try a lower number.");
    }
  }
  
  // Display the user's guess
  addMessage("You entered: " + userInput);
}

function addMessage(message) {
  const chatbox = document.getElementById("chatbox");
  const newMessage = document.createElement("p");
  newMessage.innerText = message;
  chatbox.appendChild(newMessage);
  chatbox.scrollTop = chatbox.scrollHeight;
}
