const inputMessage = document.querySelector("#text")
const sendButton = document.querySelector(".btn-enviar")
const chatMessages = document.querySelector(".chat-messages")

sendButton.addEventListener("click", sendMessage)

function sendMessage() {
  const message = inputMessage.value

  const containerMessage = document.createElement("div")
  containerMessage.classList.add("second-message-sent")

  const messageText = document.createElement("p")
  messageText.textContent = message

  containerMessage.appendChild(messageText)

  //creandotimestamp
  const timestamp = document.createElement("p")
  timestamp.classList.add("timestamp")
  timestamp.textContent = new Date().toLocaleTimeString()

  containerMessage.appendChild(timestamp)

  chatMessages.appendChild(containerMessage)

  inputMessage.value = ""

  //asincrono
  setTimeout(function () {
    const containerMessage = document.createElement("div")
    containerMessage.classList.add("third-message-received")

    const response = document.createElement("p")
    response.textContent = "Recibido! Gracias por tu mensaje."

    containerMessage.appendChild(response)
    chatMessages.appendChild(containerMessage)

  }, 5000);
}