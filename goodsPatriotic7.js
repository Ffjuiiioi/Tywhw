var database = firebase.database();


const averageRating201 = document.getElementById('averageRating201');
const averageRating202 = document.getElementById('averageRating202');
const averageRating203 = document.getElementById('averageRating203');
const averageRating204 = document.getElementById('averageRating204');
const averageRating205 = document.getElementById('averageRating205');
const averageRating206 = document.getElementById('averageRating206');
const averageRating207 = document.getElementById('averageRating207');
const averageRating208 = document.getElementById('averageRating208');
const averageRating209 = document.getElementById('averageRating209');
const averageRating210 = document.getElementById('averageRating210');
const averageRating211 = document.getElementById('averageRating211');
const averageRating212 = document.getElementById('averageRating212');
const averageRating213 = document.getElementById('averageRating213');
const averageRating214 = document.getElementById('averageRating214');
const averageRating215 = document.getElementById('averageRating215');
const averageRating216 = document.getElementById('averageRating216');
const averageRating217 = document.getElementById('averageRating217');
const averageRating218 = document.getElementById('averageRating218');
const averageRating219 = document.getElementById('averageRating219');
const averageRating220 = document.getElementById('averageRating220');
const averageRating221 = document.getElementById('averageRating221');
const averageRating222 = document.getElementById('averageRating222');
const averageRating223 = document.getElementById('averageRating223');
const averageRating224 = document.getElementById('averageRating224');
const averageRating225 = document.getElementById('averageRating225');
const averageRating226 = document.getElementById('averageRating226');
const averageRating227 = document.getElementById('averageRating227');
const averageRating228 = document.getElementById('averageRating228');
const averageRating229 = document.getElementById('averageRating229');
const averageRating230 = document.getElementById('averageRating230');
const averageRating231 = document.getElementById('averageRating231');
const averageRating232 = document.getElementById('averageRating232');
const averageRating233 = document.getElementById('averageRating233');
const averageRating234 = document.getElementById('averageRating234');
const averageRating235 = document.getElementById('averageRating235');
const averageRating236 = document.getElementById('averageRating236');
const averageRating237 = document.getElementById('averageRating237');
const averageRating238 = document.getElementById('averageRating238');
const averageRating239 = document.getElementById('averageRating239');
const averageRating240 = document.getElementById('averageRating240');
const averageRating241 = document.getElementById('averageRating241');
const averageRating242 = document.getElementById('averageRating242');
const averageRating243 = document.getElementById('averageRating243');
const averageRating244 = document.getElementById('averageRating244');
const averageRating245 = document.getElementById('averageRating245');
const averageRating246 = document.getElementById('averageRating246');
const averageRating247 = document.getElementById('averageRating247');
const averageRating248 = document.getElementById('averageRating248');
const averageRating249 = document.getElementById('averageRating249');
const averageRating250 = document.getElementById('averageRating250');





document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating201() {
  database.ref('comment/201/').on('value', function(snapshot) {
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
    document.getElementById('averageRating201').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating201();
});


// Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[201]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating201"></div>';
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
            window.location.href = 'tovar-7.html?id=201';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating202() {
  database.ref('comment/202/').on('value', function(snapshot) {
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
    document.getElementById('averageRating202').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating202();
});
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[202]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating202"></div>';
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
            window.location.href = 'tovar-7.html?id=202';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating203() {
  database.ref('comment/203/').on('value', function(snapshot) {
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
    document.getElementById('averageRating203').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating203();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[203]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating203"></div>';
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
            window.location.href = 'tovar-7.html?id=203';
        });
    });  
    
    
    
   
  
  
  document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating204() {
  database.ref('comment/204/').on('value', function(snapshot) {
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
    document.getElementById('averageRating204').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating204();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[204]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating204"></div>';
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
            window.location.href = 'tovar-7.html?id=204';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating205() {
  database.ref('comment/205/').on('value', function(snapshot) {
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
    document.getElementById('averageRating205').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating205();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[205]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating205"></div>';
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
            window.location.href = 'tovar-7.html?id=205';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating206() {
  database.ref('comment/206/').on('value', function(snapshot) {
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
    document.getElementById('averageRating206').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating206();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[206]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating206"></div>';
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
            window.location.href = 'tovar-7.html?id=206';
        });
    });  
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating207() {
  database.ref('comment/207/').on('value', function(snapshot) {
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
    document.getElementById('averageRating207').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating207();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[207]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating207"></div>';
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
            window.location.href = 'tovar-7.html?id=207';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating208() {
  database.ref('comment/208/').on('value', function(snapshot) {
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
    document.getElementById('averageRating208').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating208();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[208]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating208"></div>';
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
            window.location.href = 'tovar-7.html?id=208';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating209() {
  database.ref('comment/209/').on('value', function(snapshot) {
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
    document.getElementById('averageRating209').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating209();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[209]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating209"></div>';
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
            window.location.href = 'tovar-7.html?id=209';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating210() {
  database.ref('comment/210/').on('value', function(snapshot) {
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
    document.getElementById('averageRating210').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating210();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[210]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating210"></div>';
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
            window.location.href = 'tovar-7.html?id=210';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating211() {
  database.ref('comment/211/').on('value', function(snapshot) {
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
    document.getElementById('averageRating211').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating211();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[211]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating211"></div>';
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
            window.location.href = 'tovar-7.html?id=211';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating212() {
  database.ref('comment/212/').on('value', function(snapshot) {
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
    document.getElementById('averageRating212').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating212();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[212]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating212"></div>';
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
            window.location.href = 'tovar-5.html?id=212';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating213() {
  database.ref('comment/213/').on('value', function(snapshot) {
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
    document.getElementById('averageRating213').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating213();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[213]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating213"></div>';
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
            window.location.href = 'tovar-7.html?id=213';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating214() {
  database.ref('comment/214/').on('value', function(snapshot) {
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
    document.getElementById('averageRating214').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating214();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[214]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating214"></div>';
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
            window.location.href = 'tovar-7.html?id=214';
        });
    });  
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating215() {
  database.ref('comment/215/').on('value', function(snapshot) {
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
    document.getElementById('averageRating215').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating215();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[215]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating215"></div>';
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
            window.location.href = 'tovar-7.html?id=215';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating216() {
  database.ref('comment/216/').on('value', function(snapshot) {
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
    document.getElementById('averageRating216').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating216();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[216]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating216"></div>';
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
            window.location.href = 'tovar-7.html?id=216';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating217() {
  database.ref('comment/217/').on('value', function(snapshot) {
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
    document.getElementById('averageRating217').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating217();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[217]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating217"></div>';
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
            window.location.href = 'tovar-7.html?id=217';
        });
    });  
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating218() {
  database.ref('comment/218/').on('value', function(snapshot) {
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
    document.getElementById('averageRating218').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating218();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[218]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating218"></div>';
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
            window.location.href = 'tovar-7.html?id=218';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating219() {
  database.ref('comment/219/').on('value', function(snapshot) {
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
    document.getElementById('averageRating219').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating219();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => { 
        const products = snapshot.val();
        const product = products[219]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating219"></div>';
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
            window.location.href = 'tovar-7.html?id=219';
        });
    });
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating220() {
  database.ref('comment/220/').on('value', function(snapshot) {
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
    document.getElementById('averageRating220').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating220();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[220]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating220"></div>';
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
            window.location.href = 'tovar-7.html?id=220';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating221() {
  database.ref('comment/221/').on('value', function(snapshot) {
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
    document.getElementById('averageRating221').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating221();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[221]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating221"></div>';
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
            window.location.href = 'tovar-7.html?id=221';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating222() {
  database.ref('comment/222/').on('value', function(snapshot) {
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
    document.getElementById('averageRating222').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating222();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[222]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating222"></div>';
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
            window.location.href = 'tovar-7.html?id=222';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating223() {
  database.ref('comment/223/').on('value', function(snapshot) {
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
    document.getElementById('averageRating223').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating223();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[223]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating223"></div>';
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
            window.location.href = 'tovar-7.html?id=223';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating224() {
  database.ref('comment/224/').on('value', function(snapshot) {
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
    document.getElementById('averageRating224').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating224();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[224]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating224"></div>';
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
            window.location.href = 'tovar-7.html?id=224';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating225() {
  database.ref('comment/225/').on('value', function(snapshot) {
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
    document.getElementById('averageRating225').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating225();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[225]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating225"></div>';
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
            window.location.href = 'tovar-7.html?id=225';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating226() {
  database.ref('comment/226/').on('value', function(snapshot) {
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
    document.getElementById('averageRating226').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating226();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[226]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating226"></div>';
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
            window.location.href = 'tovar-7.html?id=226';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating227() {
  database.ref('comment/227/').on('value', function(snapshot) {
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
    document.getElementById('averageRating227').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating227();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[227]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating227"></div>';
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
            window.location.href = 'tovar-7.html?id=227';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating228() {
  database.ref('comment/228/').on('value', function(snapshot) {
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
    document.getElementById('averageRating228').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating228();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[228]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating228"></div>';
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
            window.location.href = 'tovar-5.html?id=228';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating229() {
  database.ref('comment/229/').on('value', function(snapshot) {
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
    document.getElementById('averageRating229').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating229();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[229]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating229"></div>';
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
            window.location.href = 'tovar-7.html?id=229';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating230() {
  database.ref('comment/230/').on('value', function(snapshot) {
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
    document.getElementById('averageRating230').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating230();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[230]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating230"></div>';
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
            window.location.href = 'tovar-7.html?id=230';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating231() {
  database.ref('comment/231/').on('value', function(snapshot) {
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
    document.getElementById('averageRating231').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating231();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[231]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating231"></div>';
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
            window.location.href = 'tovar-7.html?id=231';
        });
    });  
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating232() {
  database.ref('comment/232/').on('value', function(snapshot) {
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
    document.getElementById('averageRating232').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating232();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[232]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating232"></div>';
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
            window.location.href = 'tovar-7.html?id=232';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating233() {
  database.ref('comment/233/').on('value', function(snapshot) {
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
    document.getElementById('averageRating233').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating233();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[233]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating233"></div>';
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
            window.location.href = 'tovar-7.html?id=233';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating234() {
  database.ref('comment/234/').on('value', function(snapshot) {
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
    document.getElementById('averageRating234').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating234();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[234]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating234"></div>';
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
            window.location.href = 'tovar-7.html?id=234';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating235() {
  database.ref('comment/235/').on('value', function(snapshot) {
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
    document.getElementById('averageRating235').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating235();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[235]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating235"></div>';
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
            window.location.href = 'tovar-7.html?id=235';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating236() {
  database.ref('comment/236/').on('value', function(snapshot) {
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
    document.getElementById('averageRating236').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating236();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[236]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating236"></div>';
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
            window.location.href = 'tovar-7.html?id=236';
        });
    }); 
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating237() {
  database.ref('comment/237/').on('value', function(snapshot) {
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
    document.getElementById('averageRating237').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating237();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[237]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating237"></div>';
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
            window.location.href = 'tovar-7.html?id=237';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating238() {
  database.ref('comment/238/').on('value', function(snapshot) {
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
    document.getElementById('averageRating238').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating238();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[238]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating238"></div>';
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
            window.location.href = 'tovar-7.html?id=238';
        });
    }); 
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating239() {
  database.ref('comment/239/').on('value', function(snapshot) {
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
    document.getElementById('averageRating239').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating239();
}); 
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[239]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating239"></div>';
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
            window.location.href = 'tovar-7.html?id=239';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating240() {
  database.ref('comment/240/').on('value', function(snapshot) {
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
    document.getElementById('averageRating240').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating240();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[240]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating240"></div>';
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
            window.location.href = 'tovar-7.html?id=240';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating241() {
  database.ref('comment/241/').on('value', function(snapshot) {
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
    document.getElementById('averageRating241').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating241();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[241]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating241"></div>';
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
            window.location.href = 'tovar-7.html?id=241';
        });
    });   
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating242() {
  database.ref('comment/242/').on('value', function(snapshot) {
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
    document.getElementById('averageRating242').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating242();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[242]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating242"></div>';
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
            window.location.href = 'tovar-7.html?id=242';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating243() {
  database.ref('comment/243/').on('value', function(snapshot) {
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
    document.getElementById('averageRating243').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating243();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[243]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating243"></div>';
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
            window.location.href = 'tovar-7.html?id=243';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating244() {
  database.ref('comment/244/').on('value', function(snapshot) {
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
    document.getElementById('averageRating244').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating244();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[244]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating244"></div>';
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
            window.location.href = 'tovar-7.html?id=244';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating245() {
  database.ref('comment/245/').on('value', function(snapshot) {
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
    document.getElementById('averageRating245').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating245();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[245]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating245"></div>';
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
            window.location.href = 'tovar-7.html?id=245';
        });
    }); 
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating246() {
  database.ref('comment/246/').on('value', function(snapshot) {
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
    document.getElementById('averageRating246').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating246();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[246]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating246"></div>';
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
            window.location.href = 'tovar-5.html?id=246';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating247() {
  database.ref('comment/247/').on('value', function(snapshot) {
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
    document.getElementById('averageRating247').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating247();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[247]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating247"></div>';
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
            window.location.href = 'tovar-7.html?id=247';
        });
    }); 
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating248() {
  database.ref('comment/248/').on('value', function(snapshot) {
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
    document.getElementById('averageRating248').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating248();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[248]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating248"></div>';
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
            window.location.href = 'tovar-5.html?id=248';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating249() {
  database.ref('comment/249/').on('value', function(snapshot) {
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
    document.getElementById('averageRating249').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating249();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[249]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating249"></div>';
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
            window.location.href = 'tovar-7.html?id=249';
        });
    }); 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating250() {
  database.ref('comment/250/').on('value', function(snapshot) {
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
    document.getElementById('averageRating250').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating250();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/goodsPatriotic/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[250]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating250"></div>';
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
            window.location.href = 'tovar-7.html?id=250';
        });
    });  