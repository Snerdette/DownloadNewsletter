
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const articles = [
    {
        id: "Beaker And Flask",
        title: "Beaker And Flask",
        readSrc: "C:\Users\klafrance\workspace\DownloadNewsletter\src\api\BeakerAndFlask.docx",
        author: "Ken Cooms"
    },
    {
        id: "catalyst on the move",
        title: "Catalyst on the Move",
        readHref: "C:\Users\klafrance\workspace\DownloadNewsletter\src\api\catalystOnTheMove.docx",
        author: "unknown"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (article) => {
    return replaceAll(article.title, ' ', '-');
};

class ArticleApi {

    static getAllArticles() {
        console.log("getAllArticles");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], articles));
            });
        });
    }

    static saveArticle(article) {
        article = Object.assign({}, article); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minArticleTitleLength = 1;
                if (article.title.length < minArticleTitleLength) {
                    reject(`Title must be at least ${minArticleTitleLength} characters.`);
                }

                if (article.id) {
                    const existingArticleIndex = articles.findIndex(a => a.id == article.id);
                    articles.splice(existingArticleIndex, 1, article);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new articles in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    article.id = generateId(article);
                    article.readSrc = `http://www.pluralsight.com/articles/${article.id}`;
                    articles.push(article);
                }

                resolve(article);
            });
        });
    }

    static deleteArticle(articleId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfArticleToDelete = articles.findIndex(article => {
                    article.articleId == articleId;
                });
                articles.splice(indexOfArticleToDelete, 1);
                resolve();
            });
        });
    }
}

export default ArticleApi;
