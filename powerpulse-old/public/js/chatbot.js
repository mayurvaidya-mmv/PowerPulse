document.addEventListener("DOMContentLoaded", () => {
  const widgetHtml = `
    <div class="chatbot-widget">
      <div class="chatbot-panel" id="chatbotPanel">
        <div class="chatbot-header">
          <h3><i class="fas fa-robot"></i> AI Analyst (Haiku)</h3>
          <button class="chatbot-close" id="chatbotClose"><i class="fas fa-times"></i></button>
        </div>
        <div class="chatbot-messages" id="chatbotMessages">
          <div class="chat-message bot">
            Hello! I'm your AI assistant running on AWS Bedrock. I've analyzed your real-time dashboard telemetry. How can I help?
          </div>
        </div>
        <div class="chatbot-input-area">
          <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ask about reports, anomalies..." autocomplete="off" />
          <button class="chatbot-send" id="chatbotSend"><i class="fas fa-paper-plane"></i></button>
        </div>
      </div>
      <button class="chatbot-btn" id="chatbotToggle" title="Ask AI Analyst">
        <i class="fas fa-comment-dots"></i>
      </button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHtml);

  const toggleBtn = document.getElementById("chatbotToggle");
  const closeBtn = document.getElementById("chatbotClose");
  const panel = document.getElementById("chatbotPanel");
  const input = document.getElementById("chatbotInput");
  const sendBtn = document.getElementById("chatbotSend");
  const messagesContainer = document.getElementById("chatbotMessages");

  let chatHistory = [];

  toggleBtn.addEventListener("click", () => {
    panel.style.display = panel.style.display === "flex" ? "none" : "flex";
    if (panel.style.display === "flex") input.focus();
  });

  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
  });

  function parseMarkdown(text) {
    let html = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(/`(.*?)`/g, "<code>$1</code>");
    html = html.replace(/\n/g, "<br>");
    return html;
  }

  function appendMessage(role, content) {
    const div = document.createElement("div");
    div.className = `chat-message ${role}`;
    if (role === 'bot') {
      div.innerHTML = parseMarkdown(content);
    } else {
      div.textContent = content;
    }
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "chatbot-typing";
    div.id = "chatbotTypingIndicators";
    div.innerHTML = `AI is processing<span></span><span></span><span></span>`;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById("chatbotTypingIndicators");
    if (el) el.remove();
  }

  async function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    appendMessage('user', text);
    input.value = '';
    
    showTyping();

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: chatHistory })
      });

      if (!resp.ok) {
        throw new Error("Failed to get response");
      }

      const data = await resp.json();
      hideTyping();
      
      if (data.updatedHistory) {
         chatHistory = data.updatedHistory;
      }

      appendMessage('bot', data.text || "Sorry, I received an empty response.");
    } catch (err) {
      console.error(err);
      hideTyping();
      appendMessage('bot', "⚠️ **Error:** Could not reach the AI service.");
    }
  }

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });
});
