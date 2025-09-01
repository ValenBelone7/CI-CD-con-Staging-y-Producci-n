function formateaPrecio(n) {
  return Number(n).toFixed(2);
}

console.assert(formateaPrecio(10) === "10.00", "formateaPrecio(10) debe ser '10.00'");
console.assert(formateaPrecio(5) === "5.00", "formateaPrecio(5) debe ser '5.00'");

console.log("✅ Tests OK");