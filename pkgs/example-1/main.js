const { getThemeDirs, getModeThemeDirs, formatList, getMonacoEditorHTML } = require('./utils.js');

await loadUI('./index.html', ["xD=lol"]);

await setUI(`
  <div>
    <h2>Themes</h2>
    <p>${formatList(getThemeDirs())}</p>
    <button onclick="submit()">Show Modes</button>
  </div>
`);

await setUI(`
  <div>
    <h2>Mode Themes</h2>
    <p>${formatList(getModeThemeDirs())}</p>
    <img src="${path('image.jpg')}" alt="Java" width="100" height="100">
  </div>          
`); // Use path() to get the image URL. The image is in the UI folder.

