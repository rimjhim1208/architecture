// Fetch book data from books.json
fetch('books.json')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching books:', error));

// Render books to the DOM
function renderBooks(books) {
    const booksUl = document.getElementById('books');
    booksUl.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.marginBottom = '20px';
        li.innerHTML = `
            <a href="${book.URL}" target="_blank">
                <img src="${book.Image}" alt="${book.Title}" style="width:100px;height:150px;margin-right:10px;">
            </a>
            <div>
                <strong>${book.Title}</strong> by ${book.Authors} (${book.Publisher}, ${book.Year})
                <div>
                    <button onclick="editBook('${book.Title}')">Edit</button>
                    <button onclick="deleteBook('${book.Title}')">Delete</button>
                </div>
            </div>
        `;
        booksUl.appendChild(li);
    });
}

// Mock Delete Book
function deleteBook(bookTitle) {
    console.log('Delete book:', bookTitle);
}

// Edit a book
function editBook(bookTitle) {
    console.log('Edit book:', bookTitle);
}

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

    console.log('Add/Edit book:', book);

    document.getElementById('form').reset();
    fetch('books.json')
        .then(response => response.json())
        .then(data => renderBooks(data))
        .catch(error => console.error('Error fetching books:', error));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetch('books.json')
        .then(response => response.json())
        .then(data => renderBooks(data))
        .catch(error => console.error('Error fetching books:', error));
});
