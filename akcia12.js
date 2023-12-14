var database = firebase.database();



const averageRating351 = document.getElementById('averageRating351');
const averageRating352 = document.getElementById('averageRating352');
const averageRating353 = document.getElementById('averageRating353');
const averageRating354 = document.getElementById('averageRating354');
const averageRating355 = document.getElementById('averageRating355');
const averageRating356 = document.getElementById('averageRating356');
const averageRating357 = document.getElementById('averageRating357');
const averageRating358 = document.getElementById('averageRating358');
const averageRating359 = document.getElementById('averageRating359');
const averageRating360 = document.getElementById('averageRating360');
const averageRating361 = document.getElementById('averageRating361');
const averageRating362 = document.getElementById('averageRating362');
const averageRating363 = document.getElementById('averageRating363');
const averageRating364 = document.getElementById('averageRating364');
const averageRating365 = document.getElementById('averageRating365');



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating351() {
    database.ref('comment/351/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating351').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating351();
});

      // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[351]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating351"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=351';
        });
    });  
    
    
    
    
   
   
   
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating352() {
    database.ref('comment/352/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating352').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating352();
});

    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[352]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating352"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=352';
        });
    }); 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating353() {
    database.ref('comment/353/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating353').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating353();
});

    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[353]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating353"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=353';
        });
    });   
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating354() {
    database.ref('comment/354/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating354').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating354();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[354]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating354"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=354';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating355() {
    database.ref('comment/355/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating355').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating355();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[355]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating355"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=355';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating356() {
    database.ref('comment/356/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating356').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating356();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[356]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating356"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=356';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating357() {
    database.ref('comment/357/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating357').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating357();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[357]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating357"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=357';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating358() {
    database.ref('comment/358/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating358').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating358();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[358]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating358"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=358';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating359() {
    database.ref('comment/359/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating359').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating359();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[359]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating359"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=359';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating360() {
    database.ref('comment/360/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating360').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating360();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[360]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating360"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=360';
        });
    }); 
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating361() {
    database.ref('comment/361/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating361').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating361();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[361]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating361"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=361';
        });
 });
 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating362() {
    database.ref('comment/362/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating362').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating362();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[362]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating362"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=362';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating363() {
    database.ref('comment/363/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating363').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating363();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[363]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating363"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=363';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating364() {
    database.ref('comment/364/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating364').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating364();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[364]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating364"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=364';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating365() {
    database.ref('comment/365/').on('value', function(snapshot) {
      const comments = snapshot.val();
      let totalRating = 0;
      let numberOfComments = 0;

      for (let commentKey in comments) {
        if (comments.hasOwnProperty(commentKey)) {
          const comment = comments[commentKey];
          const rating = parseFloat(comment.rating);

          totalRating += rating;
          numberOfComments++;
        }
      }

      let averageRating = 0;
      if (numberOfComments > 0) {
        averageRating = totalRating / numberOfComments;
      }

      // Display average rating in stars
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= averageRating) {
          stars += '<span class="star" style="color: #ffba26; font-size: 17px;">★</span>';
        } else {
          stars += '<span class="star" style="color: silver; font-size: 17px;">☆</span>';
        }
      }
      document.getElementById('averageRating365').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating365();
});
    
    // Получение данных из Firebase Database
database.ref('product/akcia/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[365]; // Получаем только первый товар из коллекции
        
        if (!product) {
            return;
        }
        
        
        // Создание элементов карточки товара
        const card = document.createElement('div');
        card.classList.add('pro');

        const img = document.createElement('img');
        img.src = product.photo1Url;
        img.id = 'photo1';
        card.appendChild(img);

        const des = document.createElement('div');
        des.classList.add('des');

        const name = document.createElement('h5');
        name.textContent = product.name;
        des.appendChild(name);
        
        const star = document.createElement('div');
                star.classList.add('star');
                star.style.fontFamily = "Arial"; // Set font family to Arial
                
                    const starIcon = document.createElement('span');
                    starIcon.innerHTML = '<div id="averageRating365"></div>';
                    star.appendChild(starIcon);
                
                des.appendChild(star);
                

        const price = document.createElement('h4');
        price.textContent = `$${product.price}`;
        des.appendChild(price);

        card.appendChild(des);

        const cartLink = document.createElement('a');
        cartLink.href = '#';

        const cartIcon = document.createElement('i');
        cartIcon.classList.add('bx', 'bx-right-arrow-alt');
        cartIcon.id = 'cart1';
        cartLink.appendChild(cartIcon);

        card.appendChild(cartLink);

        // Добавление карточки товара в контейнер
        productsContainer.appendChild(card);

        // обработчик клика на контейнер
        card.addEventListener('click', function(){
            window.location.href = 'tovar-12.html?id=365';
        });
    }); 
    
    
    
    
   