const form = document.querySelector("#entrar")
const password = document.querySelector("#password")
const passwordHelp = document.querySelector("#passwordHelp")
const linkDisabled = document.querySelector("#linkDisabled")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (password.value === "") {
		passwordHelp.innerText = "Ingrese contraseña"}
		else if (password.value !== "agusynico") {
			passwordHelp.innerText = "Contraseña incorrecta"
			}

		else {
				console.log("Contraseña correcta")
				form.submit();
				aria.disabled = false;

			}
	
})