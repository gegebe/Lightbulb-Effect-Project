// Buena suerte ! Espero que se te encianda la "bombilla"!
//document.querySelector("#bulb");
console.log(document.querySelector("#bulb"));

function switchOnBulb() {
  let bombilla = document.querySelector("#bulb");
  //<div id="bulb" class="bulb-off">

  bombilla.classList.toggle("bulb-on");
  //Intercambia class en <div id="bulb" class="bulb-off">
}

//Busca en el documento un elemento con la ID bulb y ponlo a la escucha de que ocurra un evento: clic y ese evento lanza la función switchOnBulb
//document.getElementById("bulb").addEventListener("click", switchOnBulb);

//Este Listener está a la escucha de que que el ratón esté encima del <div>
document.getElementById("bulb").addEventListener("mouseover", switchOnBulb);

//Este Listener está a la escucha de que salga del <div>
document.getElementById("bulb").addEventListener("mouseout", switchOnBulb);