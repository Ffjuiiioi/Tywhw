document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating70() {
    database.ref('comment/70/').on('value', function(snapshot) {
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
      document.getElementById('averageRating70').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating70();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating71() {
    database.ref('comment/71/').on('value', function(snapshot) {
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
      document.getElementById('averageRating71').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating71();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating72() {
    database.ref('comment/72/').on('value', function(snapshot) {
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
      document.getElementById('averageRating72').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating72();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating73() {
    database.ref('comment/73/').on('value', function(snapshot) {
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
      document.getElementById('averageRating73').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating73();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating74() {
    database.ref('comment/74/').on('value', function(snapshot) {
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
      document.getElementById('averageRating74').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating74();
});

document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating75() {
    database.ref('comment/75/').on('value', function(snapshot) {
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
      document.getElementById('averageRating75').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating75();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating76() {
    database.ref('comment/76/').on('value', function(snapshot) {
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
      document.getElementById('averageRating76').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating76();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating77() {
    database.ref('comment/77/').on('value', function(snapshot) {
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
      document.getElementById('averageRating77').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating77();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating78() {
    database.ref('comment/78/').on('value', function(snapshot) {
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
      document.getElementById('averageRating78').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating78();
});

document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating79() {
    database.ref('comment/79/').on('value', function(snapshot) {
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
      document.getElementById('averageRating79').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating79();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating80() {
    database.ref('comment/80/').on('value', function(snapshot) {
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
      document.getElementById('averageRating80').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating80();
});    


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating81() {
    database.ref('comment/81/').on('value', function(snapshot) {
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
      document.getElementById('averageRating81').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating81();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating82() {
    database.ref('comment/82/').on('value', function(snapshot) {
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
      document.getElementById('averageRating82').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating82();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating83() {
    database.ref('comment/83/').on('value', function(snapshot) {
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
      document.getElementById('averageRating83').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating83();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating84() {
    database.ref('comment/84/').on('value', function(snapshot) {
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
      document.getElementById('averageRating84').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating84();
});