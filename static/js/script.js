function runCode() {
    const code = document.getElementById('code').value;
    const output = document.getElementById('output');
    output.srcdoc = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>body { font-family: Arial; margin: 20px; }</style>
        </head>
        <body>
            <h3>Output:</h3>
            <pre id="result">${escapeHtml(code)}</pre>
            <script>
                try {
                    const result = eval('${escapeHtml(code)}');
                    document.getElementById('result').textContent = 'Result: ' + JSON.stringify(result, null, 2);
                } catch (e) {
                    document.getElementById('result').textContent = 'Error: ' + e.message;
                }
            </script>
        </body>
        </html>
    `;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Auto-resize textarea
document.getElementById('code').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

// Dark mode toggle for playground
let darkMode = true;
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.style.background = darkMode ? 'var(--bg-gradient)' : '#f8fafc';
    document.getElementById('code').style.background = darkMode ? 'var(--glass-bg)' : '#ffffff';
    document.getElementById('code').style.color = darkMode ? 'var(--text-primary)' : '#1e293b';
}


