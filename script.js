const pass_field = document.querySelector("input");
const show_btn = document.querySelector("i");

show_btn.addEventListener("click", function(){
  if(pass_field.type === "password"){
    pass_field.type = "text"; // Change input type to text (showing the password)
    show_btn.classList.add("hide"); // Add 'hide' class to the eye icon
  } else {
    pass_field.type = "password"; // Change input type back to password (hiding the password)
    show_btn.classList.remove("hide"); // Remove 'hide' class from the eye icon
  }
});
