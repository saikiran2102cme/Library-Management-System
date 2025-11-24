function open_panel() {
    $(".side_panel").css("width","200px");
    $("#panel-open").css("display","none");
    $("#panel-close").css("display","inline");
    $("#panel-close").css("margin-left","170px");
    $(".logo").css("display","inline");
    $(".profile, .category, .theme, .operations").css("margin-bottom","20px");
    $(".text").css("display","inline-block");
    $(".elements").css("position","static");
    $(".library").css("margin-left","330px");
}

function close_panel() {
    $(".side_panel").css("width","fit-content");
    $("#panel-open").css("display","inline");
    $("#panel-close").css("display","none");
    $(".logo").css("display","none");
    $(".profile, .category, .theme, .operations").css("margin-bottom","20px");
    $(".library").css("margin-left","110px");
    $(".text").css("display","none");
}

function theme_light() {
    $("body").css("background-image","linear-gradient(to right, #2E3192, #1BFFFF)");
    $(".icon-light").css("display","none");
    $(".icon-night").css("display","inline-block");
    $(".icon-light, .icon-night").css("margin-left","20px");
    $("body").css("transition-duration","0.5s");
    // $("body *").css("color","#000000");
}

function theme_night() {
    $("body").css("background-image","linear-gradient(to right, #000000, #000000)");
    $(".icon-light").css("display","inline");
    $(".icon-night").css("display","none");
    $(".icon-light, .icon-night").css("margin-left","20px");
    $("body").css("transition-duration","0.5s");
//     $("body *").css("color","#000000");
//     $(".container .container-heading").css("color","#ffffff");
//     $(".input_text").css("color","#000000");
}

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const resultsInfo = document.getElementById('resultsInfo');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

async function performSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        showError('Please enter a search term');
        return;
    }

    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    
    hideError();
    hideResults();
    showLoading();

    try {
        const books = await fetchBooks(query, searchType);
        hideLoading();
        displayResults(books, query, searchType);
    } catch (error) {
        hideLoading();
        showError('Failed to fetch books. Please try again.');
        console.error('Error:', error);
    }
}

async function fetchBooks(query, searchType) {
    const encodedQuery = encodeURIComponent(query);
    let url;

    if (searchType === 'title') {
        url = `https://openlibrary.org/search.json?title=${encodedQuery}`;
    } else {
        url = `https://openlibrary.org/search.json?author=${encodedQuery}`;
    }

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
}

function displayResults(data, query, searchType) {
    resultsContainer.innerHTML = '';

    if (!data.docs || data.docs.length === 0) {
        showError(`No books found for "${query}"`);
        return;
    }

    resultsInfo.textContent = `Found ${data.numFound} results for "${query}" (showing ${data.docs.length})`;
    resultsInfo.classList.remove('hidden');

    data.docs.forEach(book => {
        const bookCard = createBookCard(book);
        resultsContainer.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';

    const title = book.title || 'Unknown Title';
    const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
    const publishYear = book.first_publish_year || 'N/A';

    card.innerHTML = `
        <h3>${escapeHtml(title)}</h3>
        <div class="book-info">
            <div class="book-info-item">
                <span class="book-info-label">Author(s):</span>
                <span class="book-info-value">${escapeHtml(authors)}</span>
            </div>
            <div class="book-info-item">
                <span class="book-info-label">First Published:</span>
                <span class="book-info-value">${publishYear}</span>
            </div>
        </div>
    `;

    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showLoading() {
    loadingIndicator.classList.remove('hidden');
}

function hideLoading() {
    loadingIndicator.classList.add('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

function hideResults() {
    resultsContainer.innerHTML = '';
    resultsInfo.classList.add('hidden');
}