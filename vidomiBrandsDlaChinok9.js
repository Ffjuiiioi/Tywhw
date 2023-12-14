var database = firebase.database();

const averageRating271 = document.getElementById('averageRating271');
const averageRating272 = document.getElementById('averageRating272');
const averageRating273 = document.getElementById('averageRating273');
const averageRating274 = document.getElementById('averageRating274');
const averageRating275 = document.getElementById('averageRating275');
const averageRating276 = document.getElementById('averageRating276');
const averageRating277 = document.getElementById('averageRating277');
const averageRating278 = document.getElementById('averageRating278');
const averageRating279 = document.getElementById('averageRating279');
const averageRating280 = document.getElementById('averageRating280');
const averageRating281 = document.getElementById('averageRating281');
const averageRating282 = document.getElementById('averageRating282');
const averageRating283 = document.getElementById('averageRating283');
const averageRating284 = document.getElementById('averageRating284');
const averageRating285 = document.getElementById('averageRating285');
const averageRating286 = document.getElementById('averageRating286');
const averageRating287 = document.getElementById('averageRating287');
const averageRating288 = document.getElementById('averageRating288');
const averageRating289 = document.getElementById('averageRating289');
const averageRating290 = document.getElementById('averageRating290');
const averageRating291 = document.getElementById('averageRating291');
const averageRating292 = document.getElementById('averageRating292');
const averageRating293 = document.getElementById('averageRating293');
const averageRating294 = document.getElementById('averageRating294');
const averageRating295 = document.getElementById('averageRating295');
const averageRating296 = document.getElementById('averageRating296');
const averageRating297 = document.getElementById('averageRating297');
const averageRating298 = document.getElementById('averageRating298');
const averageRating299 = document.getElementById('averageRating299');
const averageRating300 = document.getElementById('averageRating300');



document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating271() {
  database.ref('comment/271/').on('value', function(snapshot) {
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
    document.getElementById('averageRating271').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating271();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[271]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating271"></div>';
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
            window.location.href = 'tovar-9.html?id=271';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating272() {
  database.ref('comment/272/').on('value', function(snapshot) {
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
    document.getElementById('averageRating272').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating272();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[272]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating272"></div>';
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
            window.location.href = 'tovar-9.html?id=272';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating273() {
  database.ref('comment/273/').on('value', function(snapshot) {
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
    document.getElementById('averageRating273').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating273();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[273]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating273"></div>';
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
            window.location.href = 'tovar-9.html?id=273';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating274() {
  database.ref('comment/274/').on('value', function(snapshot) {
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
    document.getElementById('averageRating274').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating274();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[274]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating274"></div>';
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
            window.location.href = 'tovar-9.html?id=274';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating275() {
  database.ref('comment/275/').on('value', function(snapshot) {
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
    document.getElementById('averageRating275').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating275();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[275]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating275"></div>';
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
            window.location.href = 'tovar-9.html?id=275';
        });
    }); 
    
    
    
    
    
    
    
    
   
   
   document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating276() {
  database.ref('comment/276/').on('value', function(snapshot) {
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
    document.getElementById('averageRating276').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating276();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[276]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating276"></div>';
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
            window.location.href = 'tovar-9.html?id=276';
        });
    });  
    
    
   
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating277() {
  database.ref('comment/277/').on('value', function(snapshot) {
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
    document.getElementById('averageRating277').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating277();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[277]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating277"></div>';
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
            window.location.href = 'tovar-9.html?id=277';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating278() {
  database.ref('comment/278/').on('value', function(snapshot) {
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
    document.getElementById('averageRating278').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating278();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[278]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating278"></div>';
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
            window.location.href = 'tovar-9.html?id=278';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating279() {
  database.ref('comment/279/').on('value', function(snapshot) {
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
    document.getElementById('averageRating279').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating279();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[279]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating279"></div>';
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
            window.location.href = 'tovar-9.html?id=279';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating280() {
  database.ref('comment/280/').on('value', function(snapshot) {
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
    document.getElementById('averageRating280').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating280();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[280]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating280"></div>';
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
            window.location.href = 'tovar-9.html?id=280';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating281() {
  database.ref('comment/281/').on('value', function(snapshot) {
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
    document.getElementById('averageRating281').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating281();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[281]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating281"></div>';
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
            window.location.href = 'tovar-9.html?id=281';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating282() {
  database.ref('comment/282/').on('value', function(snapshot) {
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
    document.getElementById('averageRating282').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating282();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[282]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating282"></div>';
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
            window.location.href = 'tovar-9.html?id=282';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating283() {
  database.ref('comment/283/').on('value', function(snapshot) {
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
    document.getElementById('averageRating283').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating283();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[283]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating283"></div>';
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
            window.location.href = 'tovar-9.html?id=283';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating284() {
  database.ref('comment/284/').on('value', function(snapshot) {
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
    document.getElementById('averageRating284').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating284();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[284]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating284"></div>';
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
            window.location.href = 'tovar-9.html?id=284';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating285() {
  database.ref('comment/285/').on('value', function(snapshot) {
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
    document.getElementById('averageRating285').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating285();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[285]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating285"></div>';
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
            window.location.href = 'tovar-9.html?id=285';
        });
    }); 
    
    
    
    
    
    
    
    
   
   
   document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating286() {
  database.ref('comment/286/').on('value', function(snapshot) {
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
    document.getElementById('averageRating286').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating286();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[286]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating286"></div>';
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
            window.location.href = 'tovar-9.html?id=286';
        });
    });  
    
    
   
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating287() {
  database.ref('comment/287/').on('value', function(snapshot) {
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
    document.getElementById('averageRating287').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating287();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[287]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating287"></div>';
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
            window.location.href = 'tovar-9.html?id=287';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating288() {
  database.ref('comment/288/').on('value', function(snapshot) {
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
    document.getElementById('averageRating288').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating288();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[288]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating288"></div>';
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
            window.location.href = 'tovar-9.html?id=288';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating289() {
  database.ref('comment/289/').on('value', function(snapshot) {
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
    document.getElementById('averageRating289').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating289();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[289]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating289"></div>';
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
            window.location.href = 'tovar-9.html?id=289';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating290() {
  database.ref('comment/290/').on('value', function(snapshot) {
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
    document.getElementById('averageRating290').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating290();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[290]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating290"></div>';
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
            window.location.href = 'tovar-9.html?id=290';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating291() {
  database.ref('comment/291/').on('value', function(snapshot) {
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
    document.getElementById('averageRating291').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating291();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[291]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating291"></div>';
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
            window.location.href = 'tovar-9.html?id=291';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating292() {
  database.ref('comment/292/').on('value', function(snapshot) {
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
    document.getElementById('averageRating292').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating292();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[292]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating292"></div>';
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
            window.location.href = 'tovar-9.html?id=292';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating293() {
  database.ref('comment/293/').on('value', function(snapshot) {
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
    document.getElementById('averageRating293').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating293();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[293]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating293"></div>';
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
            window.location.href = 'tovar-9.html?id=293';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating294() {
  database.ref('comment/294/').on('value', function(snapshot) {
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
    document.getElementById('averageRating294').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating294();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[294]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating294"></div>';
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
            window.location.href = 'tovar-9.html?id=294';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating295() {
  database.ref('comment/295/').on('value', function(snapshot) {
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
    document.getElementById('averageRating295').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating295();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[295]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating295"></div>';
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
            window.location.href = 'tovar-9.html?id=295';
        });
    }); 
    
    
    
    
    
    
    
    
   
   
   document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating296() {
  database.ref('comment/296/').on('value', function(snapshot) {
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
    document.getElementById('averageRating296').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating296();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[296]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating296"></div>';
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
            window.location.href = 'tovar-9.html?id=296';
        });
    });  
    
    
   
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating297() {
  database.ref('comment/297/').on('value', function(snapshot) {
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
    document.getElementById('averageRating297').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating297();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[297]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating297"></div>';
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
            window.location.href = 'tovar-9.html?id=297';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating298() {
  database.ref('comment/298/').on('value', function(snapshot) {
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
    document.getElementById('averageRating298').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating298();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[298]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating298"></div>';
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
            window.location.href = 'tovar-9.html?id=298';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating299() {
  database.ref('comment/299/').on('value', function(snapshot) {
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
    document.getElementById('averageRating299').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating299();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[299]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating299"></div>';
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
            window.location.href = 'tovar-9.html?id=299';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating300() {
  database.ref('comment/300/').on('value', function(snapshot) {
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
    document.getElementById('averageRating300').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating300();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaChinok/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[300]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating300"></div>';
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
            window.location.href = 'tovar-9.html?id=300';
        });
    });  