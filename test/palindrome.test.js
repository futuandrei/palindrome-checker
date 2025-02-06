const { expect } = require('chai');
const { JSDOM } = require('jsdom');

describe('Palindrome Checker - Multiple Test Cases', () => {
    let dom;
    let window;
    let document;

    beforeEach(() => {
        // Create a new JSDOM instance
        dom = new JSDOM(`<!DOCTYPE html><html><body>
            <input id="input" />
            <button id="button"></button>
            <div id="output"></div>
        </body></html>`, { runScripts: "dangerously" });

        window = dom.window;
        document = window.document;

        // Make document globally available
        global.window = window;
        global.document = document;

        // Require script.js to attach event listeners
        delete require.cache[require.resolve('../script.js')]; // Ensure fresh import
        require('../script.js');
    });

    const testCases = [
        { input: "Madam, in Eden, I'm Adam", expected: "mada mi nede ni madam" },
        { input: "A man, a plan, a canal, Panama", expected: "amanap lanac a nalp a nam a" }, // Your script reverses the string
        { input: "No lemon, no melon", expected: "nolem on nomel on" }
    ];

    testCases.forEach(({ input, expected }) => {
        it(`should correctly check palindrome for input: "${input}"`, function (done) {
            // Ensure document is properly initialized
            if (!document) {
                return done(new Error("document is not initialized"));
            }

            // Select elements
            const textInput = document.getElementById('input');
            const button = document.getElementById('button');
            const outputDiv = document.getElementById('output');

            // Ensure elements exist
            if (!textInput || !button || !outputDiv) {
                return done(new Error("Missing DOM elements"));
            }

            // Set input value and trigger click event
            textInput.value = input;
            button.click();

            // Wait for output update
            setTimeout(() => {
                expect(outputDiv.innerHTML).to.equal(expected);
                done(); // Signal test completion
            }, 10);
        });
    });
});