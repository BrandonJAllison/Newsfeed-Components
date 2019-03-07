// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


class Article {
  constructor(article) {
    this.article = article; 
    this.expandButton = this.article.querySelector('.expandButton');
    this.expandButton.innerHTML = 'click to read';
    this.removeButton = this.article.querySelector('.removeButton');
   

    //this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    this.expandButton.addEventListener('click', () => this.expandArticle());
    this.removeButton.addEventListener('click', () => this.removeArticle());
    
  }

  expandArticle() {
    console.log ('its working');
    this.article.classList.toggle('article-open');
    if (this.article.classList.contains('article-open') === true){
    this.expandButton.innerHTML = 'close article';
    this.removeButton.innerHTML = 'Remove Article';
    }
    else{

      this.expandButton.innerHTML = 'click to read';

    }
  }

  removeArticle() {

    this.article.style.display = 'none';

  }
};



let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article (article));


//articles.forEach(function(article){
  //return new Article(article);
//});