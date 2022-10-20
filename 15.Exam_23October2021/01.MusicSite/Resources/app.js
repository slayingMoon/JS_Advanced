window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', addSong);
    let genre = document.getElementById('genre');
    let songName = document.getElementById('name');
    let songAuthor = document.getElementById('author');
    let creationDate =  document.getElementById('date');
    let hitsContainer = document.getElementsByClassName('all-hits-container')[0];
    let likes = document.getElementsByClassName('likes')[0].querySelector('p');
    let savedSongs = document.getElementsByClassName('saved-container')[0];

    function addSong(e) {
        e.preventDefault();

        let genreValue = genre.value;
        let songNameValue = songName.value;
        let songAuthorValue = songAuthor.value;
        let creationDateValue = creationDate.value;

        if(!genreValue || !songNameValue || !songAuthorValue || !creationDateValue) {
            return;
        }

        createCollectionEntry(genreValue, songNameValue, songAuthorValue, creationDateValue);

        clearAddForm();
    }

    function createCollectionEntry(genreValue, songNameValue, songAuthorValue, creationDateValue) {
        let div = elCreator('div');
        div.setAttribute('class', 'hits-info');
        let img = elCreator('img');
        img.setAttribute('src', './static/img/img.png');
        div.appendChild(img);
        elCreator('h2', `Genre: ${genreValue}`, div);
        elCreator('h2', `Name: ${songNameValue}`, div);
        elCreator('h2', `Author: ${songAuthorValue}`, div);
        elCreator('h3', `Date: ${creationDateValue}`, div);

        let saveBtn = elCreator('button', 'Save song', div);
        saveBtn.setAttribute('class', 'save-btn');
        let likeBtn = elCreator('button', 'Like song', div);
        likeBtn.setAttribute('class', 'like-btn');
        let deleteBtn = elCreator('button', 'Delete', div);
        deleteBtn.setAttribute('class', 'delete-btn');

        hitsContainer.appendChild(div);

        likeBtn.addEventListener('click', likeSong);
        saveBtn.addEventListener('click', saveSong);
        deleteBtn.addEventListener('click', deleteSong);
    }

    function deleteSong(e) {
        e.target.parentElement.remove();
    }

    function saveSong(e) {
        let savedSongElement = e.target.parentElement;
        e.target.parentElement.remove();
        savedSongElement.querySelector('button[class=save-btn]').remove();
        savedSongElement.querySelector('button[class=like-btn]').remove();
        savedSongs.appendChild(savedSongElement);
    }

    function likeSong(e) {
        e.target.disabled = true;
        let likesValue = likes.textContent.split(': ')[1];
        likesValue = Number(likesValue) + 1;
        likes.textContent = `Total Likes: ${likesValue}`;
    }


    function clearAddForm() {
        genre.value = '';
        songName.value = '';
        songAuthor.value = '';
        creationDate.value = '';
    }

    function elCreator(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if(parent) {
            parent.appendChild(element);
        }
        return element;
    }
}