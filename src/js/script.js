
{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },

    booksPanel: {
      bookList: '.books-list',
    }
  };

  const templates = {
    menuBook: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };

  const app = {

    render: function(){
      const thisApp = this;

      const bookContainer = document.querySelector(select.booksPanel.bookList);
      for(let book of dataSource.books){

        const generatedHTML = templates.menuBook(book);
        const dom = utils.createDOMFromHTML(generatedHTML);

        bookContainer.appendChild(dom);
      }
    },
  };
  app.render();
}
