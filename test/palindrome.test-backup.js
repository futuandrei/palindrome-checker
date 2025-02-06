const { expect } = require('chai');
const { JSDOM } = require('jsdom');

// Load script.js inside a simulated browser environment
before(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body>
        <input id="input" value="madam"/>
        <button id="button"></button>
        <div id="output"></div>
    </body></html>`, { runScripts: "dangerously" });

    global.window = dom.window;
    global.document = dom.window.document;
    require('../script.js'); // Import script.js
});

describe('Palindrome Checker', () => {
    it('should correctly check a palindrome', () => {
        const textInput = document.getElementById('input');
        textInput.value = "madam";

        const button = document.getElementById('button');
        button.click(); // Simulate button click

        const output = document.getElementById('output').innerHTML;
        expect(output).to.equal("madam"); // Expected output
    });
});