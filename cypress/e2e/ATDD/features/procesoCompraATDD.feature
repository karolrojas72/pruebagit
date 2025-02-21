Feature: Proceso de compra usuario registrado
  Como usuario registrado en la página Luma
  Quiero agregar productos al carrito
  Para poder realizar una compra

  Scenario: Seleccionar y adicionar un producto al carrito
    Given que el usuario está en la página de productos
    When selecciona el producto "Hero Hoodie" con tamaño "M", color "Green" y cantidad "$2" y da clic en "Add to Cart"
    Then verifica si el producto se añade con éxito al carrito "You added Hero Hoodie to your shopping cart."
  
  Scenario: Abrir el carrito y proceder al checkout
    Given que el usuario tiene productos en el carrito
    When da clic en el icono del carrito de compras y luego da clic en "Proceed to Checkout"
    Then se redirije al usuario al formulario "Shipping Address"
  
  Scenario: Validar productos en el carrito y el autocompletado de los datos de envío
    Given que el usuario tiene productos en el carrito
    When accede al checkout y el sistema autocompleta los campos de dirección de envío y facturación
    Then verifica si los campos se completan con la información guardada del usuario registrado
  
  Scenario: Validar la sección de revisión de pedido
    Given que el usuario tiene productos en el carrito
    When accede al checkout y el sistema autocompleta los campos de dirección de envío y facturación
    When da clic en "Next" se redirige a la sección de revisión y pago
    Then se redirije a la seccion "Payment Method" y verifica la información del pedido
      
  Scenario: Realizar el pago exitoso de la orden
    Given que el usuario tiene productos en el carrito
    When accede al checkout y el sistema autocompleta los campos de dirección de envío y facturación
    When da clic en "Next" se redirige a la sección de revisión y pago
    When procede a la sección resumen de pedido y da clic en "Place Order"
    Then se genera el mensaje de éxito de la compra "Thank you for your purchase!"