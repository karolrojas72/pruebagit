Feature: Formulario de registro de usuario
  Como usuario del sitio
  Quiero registrarme
  Para poder comprar productos

Scenario: Registro de usuario con campos obligatorios vacíos
Given el usuario accede al formulario de registro
When da clic en el botón "Create an Account" sin ingresar los campos obligatorios "First Name" y "Last Name"
Then se genera el mensaje de validación para cada campo "This is a required field." "This is a required field."

Scenario: Registro de usuario exitoso
Given el usuario accede al formulario de registro
When da clic en el botón "Create an Account" con todos los campos obligatorios "Juana" "Rojas" "p89iR@domi.co" "Juan123*" "Juan123*" diligenciados
Then verifica si el registro fue exitoso "Thank you for registering with Main Website Store." 

Scenario: Registro de usuario con email existente
Given el usuario accede al formulario de registro
When ingresa todos los campos "Mario" "Garcia" "trea87@domi.co" "Mario123*" "Mario123*" al dar clic en el botón "Create an Account" con un correo electrónico existente 
Then verifica si el correo ya existe "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."

Scenario: Validar formato de correo
Given el usuario accede al formulario de registro
When ingresa un correo electrónico inválido "tesr@"
Then se genera el mensaje de validación para el campo de correo "Please enter a valid email address (Ex: johndoe@domain.com)."

Scenario: Validar longitud mínima de contraseña
Given el usuario accede al formulario de registro
When ingresa una contraseña inferior a la longitud mínima "147q"
Then se genera el mensaje de validación para el campo de contraseña "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."

Scenario: Validar campo confirmación de contraseña
Given el usuario accede al formulario de registro 
When ingresa la contraseña "Testing123" y confirma una contraseña diferente a la ingresada "147q"
Then se genera el mensaje de validación para el campo confirmar contraseña "Please enter the same value again."