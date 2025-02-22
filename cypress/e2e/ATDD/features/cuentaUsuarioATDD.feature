@login
Feature: Cuenta de usuario registrada
Como usuario registrado en la página Luma 
Quiero acceder a mi cuenta 
Para actualizar la información de mi perfil

Scenario: Cambio de dirección de facturación
Given que el usuario ha seleccionado la opción "Address Book"
When el usuario hace clic en el enlace "Change Billing Address" 
Then se redirige al usuario al formulario "Edit Address"

Scenario: Cambio del campo Phone Number
Given que el usuario ha seleccionado la opción "Address Book" 
When el usuario hace clic en el enlace "Change Billing Address" 
Then se redirige al usuario al formulario "Edit Address" y se muestra el campo "Phone Number"
When el usuario ingresa un nuevo valor en el campo "Phone Number" y hace clic en "Save Address"
Then se muestra el mensaje de confirmación "You saved the address."

Scenario: Adicionar una nueva dirección 
Given que el usuario ha seleccionado la opción "Address Book"
When el usuario hace clic en "Add New Address"
Then se redirige al usuario al formulario de edición de dirección      

Scenario: Validación de mis ordenes realizadas 
Given que el usuario ha seleccionado la opción "My Orders" 
When el usuario hace clic en el enlace "View Order" 
Then se redirige al usuario a la página de detalles de la orden

@skip
Scenario: Compartir la lista de productos favoritos
Given el usuario ha seleccionado la opción "My Wish List"
When el usuario hace clic en el botón "Share Wish List"
Then se redirige el usuario a la página de compartir lista de deseos

@skip
Scenario: Validar que la lista de productos favoritos se comparte con éxito
Given el usuario ha seleccionado la opción "My Wish List"
When el usuario hace clic en el botón "Share Wish List" 
Then el usuario ingresa un valor en el campo "Email Address" y hace clic en "Share Wish List"
Then se muestra el mensaje de lista compartida "Your wish list has been shared."

Scenario: Cambiar la contraseña 
Given que el usuario ha seleccionado la opción "Account Information" y ha marcado la casilla "Change Password"
When se carga la contraseña actual "Current Password", el usuario ingresa una "Mundo123*", la confirma en "Mundo123*" y hace clic en "Save"
Then se redirige al usuario a la página de inicio de sesión y se muestra el mensaje de éxito "You saved the account information." 