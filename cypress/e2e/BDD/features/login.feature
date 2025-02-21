Feature: Inicio de sesión
  Como usuario del sitio
  Quiero iniciar sesión con mis credenciales
  Para acceder a mi cuenta personal

  Scenario: Inicio de sesión con credenciales válidas
   Given que el usuario accede a la página de inicio de sesión
   When ingresa el correo "swaglabs1@yopmail.com", la contraseña "luma123tesT" y da clic en "Sign In"
   Then se redirige al panel de la cuenta y el nombre del usuario está visible en la cabecera