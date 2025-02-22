Feature: Proceso de compra de un usuario registrado
  Como usuario registrado en la página Luma
  Quiero agregar productos al carrito y completar la compra
  Para realizar una transacción exitosa

  Scenario: Agregar un producto al carrito
    Given que el usuario está en la página de productos
    When selecciona el producto "Hero Hoodie" con tamaño "M", color "Green" y cantidad "2" y lo añade al carrito
    Then verifica que el producto se añadió con éxito al carrito mostrando el mensaje "You added Hero Hoodie to your shopping cart."

  Scenario: Completar el proceso de compra exitosamente
    Given que el usuario tiene productos en el carrito
    When abre el carrito y procede al checkout
    And el sistema autocompleta los campos de dirección de envío y facturación
    And avanza a la sección de revisión y pago
    And verifica la información del pedido en la sección "Payment Method"
    And confirma la compra al hacer clic en "Place Order"
    Then el sistema muestra el mensaje de éxito "Thank you for your purchase!"

  Scenario: Validar que el sistema autocompleta los campos de Nombre y Apellido para un usuario que ha iniciado sesión
    Given que el usuario ha iniciado sesión y está en la página de checkout
    When procede a la sección "Shipping Address"
    Then los campos "First Name" y "Last Name" están autocompletados con la información del usuario
