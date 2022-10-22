class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        
        articleModel = articleModel.toLowerCase();

        if(!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }

        let foundArticle = this.listOfArticles.find(a => a.articleName === articleName);

        if(foundArticle && foundArticle.articleModel === articleModel) {
            foundArticle.quantity += quantity;
        }else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let foundGuest = this.guests.find(g => g.guestName === guestName);

        if(foundGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points;

        if(personality === 'Vip') {
            points = 500;
        }else if(personality === 'Middle') {
            points = 250;
        }else {
            points = 50;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        })

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let foundArticle = this.listOfArticles.find(a => a.articleName === articleName);

        if(!foundArticle || foundArticle.articleModel !== articleModel) {
            throw new Error("This article is not found.");
        }

        if(foundArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let foundGuest = this.guests.find(g => g.guestName === guestName);

        if(!foundGuest) {
            return "This guest is not invited.";
        }

        let articlePoints = this.possibleArticles[foundArticle.articleModel];

        if(foundGuest.points < articlePoints) {
            return "You need to more points to purchase the article.";
        }

        foundGuest.points -= articlePoints;
        foundArticle.quantity --;
        foundGuest.purchaseArticle ++;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
    }

    showGalleryInfo(criteria) {
        let output;
        let resultArr = [];

        if(criteria === 'article') {
            output = "Articles information:\n";
            resultArr = this.listOfArticles.map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`);
            output += resultArr.join('\n');
        }else if(criteria === 'guest') {
            output = "Guests information:\n";
            resultArr = this.guests.map(g => `${g.guestName} - ${g.purchaseArticle}`);
            output += resultArr.join('\n');
        }

        return output;
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


