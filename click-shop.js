document.getElementById("icon-shop").addEventListener("click", function() {
      document.getElementById("shopping").classList.toggle("open");
    });


    document.querySelector(".closeBtn").addEventListener("click", function() {
      document.getElementById("shopping").classList.remove("open");
    });
    
    
    

document.getElementById("dodaty-vidguk").addEventListener("click", function() {
      document.getElementById("comment-modal").classList.toggle("open");
    });
    
    document.querySelector(".closeBtnn").addEventListener("click", function() {
      document.getElementById("comment-modal").classList.remove("open");
    });