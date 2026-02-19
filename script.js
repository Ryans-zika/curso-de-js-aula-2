function adicionarTarefa() {
  //let mensagem = "Tarefa adicionada com sucesso!";

  let inputTarefa = document.getElementById("tarefa");
  let tarefa = inputTarefa.value;
  document.getElementById("mensagem").textContent = tarefa;
  
  inputTarefa.value = "";
}
