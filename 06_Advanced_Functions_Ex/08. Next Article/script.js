function getArticleGenerator(articles) {
    //Array.from() will give us a new collection of articles, otherwise we get the reference of the articles array
    let articlesCopy = Array.from(articles);
    let contentElement = document.getElementById('content');

    return () => {
        if(articlesCopy.length === 0) {
            return;
        }
        let currentArticle = articlesCopy.shift();
        let newArticle = document.createElement('article');
        newArticle.textContent = currentArticle;
        contentElement.appendChild(newArticle);
        debugger
    }
}
