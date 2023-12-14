var database = firebase.database();

const averageRating251 = document.getElementById('averageRating251');
const averageRating252 = document.getElementById('averageRating252');
const averageRating253 = document.getElementById('averageRating253');
const averageRating254 = document.getElementById('averageRating254');
const averageRating255 = document.getElementById('averageRating255');
const averageRating256 = document.getElementById('averageRating256');
const averageRating257 = document.getElementById('averageRating257');
const averageRating258 = document.getElementById('averageRating258');
const averageRating259 = document.getElementById('averageRating259');
const averageRating260 = document.getElementById('averageRating260');
const averageRating261 = document.getElementById('averageRating261');
const averageRating262 = document.getElementById('averageRating262');
const averageRating263 = document.getElementById('averageRating263');
const averageRating264 = document.getElementById('averageRating264');
const averageRating265 = document.getElementById('averageRating265');
const averageRating266 = document.getElementById('averageRating266');
const averageRating267 = document.getElementById('averageRating267');
const averageRating268 = document.getElementById('averageRating268');
const averageRating269 = document.getElementById('averageRating269');
const averageRating270 = document.getElementById('averageRating270');




document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating251() {
  database.ref('comment/251/').on('value', function(snapshot) {
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
    document.getElementById('averageRating251').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating251();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[251]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating251"></div>';
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
            window.location.href = 'tovar-8.html?id=251';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating252() {
  database.ref('comment/252/').on('value', function(snapshot) {
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
    document.getElementById('averageRating252').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating252();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[252]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating252"></div>';
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
            window.location.href = 'tovar-8.html?id=252';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating253() {
  database.ref('comment/253/').on('value', function(snapshot) {
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
    document.getElementById('averageRating253').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating253();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[253]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating253"></div>';
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
            window.location.href = 'tovar-8.html?id=253';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating254() {
  database.ref('comment/254/').on('value', function(snapshot) {
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
    document.getElementById('averageRating254').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating254();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[254]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating254"></div>';
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
            window.location.href = 'tovar-8.html?id=254';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating255() {
  database.ref('comment/255/').on('value', function(snapshot) {
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
    document.getElementById('averageRating255').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating255();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[255]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating255"></div>';
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
            window.location.href = 'tovar-8.html?id=255';
        });
    }); 
    
    
    
    
    
    
    
    
   
   
   document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating256() {
  database.ref('comment/256/').on('value', function(snapshot) {
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
    document.getElementById('averageRating256').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating256();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[256]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating256"></div>';
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
            window.location.href = 'tovar-8.html?id=256';
        });
    });  
    
    
   
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating257() {
  database.ref('comment/257/').on('value', function(snapshot) {
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
    document.getElementById('averageRating257').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating257();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[257]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating257"></div>';
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
            window.location.href = 'tovar-8.html?id=257';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating258() {
  database.ref('comment/258/').on('value', function(snapshot) {
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
    document.getElementById('averageRating258').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating258();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[258]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating258"></div>';
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
            window.location.href = 'tovar-8.html?id=258';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating259() {
  database.ref('comment/259/').on('value', function(snapshot) {
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
    document.getElementById('averageRating259').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating259();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[259]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating259"></div>';
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
            window.location.href = 'tovar-8.html?id=259';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating260() {
  database.ref('comment/260/').on('value', function(snapshot) {
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
    document.getElementById('averageRating260').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating260();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[260]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating260"></div>';
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
            window.location.href = 'tovar-8.html?id=260';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating261() {
  database.ref('comment/261/').on('value', function(snapshot) {
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
    document.getElementById('averageRating261').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating261();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[261]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating261"></div>';
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
            window.location.href = 'tovar-8.html?id=261';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating262() {
  database.ref('comment/262/').on('value', function(snapshot) {
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
    document.getElementById('averageRating262').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating262();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[262]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating262"></div>';
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
            window.location.href = 'tovar-8.html?id=262';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating263() {
  database.ref('comment/263/').on('value', function(snapshot) {
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
    document.getElementById('averageRating263').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating263();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[263]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating263"></div>';
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
            window.location.href = 'tovar-8.html?id=263';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating264() {
  database.ref('comment/264/').on('value', function(snapshot) {
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
    document.getElementById('averageRating264').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating264();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[264]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating264"></div>';
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
            window.location.href = 'tovar-8.html?id=264';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating265() {
  database.ref('comment/265/').on('value', function(snapshot) {
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
    document.getElementById('averageRating265').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating265();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[265]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating265"></div>';
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
            window.location.href = 'tovar-8.html?id=265';
        });
    }); 
    
    
    
    
    
    
    
    
   
   
   document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating266() {
  database.ref('comment/266/').on('value', function(snapshot) {
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
    document.getElementById('averageRating266').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating266();
});

         // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[266]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating266"></div>';
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
            window.location.href = 'tovar-8.html?id=266';
        });
    });  
    
    
   
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating267() {
  database.ref('comment/267/').on('value', function(snapshot) {
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
    document.getElementById('averageRating267').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating267();
});
    
    
    
      // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[267]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating267"></div>';
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
            window.location.href = 'tovar-8.html?id=267';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating268() {
  database.ref('comment/268/').on('value', function(snapshot) {
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
    document.getElementById('averageRating268').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating268();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[268]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating268"></div>';
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
            window.location.href = 'tovar-8.html?id=268';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating269() {
  database.ref('comment/269/').on('value', function(snapshot) {
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
    document.getElementById('averageRating269').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating269();
});

    
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[269]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating269"></div>';
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
            window.location.href = 'tovar-8.html?id=269';
        });
    });  
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating270() {
  database.ref('comment/270/').on('value', function(snapshot) {
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
    document.getElementById('averageRating270').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating270();
});    
   
   
          // Получение данных из Firebase Database
database.ref('product/vidomiBrandsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[270]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating270"></div>';
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
            window.location.href = 'tovar-8.html?id=270';
        });
    });  
    
