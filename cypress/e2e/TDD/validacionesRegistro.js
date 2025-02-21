export const validarNombreOApellido = (valor) => {
    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regexSoloLetras.test(valor)
      ? ""
      : "This field only allows letters.";
  };
  
  export const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexCorreo.test(correo)
      ? ""
      : "Please enter a valid email address (Ex: johndoe@domain.com).";
  };
  
  export const validarLongitudYClasesContraseña = (contraseña) => {
    if (contraseña.length < 8) {
      return "Minimum length of this field must be equal or greater than 8 symbols.";
    }
  
    const clases = [
      /[a-z]/,  // Minúsculas
      /[A-Z]/,  // Mayúsculas
      /\d/,     // Dígitos
      /[^a-zA-Z0-9]/ // Caracteres especiales
    ];
  
    const clasesEncontradas = clases.filter((regex) => regex.test(contraseña)).length;
  
    return clasesEncontradas >= 3
      ? ""
      : "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.";
  };
  
  export const validarConfirmacionContraseña = (contraseña, confirmacion) => {
    return contraseña === confirmacion
      ? ""
      : "Please enter the same value again.";
  };
  