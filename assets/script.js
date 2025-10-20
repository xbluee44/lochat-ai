function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chatBox = document.getElementById("chat-box");
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.textContent = msg;
  chatBox.appendChild(userDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulasi respon AI
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";
    botDiv.textContent = "LochatAi: " + generateResponse(msg);
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

function generateResponse(input) {
  if (input.toLowerCase().includes("halo")) return "Hai juga! Senang ngobrol denganmu 😊";
  if (input.toLowerCase().includes("siapa kamu")) return "Aku LochatAi, asisten cerdas buatan Arkam!";
  if (input.toLowerCase().includes("terima kasih")) return "Sama-sama! Ada lagi yang bisa aku bantu?";
  return "Menarik! Bisa ceritakan lebih lanjut?";
}

function loginUser(event) {
  event.preventDefault();
  window.location.href = "chat.html";
  return false;
}
