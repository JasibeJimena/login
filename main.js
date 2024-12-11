alert("Bievenidos ")
var button = document.getElementById('boton')


button.addEventListener('click', (e) => {
    e.preventDefault()
    var username = document.getElementById('user').value
    var password = document.getElementById('pass').value

    if(username == "manuel" && password == "1234"){
        window.location = "lista_materias.html";
    }else{
        alert("Datos incorrectos")
    }
    
})
