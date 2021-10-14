{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },
    booksPanel: {
      bookList: '.books-list',
    },

  };

  const classNames = {
    book: {
      hiddenBook: 'hidden',
      favorite: 'favorite',
    },
  };

  const templates = {
    menuBook: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };
  var favouriteBooks = [];

  const app = {

    render: function(){
      //const thisApp = this;

      const bookContainer = document.querySelector(select.booksPanel.bookList);
      for(let book of dataSource.books){

        const generatedHTML = templates.menuBook(book);
        const dom = utils.createDOMFromHTML(generatedHTML);

        bookContainer.appendChild(dom);
      }
    },
    initActions: function(){
      const bookImageReferences = document.querySelectorAll('.book__image');
      console.log('bookReferences', bookImageReferences);
      for (let image of bookImageReferences) {
        image.addEventListener('dblclick', function(event){
          event.preventDefault();
          const bookID = image.getAttribute('data-id');
          if (!favouriteBooks.includes(bookID)) {
            image.classList.add(classNames.book.favorite);
            favouriteBooks.push(bookID);
            console.log('favourtieBooks', favouriteBooks);
          } else {
            image.classList.remove(classNames.book.favorite);
            favouriteBooks.pop(bookID);
            console.log('favourtieBooks', favouriteBooks);
          }


          // console.log('bookID', bookID);
          // console.log('favourtieBooks', favouriteBooks);
        });
      }
    }
  };
  app.render();
  app.initActions();
}
