const btn = document.getElementById('btn');




document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function() {
    const value = parseInt(this.getAttribute('data-value'));
    // Отправка значения рейтинга в базу данных Firebase
    
    // Установка активного состояния для всех звезд до выбранной звезды
    document.querySelectorAll('.star').forEach(s => {
      s.classList.remove('active');
      if (parseInt(s.getAttribute('data-value')) <= value) {
        s.classList.add('active');
      }
    });
  });
});




// Function to handle rating selection
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function() {
    const rating = this.getAttribute('data-value');
    const productId = getProductIDFromURL(); // Get the product id from the URL
    document.getElementById('sendComment').setAttribute('data-rating', rating);
    document.getElementById('sendComment').setAttribute('data-product-id', productId); // Set the product id to the sendComment button
  });
});

// Function to send comment to the database
function sendComment() {
  const rating = document.getElementById('sendComment').getAttribute('data-rating');
  const comment = document.getElementById('comment').value;
  const productId = document.getElementById('sendComment').getAttribute('data-product-id'); // Get the product id

  if (rating && comment && productId) { // Check if all values are available
    database.ref('comment').child(productId).push({ // Save the comment under the specific product id
      rating: rating,
      comment: comment
    }, function(error) {
      if (error) {
        console.log('Error occurred while saving comment:', error);
      } else {
        console.log('Comment saved successfully!');
        // Perform any additional actions after saving comment
      }
    });
  } else {
    console.log('Please select a rating, enter a comment, and select a product!');
  }
}

function getProductIDFromURL() {
  const url = window.location.href;
  const idIndex = url.indexOf('id=') + 3;
  return url.slice(idIndex);
}












  // Function to close the modal
function close_modal_comment() {
  document.getElementById('modal').style.display = 'none';
}