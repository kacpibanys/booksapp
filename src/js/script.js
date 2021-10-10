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
      //console.log('menuBook:', templates);


      // for(let book of dataSource.books) {
      //   thisApp.generatedDOM = '';
      //   const genereatedHTML = templates.menuBook(thisApp);
      //   thisApp.generatedDOM = utils.createDOMFromHTML(genereatedHTML);


      // }

      // for( let i = 0; i < dataSourceLength; i++ ){
      //   const genereatedHTML = templates.menuBook(thisApp);
      //   thisApp.select.booksPanel.bookList = utils.createDOMFromHTML(genereatedHTML);
      //   const bookContainer = document.querySelector(select.booksPanel.bookList);
      //   bookContainer.appendChild(thisApp.booksPanel.bookList);
      //   console.log('Loop iteration: ' + i);
      // }



      for(let book in thisApp.dataSource.books){
        const generatedHTML = templates.menuBook(thisApp);
        book = utils.createDOMFromHTML(generatedHTML);
        const bookContainer = document.querySelector(select.booksPanel.bookList);
        bookContainer.appendChild(book);
      }
      // console.log('test', dataSourceLength);
    },
  };
  app.render();
}
