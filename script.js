//Script para criar o botão de volta ao topo em cada página.

window.onscroll = function() {scrollFunction()};

function scrollFunction() { /*Posição do scroll > 20, exibe o botão*/
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-topo").style.display = "block";
  } else {
    document.getElementById("btn-topo").style.display = "none";
  }
}

/*Define a posição inicial, o topo da página*/
document.getElementById("btn-topo").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}