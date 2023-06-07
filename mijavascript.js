let opcionProducto;
let precioProducto = 0;
let cantidadProducto = "";
let continuarComprando;
let total = 0;

function cuidadoFacial(total, precio, cantidad) {
  opcionProducto = parseInt(
    prompt(
      "Ingrese el producto que desea agregar al carrito:" +
        "\n" +
        "1= Pulpa de limpieza $3240" +
        "\n" +
        "2= Serum revitalizador $4620" +
        "\n" +
        "3= Crema hidratante $5040" +
        "\n" +
        "4= Mascarilla de carbón $2520"
    )
  );

  switch (opcionProducto) {
    case 1:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 3240 * cantidadProducto);
      break;
    case 2:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 4620 * cantidadProducto);
      break;
    case 3:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 5040 * cantidadProducto);
      break;
    case 4:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 2520 * cantidadProducto);
  }
  return total + precio * cantidad;
}

function cuidadoCorporal(resultado, precio, cantidad) {
  opcionProducto = parseInt(
    prompt(
      "Ingrese el producto que desea agregar al carrito:" +
        "\n" +
        "1= Jabón corporal $950" +
        "\n" +
        "2= Crema corporal $4200" +
        "\n" +
        "3= Crema de manos $3300"
    )
  );
  switch (opcionProducto) {
    case 1:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 950 * cantidadProducto);
    case 2:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 4200 * cantidadProducto);
    case 3:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 3300 * cantidadProducto);
  }
  return resultado + precio * cantidad;
}
function cuidadoCapilar(resultado, precio, cantidad) {
  opcionProducto = parseInt(
    prompt(
      "Ingrese el producto que desea agregar al carrito:" +
        "\n" +
        "1= Shampoo sólido $950" +
        "\n" +
        "2= Acondicionador sólido 4200"
    )
  );
  switch (opcionProducto) {
    case 1:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 950 * cantidadProducto);
    case 2:
      cantidadProducto = parseInt(prompt("Ingrese la cantidad que prefiere:"));
      return (precio = 950 * cantidadProducto);
  }
  return resultado + precio * cantidad;
}

alert('"Bienvidxs a Raíces, cosmética natural"');
do {
  let categoria = parseInt(
    prompt(
      "Seleccione la categoría de productos que prefiere:" +
        "\n" +
        "1- Cuidado facial" +
        "\n" +
        "2- Cuidado corporal" +
        "\n" +
        "3- Cuidado capilar"
    )
  );

  switch (categoria) {
    case 1:
      precioProducto = cuidadoFacial();
      break;
    case 2:
      precioProducto = cuidadoCorporal();
      break;
    case 3:
      precioProducto = cuidadoCapilar();
  }

  total += precioProducto;
  continuarComprando = prompt(
    "Desea continuar agregando productos al carrito? Si / No"
  );
} while (continuarComprando.toLowerCase() !== "no");

alert("El total del carrito es de $" + total);
