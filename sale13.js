var database = firebase.database();



const averageRating371 = document.getElementById('averageRating371');
const averageRating372 = document.getElementById('averageRating372');
const averageRating373 = document.getElementById('averageRating373');
const averageRating374 = document.getElementById('averageRating374');
const averageRating375 = document.getElementById('averageRating375');
const averageRating376 = document.getElementById('averageRating376');
const averageRating377 = document.getElementById('averageRating377');
const averageRating378 = document.getElementById('averageRating378');
const averageRating379 = document.getElementById('averageRating379');
const averageRating380 = document.getElementById('averageRating380');
const averageRating381 = document.getElementById('averageRating381');
const averageRating382 = document.getElementById('averageRating382');
const averageRating383 = document.getElementById('averageRating383');
const averageRating384 = document.getElementById('averageRating384');
const averageRating385 = document.getElementById('averageRating385');



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating371() {
    database.ref('comment/371/').on('value', function(snapshot) {
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
      document.getElementById('averageRating371').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating371();
});

      // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[371]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating371"></div>';
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
            window.location.href = 'tovar-13.html?id=371';
        });
    });  
    
    
    
    
   
   
   
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating372() {
    database.ref('comment/372/').on('value', function(snapshot) {
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
      document.getElementById('averageRating372').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating372();
});

    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[372]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating372"></div>';
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
            window.location.href = 'tovar-13.html?id=372';
        });
    }); 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating373() {
    database.ref('comment/373/').on('value', function(snapshot) {
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
      document.getElementById('averageRating373').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating373();
});

    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[373]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating373"></div>';
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
            window.location.href = 'tovar-13.html?id=373';
        });
    });   
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating374() {
    database.ref('comment/374/').on('value', function(snapshot) {
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
      document.getElementById('averageRating374').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating374();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[374]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating374"></div>';
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
            window.location.href = 'tovar-13.html?id=374';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating375() {
    database.ref('comment/375/').on('value', function(snapshot) {
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
      document.getElementById('averageRating375').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating375();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[375]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating375"></div>';
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
            window.location.href = 'tovar-13.html?id=375';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating376() {
    database.ref('comment/376/').on('value', function(snapshot) {
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
      document.getElementById('averageRating376').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating376();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[376]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating376"></div>';
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
            window.location.href = 'tovar-13.html?id=376';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating377() {
    database.ref('comment/377/').on('value', function(snapshot) {
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
      document.getElementById('averageRating377').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating377();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[377]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating377"></div>';
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
            window.location.href = 'tovar-13.html?id=377';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating378() {
    database.ref('comment/378/').on('value', function(snapshot) {
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
      document.getElementById('averageRating378').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating378();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[378]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating378"></div>';
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
            window.location.href = 'tovar-13.html?id=378';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating379() {
    database.ref('comment/379/').on('value', function(snapshot) {
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
      document.getElementById('averageRating379').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating379();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[379]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating379"></div>';
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
            window.location.href = 'tovar-13.html?id=379';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating380() {
    database.ref('comment/380/').on('value', function(snapshot) {
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
      document.getElementById('averageRating380').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating380();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[380]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating380"></div>';
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
            window.location.href = 'tovar-13.html?id=380';
        });
    }); 
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating381() {
    database.ref('comment/381/').on('value', function(snapshot) {
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
      document.getElementById('averageRating381').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating381();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[381]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating381"></div>';
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
            window.location.href = 'tovar-13.html?id=381';
        });
 });
 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating382() {
    database.ref('comment/382/').on('value', function(snapshot) {
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
      document.getElementById('averageRating382').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating382();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[382]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating382"></div>';
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
            window.location.href = 'tovar-13.html?id=382';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating383() {
    database.ref('comment/383/').on('value', function(snapshot) {
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
      document.getElementById('averageRating383').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating383();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[383]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating383"></div>';
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
            window.location.href = 'tovar-13.html?id=383';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating384() {
    database.ref('comment/384/').on('value', function(snapshot) {
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
      document.getElementById('averageRating384').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating384();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[384]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating384"></div>';
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
            window.location.href = 'tovar-13.html?id=384';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating385() {
    database.ref('comment/385/').on('value', function(snapshot) {
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
      document.getElementById('averageRating385').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating385();
});
    
    // Получение данных из Firebase Database
database.ref('product/sale/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[385]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating385"></div>';
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
            window.location.href = 'tovar-13.html?id=385';
        });
    }); 
    
    
    
    
   
   