exports.getThemeDirs = () => ['dark', 'light'];
exports.getModeThemeDirs = () => ['editor', 'terminal'];
exports.formatList = (list) => list.join(', ');

function getMonacoEditorHTML() {
    return `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Monaco Editor Demo</title>
      <style>
          #container {
              width: 800px;
              height: 600px;
              border: 1px solid #ccc;
          }
      </style>
  </head>
  <body>
      <div id="container"></div>
      <button onclick="getCode()">Show Code</button>
      <pre id="output"></pre>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs/loader.min.js"></script>
      <script>
          require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});
          
          let editor;
          require(['vs/editor/editor.main'], function() {
              editor = monaco.editor.create(document.getElementById('container'), {
                  value: '// Write your code here\\nfunction hello() {\\n    console.log("Hello, Monaco!");\\n}',
                  language: 'javascript',
                  theme: 'vs-dark',
                  automaticLayout: true,
                  minimap: { enabled: true }
              });
          });
  
          function getCode() {
              const code = editor.getValue();
              document.getElementById('output').textContent = code;
          }
      </script>
  </body>
  </html>
  `;
}

exports.getMonacoEditorHTML = getMonacoEditorHTML;
