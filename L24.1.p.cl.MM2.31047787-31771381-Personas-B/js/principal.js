class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  // Crear instancias de personas
  const luis = new Persona("Luis", 15);
  const ana = new Persona("Ana", 19);
  const jose1 = new Persona("José", 21);
  const carmen = new Persona("Carmen", 17);
  const rosa = new Persona("Rosa", 18);
  const jose2 = new Persona("José", 22);
  const maria = new Persona("María", 17);
  const luz = new Persona("Luz", 19);
  const rafael = new Persona("Rafael", 23);
  const liz = new Persona("Liz", 15);
  const marcos = new Persona("Marcos", 20);
  const leo = new Persona("Leo", 16);
  
  // Agrupar las personas en un arreglo
  const personas = [luis, ana, jose1, carmen, rosa, jose2, maria, luz, rafael, liz, marcos, leo];
  
  // Filtrar las mujeres
  const mujeres = personas.filter(persona => persona.nombre !== "José");
  
  // Calcular la edad promedio
  const totalEdades = mujeres.reduce((sum, persona) => sum + persona.edad, 0);
  const edadPromedio = totalEdades / mujeres.length;
  
  // Encontrar la edad mayor entre las mujeres
  const edadMayorMujeres = Math.max(...mujeres.map(persona => persona.edad));
  
  // Mostrar los resultados
  const edadPromedioElement = document.getElementById("edadPromedio");
  const edadMayorMujeresElement = document.getElementById("edadMayorMujeres");

  edadPromedioElement.textContent = `Edad promedio: ${edadPromedio.toFixed(2)}`;
  edadMayorMujeresElement.textContent = `Edad mayor entre las mujeres: ${edadMayorMujeres}`;