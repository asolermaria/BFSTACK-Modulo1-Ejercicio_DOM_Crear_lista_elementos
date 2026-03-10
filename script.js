// Ejercicio 1

const lista = document.getElementById("lista");

// Primer elemento (Forma moderna, usando innerHTML)
lista.innerHTML +=
  "<li class='elemento-lista'>Soy el primer elemento de la lista</li>";

// Segundo elemento (Forma clásica, usando textContent)
const li2 = document.createElement("li");
li2.textContent = "Soy el segundo elemento de la lista";

const atributo2 = document.createAttribute("class");
atributo2.value = "elemento-lista";
li2.setAttributeNode(atributo2);

lista.appendChild(li2);

// Tercer elemento (Forma clásica, usando createTextNode())
const li3 = document.createElement("li");
const texto = document.createTextNode("Soy el tercer elemento de la lista");
li3.appendChild(texto);

const atributo3 = document.createAttribute("class");
atributo3.value = "elemento-lista";
li3.setAttributeNode(atributo3);

lista.appendChild(li3);

// Ejercicio 2

const labores = ["comprar","barrer","alimentar gato","colada"]

for (const labor of labores){
    const liLabor = document.createElement("li")
    liLabor.textContent = labor
    lista.appendChild(liLabor)
}