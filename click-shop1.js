document.getElementById("icon-shop").addEventListener("click", function() {
      document.getElementById("shopping").classList.toggle("open");
    });

    document.querySelector(".closeBtn").addEventListener("click", function() {
      document.getElementById("shopping").classList.remove("open");
    });