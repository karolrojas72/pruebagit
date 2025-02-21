Feature: Búsqueda y filtrado de productos
  Como usuario del sitio
  Quiero buscar y filtrar productos
  Para encontrar rápidamente lo que necesito

  Scenario: Búsqueda de productos y aplicación de filtros
    Given que el usuario está en la página principal
    When el usuario selecciona la opción "Women"
    And el usuario selecciona la categoría "Bottoms"
    And el usuario selecciona la subcategoría "Pants"
    Then el sistema muestra solo productos que coinciden con "Pants"

