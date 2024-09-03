import { handleSubmit } from '../client/js/formHandler.js';

// Mock the DOM elements
document.body.innerHTML = `
    <form id="urlForm">
        <input type="text" id="name" value="https://example.com">
        <button type="submit">Submit</button>
    </form>
`;

describe('Testing the submit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        const event = { preventDefault: jest.fn() }; // Mock the event object

        handleSubmit(event); // Call the function to test

        // Add your assertions here
        expect(event.preventDefault).toHaveBeenCalled(); // Check that preventDefault was called
        expect(console.log).toHaveBeenCalledWith("URL is valid:", "https://example.com");
    });
});
