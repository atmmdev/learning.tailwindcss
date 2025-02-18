const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMessage = document.getElementById("err-msg");

function formSubmit(e) {
  e.preventDefault();
console.log('Funcionando novamente')
  if (input.value === "") {
    errMessage.innerHTML = "Please enter something";
    input.classList.add("border-red");
  }
}
linkForm.addEventListener("submit", formSubmit);

// Validade a URL
function validURL() {

}