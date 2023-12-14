// Function to calculate average rating
function calculateAverageRating1() {
  database.ref('comment/1/').on('value', function(snapshot) {
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
    document.getElementById('averageRating1').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}

// Call the calculateAverageRating function
calculateAverageRating1();





document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating2() {
    database.ref('comment/2/').on('value', function(snapshot) {
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
      document.getElementById('averageRating2').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating2();
});







document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating3() {
    database.ref('comment/3/').on('value', function(snapshot) {
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
      document.getElementById('averageRating3').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating3();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating4() {
    database.ref('comment/4/').on('value', function(snapshot) {
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
      document.getElementById('averageRating4').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating4();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating5() {
    database.ref('comment/5/').on('value', function(snapshot) {
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
      document.getElementById('averageRating5').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating5();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating6() {
    database.ref('comment/6/').on('value', function(snapshot) {
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
      document.getElementById('averageRating6').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating6();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating7() {
    database.ref('comment/7/').on('value', function(snapshot) {
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
      document.getElementById('averageRating7').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating7();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating8() {
    database.ref('comment/8/').on('value', function(snapshot) {
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
      document.getElementById('averageRating8').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating8();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating9() {
    database.ref('comment/9/').on('value', function(snapshot) {
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
      document.getElementById('averageRating9').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating9();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating10() {
    database.ref('comment/10/').on('value', function(snapshot) {
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
      document.getElementById('averageRating10').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating10();
});




document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating11() {
    database.ref('comment/11/').on('value', function(snapshot) {
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
      document.getElementById('averageRating11').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating11();
});






document.addEventListener('DOMContentLoaded', function() {

// Function to calculate average rating
function calculateAverageRating12() {
  database.ref('comment/12/').on('value', function(snapshot) {
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
    document.getElementById('averageRating12').innerHTML = stars + ' ' + averageRating.toFixed(1);
  });
}



// Call the calculateAverageRating function
  calculateAverageRating12();
});







document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating13() {
    database.ref('comment/13/').on('value', function(snapshot) {
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
      document.getElementById('averageRating13').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating13();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating14() {
    database.ref('comment/14/').on('value', function(snapshot) {
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
      document.getElementById('averageRating14').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating14();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating15() {
    database.ref('comment/15/').on('value', function(snapshot) {
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
      document.getElementById('averageRating15').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating15();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating16() {
    database.ref('comment/16/').on('value', function(snapshot) {
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
      document.getElementById('averageRating16').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating16();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating17() {
    database.ref('comment/17/').on('value', function(snapshot) {
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
      document.getElementById('averageRating17').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating17();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating18() {
    database.ref('comment/18/').on('value', function(snapshot) {
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
      document.getElementById('averageRating18').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating18();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating19() {
    database.ref('comment/19/').on('value', function(snapshot) {
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
      document.getElementById('averageRating19').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating19();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating20() {
    database.ref('comment/20/').on('value', function(snapshot) {
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
      document.getElementById('averageRating20').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating20();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating21() {
    database.ref('comment/21/').on('value', function(snapshot) {
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
      document.getElementById('averageRating21').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating21();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating22() {
    database.ref('comment/22/').on('value', function(snapshot) {
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
      document.getElementById('averageRating22').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating22();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating23() {
    database.ref('comment/23/').on('value', function(snapshot) {
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
      document.getElementById('averageRating23').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating23();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating24() {
    database.ref('comment/24/').on('value', function(snapshot) {
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
      document.getElementById('averageRating24').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating24();
});


document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating25() {
    database.ref('comment/25/').on('value', function(snapshot) {
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
      document.getElementById('averageRating25').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating25();
});




document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating36() {
    database.ref('comment/36/').on('value', function(snapshot) {
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
      document.getElementById('averageRating36').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating36();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating37() {
    database.ref('comment/37/').on('value', function(snapshot) {
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
      document.getElementById('averageRating37').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating37();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating38() {
    database.ref('comment/38/').on('value', function(snapshot) {
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
      document.getElementById('averageRating38').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating38();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating39() {
    database.ref('comment/39/').on('value', function(snapshot) {
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
      document.getElementById('averageRating39').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating39();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating40() {
    database.ref('comment/40/').on('value', function(snapshot) {
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
      document.getElementById('averageRating40').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating40();
});







document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating39() {
    database.ref('comment/39/').on('value', function(snapshot) {
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
      document.getElementById('averageRating39').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating39();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating50() {
    database.ref('comment/50/').on('value', function(snapshot) {
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
      document.getElementById('averageRating50').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating50();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating51() {
    database.ref('comment/51/').on('value', function(snapshot) {
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
      document.getElementById('averageRating51').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating51();
});



document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating52() {
    database.ref('comment/52/').on('value', function(snapshot) {
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
      document.getElementById('averageRating52').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating52();
});




document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating53() {
    database.ref('comment/53/').on('value', function(snapshot) {
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
      document.getElementById('averageRating53').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating53();
});




document.addEventListener('DOMContentLoaded', function() {

  // Function to calculate average rating
  function calculateAverageRating54() {
    database.ref('comment/54/').on('value', function(snapshot) {
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
      document.getElementById('averageRating54').innerHTML = stars + ' ' + averageRating.toFixed(1);
    });
  }

  // Call the calculateAverageRating function
  calculateAverageRating54();
});


 


