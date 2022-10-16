window.addEventListener("load", solve);

function solve() {
    document.getElementById('publish-btn').addEventListener('click', createPost);
    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');
    let reviewList = document.getElementById('review-list');
    let publishedList = document.getElementById('published-list');
    document.getElementById('clear-btn').addEventListener('click', clearPosts);

    function createPost() {
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;
        if (!titleValue || !categoryValue || !contentValue) {
            return;
        }

        createDOMElements(titleValue, categoryValue, contentValue);
        // clear input
        clearForm();
    }

    function clearForm() {
        title.value = '';
        category.value = '';
        content.value = '';
    }

    function createDOMElements(titleValue, categoryValue, contentValue) {
        let li = document.createElement('li');
        li.classList.add('rpost');

        let article = createArticle(titleValue, categoryValue, contentValue);

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('action-btn');
        btnEdit.classList.add('edit');
        btnEdit.textContent = 'Edit';
        btnEdit.addEventListener('click', editPost);

        let btnApprove = document.createElement('button');
        btnApprove.classList.add('action-btn');
        btnApprove.classList.add('approve');
        btnApprove.textContent = 'Approve';
        btnApprove.addEventListener('click', approvePost);

        li.appendChild(article);
        li.appendChild(btnEdit);
        li.appendChild(btnApprove);
        reviewList.appendChild(li);
    }

    function createArticle(titleValue, categoryValue, contentValue) {
        let article = document.createElement('article');

        let h = document.createElement('h4');
        h.textContent = titleValue;

        let pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${categoryValue}`;

        let pContent = document.createElement('p');
        pContent.textContent = `Content: ${contentValue}`;

        article.appendChild(h);
        article.appendChild(pCategory);
        article.appendChild(pContent);

        return article;
    }

    function editPost(e) {
        let currentPost = e.target.parentElement;
        let articleContent = currentPost.getElementsByTagName('article')[0].children;
        // let [h, categoryP, contentP] = article.children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;
        //setting values from post back to 'Add New Post'
        title.value = titleValue
        category.value = categoryValue.split(': ')[1];
        content.value = contentValue.split(': ')[1];

        //removing list item from review-list
        currentPost.remove();
    }

    function approvePost(e) {
        let currentPost = e.target.parentElement;
        publishedList.appendChild(currentPost);

        //removing list item from review-list
        // reviewList.removeChild(currentPost);
        Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove());

    }

    function clearPosts() {
        Array.from(publishedList.children).forEach(li => li.remove());
    }
}