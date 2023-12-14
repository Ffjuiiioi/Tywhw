var database = firebase.database();

const averageRating100 = document.getElementById('averageRating100');
const averageRating101 = document.getElementById('averageRating101');
const averageRating102 = document.getElementById('averageRating102');
const averageRating103 = document.getElementById('averageRating103');
const averageRating104 = document.getElementById('averageRating104');
const averageRating105 = document.getElementById('averageRating105');
const averageRating106 = document.getElementById('averageRating106');
const averageRating107 = document.getElementById('averageRating107');
const averageRating108 = document.getElementById('averageRating108');
const averageRating109 = document.getElementById('averageRating109');
const averageRating110 = document.getElementById('averageRating110');
const averageRating111 = document.getElementById('averageRating111');
const averageRating112 = document.getElementById('averageRating112');
const averageRating113 = document.getElementById('averageRating113');
const averageRating114 = document.getElementById('averageRating114');
const averageRating115 = document.getElementById('averageRating115');
const averageRating116 = document.getElementById('averageRating117');
const averageRating117 = document.getElementById('averageRating117');
const averageRating118 = document.getElementById('averageRating118');
const averageRating119 = document.getElementById('averageRating119');
const averageRating120 = document.getElementById('averageRating120');
const averageRating121 = document.getElementById('averageRating121');
const averageRating122 = document.getElementById('averageRating122');
const averageRating123 = document.getElementById('averageRating123');
const averageRating124 = document.getElementById('averageRating124');
const averageRating125 = document.getElementById('averageRating125');
const averageRating126 = document.getElementById('averageRating126');
const averageRating127 = document.getElementById('averageRating127');
const averageRating128 = document.getElementById('averageRating128');
const averageRating129 = document.getElementById('averageRating129');
const averageRating130 = document.getElementById('averageRating130');
const averageRating131 = document.getElementById('averageRating131');
const averageRating132 = document.getElementById('averageRating132');
const averageRating133 = document.getElementById('averageRating133');
const averageRating134 = document.getElementById('averageRating134');
const averageRating135 = document.getElementById('averageRating135');
const averageRating136 = document.getElementById('averageRating136');
const averageRating137 = document.getElementById('averageRating137');
const averageRating138 = document.getElementById('averageRating138');
const averageRating139 = document.getElementById('averageRating139');
const averageRating140 = document.getElementById('averageRating140');
const averageRating141 = document.getElementById('averageRating141');
const averageRating142 = document.getElementById('averageRating142');
const averageRating143 = document.getElementById('averageRating143');
const averageRating144 = document.getElementById('averageRating144');
const averageRating145 = document.getElementById('averageRating145');
const averageRating146 = document.getElementById('averageRating146');
const averageRating147 = document.getElementById('averageRating147');
const averageRating148 = document.getElementById('averageRating148');
const averageRating149 = document.getElementById('averageRating149');





document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating100() {
  database.ref('comment/100/').on('value', function(snapshot) {
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
    document.getElementById('averageRating100').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating100();
});


// Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[100]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating100"></div>';
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
            window.location.href = 'tovar-5.html?id=100';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating101() {
  database.ref('comment/101/').on('value', function(snapshot) {
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
    document.getElementById('averageRating101').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating101();
});
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[101]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating101"></div>';
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
            window.location.href = 'tovar-5.html?id=101';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating102() {
  database.ref('comment/102/').on('value', function(snapshot) {
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
    document.getElementById('averageRating102').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating102();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[102]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating102"></div>';
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
            window.location.href = 'tovar-5.html?id=102';
        });
    });  
    
    
    
   
  
  
  document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating103() {
  database.ref('comment/103/').on('value', function(snapshot) {
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
    document.getElementById('averageRating103').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating103();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[103]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating103"></div>';
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
            window.location.href = 'tovar-5.html?id=103';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating104() {
  database.ref('comment/104/').on('value', function(snapshot) {
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
    document.getElementById('averageRating104').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating104();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[104]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating104"></div>';
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
            window.location.href = 'tovar-5.html?id=104';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating105() {
  database.ref('comment/105/').on('value', function(snapshot) {
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
    document.getElementById('averageRating105').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating105();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[105]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating105"></div>';
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
            window.location.href = 'tovar-5.html?id=105';
        });
    });  
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating106() {
  database.ref('comment/106/').on('value', function(snapshot) {
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
    document.getElementById('averageRating106').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating106();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[106]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating106"></div>';
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
            window.location.href = 'tovar-5.html?id=106';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating107() {
  database.ref('comment/107/').on('value', function(snapshot) {
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
    document.getElementById('averageRating107').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating107();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[107]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating107"></div>';
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
            window.location.href = 'tovar-5.html?id=107';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating108() {
  database.ref('comment/108/').on('value', function(snapshot) {
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
    document.getElementById('averageRating108').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating108();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[108]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating108"></div>';
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
            window.location.href = 'tovar-5.html?id=108';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating109() {
  database.ref('comment/109/').on('value', function(snapshot) {
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
    document.getElementById('averageRating109').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating109();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[109]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating109"></div>';
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
            window.location.href = 'tovar-5.html?id=109';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating110() {
  database.ref('comment/110/').on('value', function(snapshot) {
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
    document.getElementById('averageRating110').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating110();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[110]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating110"></div>';
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
            window.location.href = 'tovar-5.html?id=110';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating111() {
  database.ref('comment/111/').on('value', function(snapshot) {
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
    document.getElementById('averageRating111').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating111();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[111]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating111"></div>';
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
            window.location.href = 'tovar-5.html?id=111';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating112() {
  database.ref('comment/112/').on('value', function(snapshot) {
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
    document.getElementById('averageRating112').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating112();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[112]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating112"></div>';
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
            window.location.href = 'tovar-5.html?id=112';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating113() {
  database.ref('comment/113/').on('value', function(snapshot) {
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
    document.getElementById('averageRating113').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating113();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[113]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating113"></div>';
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
            window.location.href = 'tovar-5.html?id=113';
        });
    });  
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating114() {
  database.ref('comment/114/').on('value', function(snapshot) {
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
    document.getElementById('averageRating114').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating114();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[114]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating114"></div>';
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
            window.location.href = 'tovar-5.html?id=114';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating115() {
  database.ref('comment/115/').on('value', function(snapshot) {
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
    document.getElementById('averageRating115').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating115();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[115]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating115"></div>';
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
            window.location.href = 'tovar-5.html?id=115';
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating116() {
  database.ref('comment/116/').on('value', function(snapshot) {
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
    document.getElementById('averageRating116').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating116();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[116]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating116"></div>';
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
            window.location.href = 'tovar-5.html?id=116';
        });
    });  
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating117() {
  database.ref('comment/117/').on('value', function(snapshot) {
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
    document.getElementById('averageRating117').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating117();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[117]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating117"></div>';
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
            window.location.href = 'tovar-5.html?id=117';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating118() {
  database.ref('comment/118/').on('value', function(snapshot) {
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
    document.getElementById('averageRating118').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating118();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[118]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating118"></div>';
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
            window.location.href = 'tovar-5.html?id=118';
        });
    });
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating119() {
  database.ref('comment/119/').on('value', function(snapshot) {
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
    document.getElementById('averageRating119').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating119();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[119]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating119"></div>';
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
            window.location.href = 'tovar-5.html?id=119';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating120() {
  database.ref('comment/120/').on('value', function(snapshot) {
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
    document.getElementById('averageRating120').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating120();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[120]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating120"></div>';
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
            window.location.href = 'tovar-5.html?id=120';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating121() {
  database.ref('comment/121/').on('value', function(snapshot) {
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
    document.getElementById('averageRating121').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating121();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[121]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating121"></div>';
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
            window.location.href = 'tovar-5.html?id=121';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating122() {
  database.ref('comment/122/').on('value', function(snapshot) {
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
    document.getElementById('averageRating122').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating122();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[ 122]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating122"></div>';
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
            window.location.href = 'tovar-5.html?id=122';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating123() {
  database.ref('comment/123/').on('value', function(snapshot) {
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
    document.getElementById('averageRating123').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating123();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[123]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating123"></div>';
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
            window.location.href = 'tovar-5.html?id=123';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating124() {
  database.ref('comment/124/').on('value', function(snapshot) {
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
    document.getElementById('averageRating124').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating124();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[124]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating124"></div>';
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
            window.location.href = 'tovar-5.html?id=124';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating125() {
  database.ref('comment/125/').on('value', function(snapshot) {
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
    document.getElementById('averageRating125').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating125();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[125]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating125"></div>';
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
            window.location.href = 'tovar-5.html?id=125';
        });
    });  
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating126() {
  database.ref('comment/126/').on('value', function(snapshot) {
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
    document.getElementById('averageRating126').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating126();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[126]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating126"></div>';
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
            window.location.href = 'tovar-5.html?id=126';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating127() {
  database.ref('comment/127/').on('value', function(snapshot) {
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
    document.getElementById('averageRating127').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating127();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[127]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating127"></div>';
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
            window.location.href = 'tovar-5.html?id=127';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating128() {
  database.ref('comment/128/').on('value', function(snapshot) {
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
    document.getElementById('averageRating128').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating128();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[128]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating128"></div>';
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
            window.location.href = 'tovar-5.html?id=128';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating129() {
  database.ref('comment/129/').on('value', function(snapshot) {
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
    document.getElementById('averageRating129').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating129();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[129]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating129"></div>';
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
            window.location.href = 'tovar-5.html?id=129';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating130() {
  database.ref('comment/130/').on('value', function(snapshot) {
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
    document.getElementById('averageRating130').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating130();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[130]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating130"></div>';
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
            window.location.href = 'tovar-5.html?id=130';
        });
    });  
    
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating131() {
  database.ref('comment/131/').on('value', function(snapshot) {
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
    document.getElementById('averageRating131').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating131();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[131]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating131"></div>';
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
            window.location.href = 'tovar-5.html?id=131';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating132() {
  database.ref('comment/132/').on('value', function(snapshot) {
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
    document.getElementById('averageRating132').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating132();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[132]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating132"></div>';
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
            window.location.href = 'tovar-5.html?id=132';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating133() {
  database.ref('comment/133/').on('value', function(snapshot) {
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
    document.getElementById('averageRating133').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating133();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[133]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating133"></div>';
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
            window.location.href = 'tovar-5.html?id=133';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating134() {
  database.ref('comment/134/').on('value', function(snapshot) {
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
    document.getElementById('averageRating134').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating134();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[134]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating134"></div>';
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
            window.location.href = 'tovar-5.html?id=134';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating135() {
  database.ref('comment/135/').on('value', function(snapshot) {
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
    document.getElementById('averageRating135').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating135();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[135]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating135"></div>';
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
            window.location.href = 'tovar-5.html?id=135';
        });
    }); 
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating136() {
  database.ref('comment/136/').on('value', function(snapshot) {
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
    document.getElementById('averageRating136').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating136();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[136]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating136"></div>';
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
            window.location.href = 'tovar-5.html?id=136';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating137() {
  database.ref('comment/137/').on('value', function(snapshot) {
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
    document.getElementById('averageRating137').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating137();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[137]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating137"></div>';
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
            window.location.href = 'tovar-5.html?id=137';
        });
    }); 
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating138() {
  database.ref('comment/138/').on('value', function(snapshot) {
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
    document.getElementById('averageRating138').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating138();
}); 
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[138]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating138"></div>';
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
            window.location.href = 'tovar-5.html?id=138';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating139() {
  database.ref('comment/139/').on('value', function(snapshot) {
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
    document.getElementById('averageRating139').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating139();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[139]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating139"></div>';
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
            window.location.href = 'tovar-5.html?id=139';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating140() {
  database.ref('comment/140/').on('value', function(snapshot) {
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
    document.getElementById('averageRating140').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating140();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[140]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating140"></div>';
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
            window.location.href = 'tovar-5.html?id=140';
        });
    });   
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating141() {
  database.ref('comment/141/').on('value', function(snapshot) {
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
    document.getElementById('averageRating141').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating141();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[141]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating141"></div>';
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
            window.location.href = 'tovar-5.html?id=141';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating142() {
  database.ref('comment/142/').on('value', function(snapshot) {
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
    document.getElementById('averageRating142').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating142();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[142]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating142"></div>';
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
            window.location.href = 'tovar-5.html?id=142';
        });
    });  
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating143() {
  database.ref('comment/143/').on('value', function(snapshot) {
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
    document.getElementById('averageRating143').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating143();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[143]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating143"></div>';
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
            window.location.href = 'tovar-5.html?id=143';
        });
    });  
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating144() {
  database.ref('comment/144/').on('value', function(snapshot) {
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
    document.getElementById('averageRating144').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating144();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[144]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating144"></div>';
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
            window.location.href = 'tovar-5.html?id=144';
        });
    }); 
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating145() {
  database.ref('comment/145/').on('value', function(snapshot) {
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
    document.getElementById('averageRating145').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating145();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[145]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating145"></div>';
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
            window.location.href = 'tovar-5.html?id=145';
        });
    });  
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating146() {
  database.ref('comment/146/').on('value', function(snapshot) {
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
    document.getElementById('averageRating146').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating146();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[146]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating146"></div>';
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
            window.location.href = 'tovar-5.html?id=146';
        });
    }); 
    
    
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating147() {
  database.ref('comment/147/').on('value', function(snapshot) {
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
    document.getElementById('averageRating147').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating147();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[147]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating147"></div>';
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
            window.location.href = 'tovar-5.html?id=147';
        });
    });  
    
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating148() {
  database.ref('comment/148/').on('value', function(snapshot) {
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
    document.getElementById('averageRating148').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating148();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[148]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating148"></div>';
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
            window.location.href = 'tovar-5.html?id=148';
        });
    }); 
    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating149() {
  database.ref('comment/149/').on('value', function(snapshot) {
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
    document.getElementById('averageRating149').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
  calculateAverageRating149();
});
    
    
    // Получение данных из Firebase Database
database.ref('product/smartGoodsDlaCholovikiv/').once('value')
   // Обработка данных
   .then((snapshot) => {
        const products = snapshot.val();
        const product = products[149]; // Получаем только первый товар из коллекции
        
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
                    starIcon.innerHTML = '<div id="averageRating149"></div>';
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
            window.location.href = 'tovar-5.html?id=149';
        });
    });  