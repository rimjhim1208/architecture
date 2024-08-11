// Handle form submission
document.getElementById('form').onsubmit = (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    const authorsInput = document.getElementById('authors');
    const publisherInput = document.getElementById('publisher');
    const yearInput = document.getElementById('year');
    const imageInput = document.getElementById('image');

    const book = {
        Title: titleInput.value,
        Authors: authorsInput.value,
        Publisher: publisherInput.value,
        Year: yearInput.value,
        Image: imageInput.value
    };

    // Add book to local storage or send to server
    console.log('Add/Edit book:', book);

    document.getElementById('form').reset();
}
