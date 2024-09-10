document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the id from localStorage, default to 2 if not set
    id = parseInt(localStorage.getItem('id')) || 2;

    // Set up the event listener for the button
    const button = document.getElementById('downloadBtn');
    button.addEventListener('click', createHtmlFile);
});

function createHtmlFile() {
    // Get the content from the input fields
    const pic = document.getElementById('picc').value; // This won't be used as it's a file input
    const TITLE = document.getElementById('TITLE').value;
    const firstParagraph = document.getElementById('firstParagraph').value;
    const SecondParagraph = document.getElementById('SecondParagraph').value;
    const FANCYParagraph = document.getElementById('FANCYParagraph').value;

    // Check if the required inputs are empty
    if (!TITLE || !firstParagraph || !SecondParagraph || !FANCYParagraph) {
        alert('Please fill in all the fields.');
        return;
    }

    // Template for the HTML content
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${TITLE}</title>
      </head>
      <body>
      <img src="${pic}" alt="Uploaded Image" style="max-width: 100%; height: auto;">
        <h1>${TITLE}</h1>
        <p>${firstParagraph}</p>
        <p>${SecondParagraph}</p>
        <p>${FANCYParagraph}</p>
      </body>
      </html>
    `;

    // Create a Blob object with the HTML content
    const blob = new Blob([htmlTemplate], { type: 'text/html' });

    // Create a download link and simulate a click
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `blog${id}.html`;
    link.click();
    // Increment id for the next file
    id++;

    // Store the updated id in localStorage
    localStorage.setItem('id', id);
    // clear

    // Revoke the object URL to free memory
    URL.revokeObjectURL(link.href);
    // clear 
    document.getElementById('picc').value = '';
    document.getElementById('TITLE').value = '';
    document.getElementById('firstParagraph').value = '';
    document.getElementById('SecondParagraph').value = '';
    document.getElementById('FANCYParagraph').value = '';
}