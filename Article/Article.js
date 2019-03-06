// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    this.article = article; 
    this.expandButton = this.article.querySelector('.expandButton');
    this.expandButton.innerHTML = 'expand';
    //this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    this.expandButton.addEventListener('click', () => this.expandArticle());
    
  }

  expandArticle() {
    console.log ('its working');
    this.article.classList.toggle('article-open');
  }
};

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article (article));

//articles.forEach(function(article){
  //return new Article(article);
//});