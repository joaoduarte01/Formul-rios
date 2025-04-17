function validarFormulario() {
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  if (!cpfRegex.test(cpf)) {
    alert("CPF inválido. Use o formato 000.000.000-00.");
    return false;
  }

  if (!telefoneRegex.test(telefone)) {
    alert("Telefone inválido. Use o formato (00) 00000-0000.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("E-mail inválido.");
    return false;
  }

  alert("Formulário enviado com sucesso!");
  return true;
}