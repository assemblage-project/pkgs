const { getThemeDirs, getModeThemeDirs, formatList } = require('./utils.js');
//const { formatList } = require('./helpers.js');

setUI(`
          <div>
            <h2>Themes</h2>
            <p>${formatList(getThemeDirs())}</p>
            <button onclick="submit()">Show Modes</button>
          </div>
        `);

await wait();

setUI(`
          <div>
            <h2>Mode Themes</h2>
            <p>${formatList(getModeThemeDirs())}</p>
          </div>
        `);