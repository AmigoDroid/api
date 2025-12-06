 function generateId() {
    return `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
  }

  function gerarIdUnico() {
  const timestamp = Date.now().toString(36);  // Obtém o timestamp atual e converte para base 36 (alfabético + numérico)
  const randomPart = Math.random().toString(36).substring(2, 10);  // Gera uma string aleatória em base 36
  
  return `${timestamp}${randomPart}`;
}

  export { generateId ,gerarIdUnico};