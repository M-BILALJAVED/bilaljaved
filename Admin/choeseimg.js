document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('downloadBtn').addEventListener('click', createHtmlFile);
  });
  
  function createHtmlFile() {
    // Get the file input
    const picInput = document.getElementById('picc');
    const picFile = picInput.files[0]; // Get the first file (if any)
  
    // Get the content from the input fields
    const TITLE = document.getElementById('TITLE').value;
    const firstParagraph = document.getElementById('firstParagraph').value;
    const SecondParagraph = document.getElementById('SecondParagraph').value;
    const FANCYParagraph = document.getElementById('FANCYParagraph').value;
  
    // Check if the required inputs are empty
    if (!TITLE || !firstParagraph || !SecondParagraph || !FANCYParagraph) {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Generate the HTML template
    let picHtml = '';
    if (picFile) {
      // Create a URL for the file
      const picUrl = URL.createObjectURL(picFile);
      picHtml = `<img src="${picUrl}" alt="Uploaded Image" style="max-width: 100%; height: auto;">`;
    }
  
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${TITLE}</title>
      </head>
      <body>
        ${picHtml}
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
    link.download = 'yourFile.html';
    link.click();
  
    // Revoke the object URL to free memory
    URL.revokeObjectURL(link.href);
  }
  