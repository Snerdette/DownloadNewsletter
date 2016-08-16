
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const articles = [
    {
        id: "Beaverton Blood Drive",
        title: "Building Applications in React and Flux",
        readHref: "https://docs.google.com/a/catalystdevworks.com/document/d/1Wo6zzPW8sXUk6-Qb1hOM8USExejBW6oqfMzzEXRWCUQ/edit?usp=sharing",
        author: "cory-house"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        readHref: "http://www.pluralsight.com/articles/writing-clean-code-humans",
        author: "cory-house"
    },
    {
        id: "architecture",
        title: "Architecting Applications for the Real World",
        readHref: "http://www.pluralsight.com/articles/architecting-applications-dotnet",
        author: "cory-house"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        readHref: "http://www.pluralsight.com/articles/career-reboot-for-developer-mind",
        author: "cory-house"
    },
    {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        readHref: "http://www.pluralsight.com/articles/web-components-shadow-dom",
        author: "cory-house"
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
                    article.watchHref = `http://www.pluralsight.com/articles/${article.id}`;
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
