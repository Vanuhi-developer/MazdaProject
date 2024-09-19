    const chatInput = document.getElementById('chat-input');
    const chatContent = document.getElementById('chat-content');

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            
            const messageContent = `
                <div class="chat-message-avatar" style="background-image: url('path/to/user-avatar.png');"></div>
                <div class="chat-message-content">
                    <p>${messageText}</p>
                </div>
            `;
            messageElement.innerHTML = messageContent;
            
            chatContent.appendChild(messageElement);
            
            chatInput.value = '';
            
            chatContent.scrollTop = chatContent.scrollHeight;

            setTimeout(simulateBotResponse, 1000, messageText);
        }
    }

    function simulateBotResponse(userMessage) {
        const botMessage = "Thank you for your message! We will get back to you shortly.";

        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('chat-message');
        
        const botMessageContent = `
            <div class="chat-message-avatar" style="background-image: url('path/to/bot-avatar.png');"></div>
            <div class="chat-message-content">
                <strong>Autohaus Lessingstraße</strong>
                <p>${botMessage}</p>
            </div>
        `;
        botMessageElement.innerHTML = botMessageContent;
        
        chatContent.appendChild(botMessageElement);
        
        chatContent.scrollTop = chatContent.scrollHeight;
    }


function toggleChat() {
    console.log('toggleChat function called'); 
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        chatContainer.classList.toggle('hidden');
        console.log('Chat container toggled'); 
    } else {
        console.error('Chat container not found'); 
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const htmlEl = `
    <div>
        <h2>WIR VERWENDEN COOKIES</h2>
        <p>Einige von diesen sind notwendig, während andere uns helfen, diese Website und Ihr Website Erlebnis zu verbessern. Mit Klick auf „Akzeptieren“ stimmen Sie zur Nutzung aller Cookies zu. Mit Klick auf „Nur notwendige Cookies“ werden nur die für die Website Besuch nötigen Cookies genutzt, was sich ggf. auf die Qualität auswirken kann.</p>
        <ul>
            <li>Notwendig</li>
            <li>Statistik</li>
            <li>Komfort</li>
            <li>Marketing</li>
        </ul>
        <div class="cookie-l">
            <a href="#" class="cookie-links">DATENSCHUTZERKLARUNG</a>
            <a href="#" class="cookie-links second-link">IMPRESSUM</a>
        </div>
    </div>
    <div class="cookie">
        <button class="cookie-button">AKZEPTIEREN</button>
        <div><a href="#" class="cookie-links">NUR NOTWENDIGE COOKIES AKZEPTIEREN</a></div>
    </div>
`;

function showCookieConsent() {
    const cookieName = "pageViisiteed";
    const visited = getCookie(cookieName);
    console.log(visited);

    if (!visited) {
        const el = document.createElement("div");
        el.classList.add("cookie-consent");
        el.innerHTML = htmlEl;
        document.body.appendChild(el);
        document.body.style.overflow = "hidden";

        const cookieButton = el.querySelector(".cookie-button");
        cookieButton.addEventListener("click", () => {
            setCookie(cookieName, new Date().toISOString(), 365 * 10);
            console.log("First visit or cookie consent given. Setting cookie for 10 yearsss.");
            el.style.display = "none";
            document.body.style.overflow = ""; 
        });
    } else {
        console.log("No new cookie");
    }
}

window.onload = showCookieConsent;
