
export const cambiarDireccionFacturacion = () => {
    return "Edit Address";
};

export const validarDireccionFacturacion = (direccion) => {
    if (!direccion || direccion.trim() === "") {
        return "Address field cannot be empty.";
    }
    return "Valid address.";
};

export const validarNuevaDireccion = (seccion, accion) => {
    if (seccion !== "Address Book") {
        return "Debe seleccionar 'Address Book'.";
    }
    if (accion !== "Add New Address") {
        return "Acción no válida.";
    }
    return "Address saved successfully.";
};

export const validarFormatoTelefono = (newPhone) => {
    if (!/^\d+$/.test(newPhone)) {
      return "El número de teléfono solo puede contener dígitos.";
    }
    if (newPhone.length < 10) {
      return "El número de teléfono debe tener al menos 10 dígitos.";
    }
    return "You saved the address.";
  };
  
export const validarCambioContraseña = (currentPass, newPass, confirmPass) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (newPass !== confirmPass) {
      return { url: "", message: "Las contraseñas no coinciden." }; // Mensaje esperado en la prueba
    }

    if (!regex.test(newPass)) {
      return { url: "", message: "La contraseña debe tener al menos 8 caracteres y contener mayúsculas, minúsculas, números y caracteres especiales." };
    }
    
    return { url: "customer/account/login", message: "You saved the account information." };
};