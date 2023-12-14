const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const commentInput = document.getElementById("comment");
const submitBtn = document.getElementById("vdprvt");


// Add event listener to submit button
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const name = nameInput.value;
  const phone = phoneInput.value;
  const comment = commentInput.value;

  // Validate input values
  if (!name || !phone || !comment) {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  // Save data to Firebase database
  database.ref('contacts').push({
    name: name,
    phone: phone,
    comment: comment
  });

  // Clear form inputs
  nameInput.value = "";
  phoneInput.value = "";
  commentInput.value = "";
  
  // Display message to user
  alert("Дякуємо за звернення! Очікуйте, скоро з вами зв'яжуться.");
});