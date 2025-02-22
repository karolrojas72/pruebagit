import{
    cambiarDireccionFacturacion,
    validarDireccionFacturacion,
    validarNuevaDireccion,
    validarFormatoTelefono,
    validarCambioContraseña   
} from './validacionesCuenta';

describe('Pruebas unitarias de validaciones de cuenta', () => {

  it('Debe redirigir al usuario a "Edit Address" al cambiar dirección de facturación', () => {
        expect(cambiarDireccionFacturacion()).to.equal("Edit Address");
   });
    
  it('Debe mostrar un error si la dirección está vacía', () => {
        expect(validarDireccionFacturacion("")).to.equal("Address field cannot be empty.");
  });

  it('Validar la adición de una nueva dirección', () => {
    expect(validarNuevaDireccion("Address Book", "Add New Address")).to.equal("Address saved successfully.");
    expect(validarNuevaDireccion("", "Add New Address")).to.equal("Debe seleccionar 'Address Book'.");
    expect(validarNuevaDireccion("Address Book", "Otra Acción")).to.equal("Acción no válida.");
  });
      
  it('Validar el formato del número de teléfono', () => {
     expect(validarFormatoTelefono("1234567890")).to.equal("You saved the address.");
     expect(validarFormatoTelefono("abcde12345")).to.equal("El número de teléfono solo puede contener dígitos.");
     expect(validarFormatoTelefono("12345")).to.equal("El número de teléfono debe tener al menos 10 dígitos.");
  });

  it('Validar el cambio de contraseña', () => {
    expect(validarCambioContraseña("Actual123!", "Mundo123*", "Mundo123*").message).to.equal("You saved the account information.");
    expect(validarCambioContraseña("Actual123!", "Mundo123*", "Diferente123!").message).to.equal("Las contraseñas no coinciden.");
    expect(validarCambioContraseña("Actual123!", "12345", "12345").message).to.equal("La contraseña debe tener al menos 8 caracteres y contener mayúsculas, minúsculas, números y caracteres especiales.");
  }); 

});
