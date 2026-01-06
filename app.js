// Simulated login using localStorage
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        localStorage.setItem('username', username);
        alert(`Welcome, ${username}! Redirecting to Dashboard...`);
        window.location.href = 'dashboard.html';
    });
}

// Logout button
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });
}

// Text Case Converter
function convertText() {
    const text = document.getElementById('textInput').value;
    const type = document.getElementById('caseSelect').value;
    let result = '';
    if(type==='uppercase') result = text.toUpperCase();
    else if(type==='lowercase') result = text.toLowerCase();
    else if(type==='titlecase') result = text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
    document.getElementById('textResult').innerText = result;
}

// Word / Character Counter
function countText() {
    const text = document.getElementById('countInput').value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = text.length;
    document.getElementById('wordCount').innerText = words;
    document.getElementById('charCount').innerText = chars;
}

// Random Password Generator
function generatePassword() {
    const length = parseInt(document.getElementById('passLength').value) || 8;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let pass = '';
    for(let i=0; i<length; i++) pass += chars.charAt(Math.floor(Math.random()*chars.length));
    document.getElementById('passwordOutput').innerText = pass;
}

// QR Code Generator
function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrContainer = document.getElementById('qrResult');
    qrContainer.innerHTML = '';
    if(!qrText) return;
    const qr = new QRious({
        element: document.createElement('canvas'),
        value: qrText,
        size: 150
    });
    qrContainer.appendChild(qr.element);
}
