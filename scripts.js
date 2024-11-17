// Seleciona o formulário e os campos de entrada
const form = document.getElementById("cadastroForm");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");

// Valores simulados para validação
const validEmail = "lidianesantos@email.com";
const validPassword = "123456";

// Adiciona evento ao formulário
form.addEventListener("submit", function (event) {
  // Evita o envio do formulário

  // Obtém valores dos campos
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validação dos campos
  if (email === validEmail && password === validPassword) {
    alert("✅ Login realizado com sucesso!");
  } else {
    alert("❌ Usuário ou senha incorretos. Tente novamente.");
  }
});
