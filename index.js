const Email = document.querySelector("input");
    const form = document.querySelector(".myForm");
    const error = document.querySelector(".errormsg");



    form.addEventListener("submit", function (e) {
      if (Email.value === "" || Email.value == null) {
        Email.style.border = "2px solid orangered";
        error.style.display = "block";
      } else {
        location.reload()
      }
      e.preventDefault();
    });