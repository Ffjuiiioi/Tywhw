var database = firebase.database();



const averageRating316 = document.getElementById('averageRating316');
const averageRating317 = document.getElementById('averageRating317');
const averageRating318 = document.getElementById('averageRating318');
const averageRating319 = document.getElementById('averageRating319');
const averageRating320 = document.getElementById('averageRating320');
const averageRating321 = document.getElementById('averageRating321');
const averageRating322 = document.getElementById('averageRating322');
const averageRating323 = document.getElementById('averageRating323');
const averageRating324 = document.getElementById('averageRating324');
const averageRating325 = document.getElementById('averageRating325');
const averageRating326 = document.getElementById('averageRating326');
const averageRating327 = document.getElementById('averageRating327');
const averageRating328 = document.getElementById('averageRating328');
const averageRating329 = document.getElementById('averageRating329');
const averageRating330 = document.getElementById('averageRating330');



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating316() {
    database.ref('comment/316/').on('value', function(snapshot) {
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
      document.getElementById('averageRating316').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating316();
});

      // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[316]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating316"></div>';
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
            window.location.href = 'tovar-11.html?id=316';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating317() {
    database.ref('comment/317/').on('value', function(snapshot) {
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
      document.getElementById('averageRating317').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating317();
});

    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[317]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating317"></div>';
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
            window.location.href = 'tovar-11.html?id=317';
        });
    }); 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating318() {
    database.ref('comment/318/').on('value', function(snapshot) {
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
      document.getElementById('averageRating318').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating318();
});

    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[318]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating318"></div>';
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
            window.location.href = 'tovar-11.html?id=318';
        });
    });   
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating319() {
    database.ref('comment/319/').on('value', function(snapshot) {
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
      document.getElementById('averageRating319').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating319();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[319]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating319"></div>';
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
            window.location.href = 'tovar-11.html?id=319';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating320() {
    database.ref('comment/320/').on('value', function(snapshot) {
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
      document.getElementById('averageRating320').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating320();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[320]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating320"></div>';
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
            window.location.href = 'tovar-11.html?id=320';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating321() {
    database.ref('comment/321/').on('value', function(snapshot) {
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
      document.getElementById('averageRating321').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating321();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[321]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating321"></div>';
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
            window.location.href = 'tovar-11.html?id=321';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating322() {
    database.ref('comment/322/').on('value', function(snapshot) {
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
      document.getElementById('averageRating322').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating322();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[322]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating322"></div>';
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
            window.location.href = 'tovar-11.html?id=322';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating323() {
    database.ref('comment/323/').on('value', function(snapshot) {
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
      document.getElementById('averageRating323').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating323();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[323]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating323"></div>';
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
            window.location.href = 'tovar-11.html?id=323';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating324() {
    database.ref('comment/324/').on('value', function(snapshot) {
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
      document.getElementById('averageRating324').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating324();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[324]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating324"></div>';
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
            window.location.href = 'tovar-11.html?id=324';
        });
    }); 
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating325() {
    database.ref('comment/325/').on('value', function(snapshot) {
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
      document.getElementById('averageRating325').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating325();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[325]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating325"></div>';
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
            window.location.href = 'tovar-11.html?id=325';
        });
 });
 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating326() {
    database.ref('comment/326/').on('value', function(snapshot) {
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
      document.getElementById('averageRating326').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating326();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[326]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating326"></div>';
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
            window.location.href = 'tovar-11.html?id=326';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating327() {
    database.ref('comment/327/').on('value', function(snapshot) {
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
      document.getElementById('averageRating327').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating327();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[327]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating327"></div>';
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
            window.location.href = 'tovar-11.html?id=327';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating328() {
    database.ref('comment/328/').on('value', function(snapshot) {
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
      document.getElementById('averageRating328').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating328();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[328]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating328"></div>';
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
            window.location.href = 'tovar-11.html?id=328';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating329() {
    database.ref('comment/329/').on('value', function(snapshot) {
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
      document.getElementById('averageRating329').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating329();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[329]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating329"></div>';
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
            window.location.href = 'tovar-11.html?id=329';
        });
    }); 
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating330() {
    database.ref('comment/330/').on('value', function(snapshot) {
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
      document.getElementById('averageRating330').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating330();
});
    
    // Получение данных из Firebase Database
database.ref('product/classicMechanics/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[330]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating330"></div>';
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
            window.location.href = 'tovar-11.html?id=330';
        });
    });  
    
