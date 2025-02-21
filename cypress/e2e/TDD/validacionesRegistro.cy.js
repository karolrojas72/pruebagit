import { validarNombreOApellido, validarCorreo, validarLongitudYClasesContraseña, validarConfirmacionContraseña } from './validacionesRegistro';

describe('Pruebas unitarias de validaciones', () => {
  
  it('Validar que los nombres y apellidos solo contengan letras', () => {
    expect(validarNombreOApellido("John")).to.equal("");
    expect(validarNombreOApellido("José Pérez")).to.equal("");
    expect(validarNombreOApellido("John123")).to.equal("This field only allows letters.");
    expect(validarNombreOApellido("John@Doe")).to.equal("This field only allows letters.");
  });

  it('Validar el formato del correo electrónico', () => {
    expect(validarCorreo("tesr@")).to.equal("Please enter a valid email address (Ex: johndoe@domain.com).");
    expect(validarCorreo("usuario@dominio.com")).to.equal("");
  });

  it('Validar la longitud mínima y las clases de caracteres en la contraseña', () => {
    expect(validarLongitudYClasesContraseña("12345")).to.equal("Minimum length of this field must be equal or greater than 8 symbols.");
    expect(validarLongitudYClasesContraseña("abcdefg1")).to.equal("Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    expect(validarLongitudYClasesContraseña("Abc12345")).to.equal("");
    expect(validarLongitudYClasesContraseña("A!b3cdef")).to.equal("");
    
  });

  it('Validar que las contraseñas coincidan', () => {
    expect(validarConfirmacionContraseña("Testing123", "147q")).to.equal("Please enter the same value again.");
    expect(validarConfirmacionContraseña("Testing123", "Testing123")).to.equal("");
  });

});
