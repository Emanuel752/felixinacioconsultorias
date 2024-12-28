function mostrarSubopcoes() {
    const categoria = document.getElementById('curso-principal').value;
    const subopcoes = document.getElementById('curso-subopcoes').options;
  
    // Loop por todas as opções para mostrar/ocultar com base na categoria selecionada
    for (let i = 0; i < subopcoes.length; i++) {
      if (subopcoes[i].className === categoria || subopcoes[i].value === "") {
        subopcoes[i].style.display = 'block';
      } else {
        subopcoes[i].style.display = 'none';
      }
    }
    
    // Resetar seleção ao mudar de categoria
    document.getElementById('curso-subopcoes').value = "";
  }