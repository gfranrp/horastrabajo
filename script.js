let hoursData = [];

// Verificar si hay datos almacenados previamente en el localStorage
if (localStorage.getItem('hoursData')) {
  hoursData = JSON.parse(localStorage.getItem('hoursData'));
  displayHours();
}

function addHours() {
  const dateInput = document.getElementById("date").value;
  const hoursInput = document.getElementById("hours").value;

  if (dateInput && hoursInput) {
    hoursData.push({ date: dateInput, hours: hoursInput });
    saveDataLocally(); // Guardar los datos en el localStorage
    displayHours();
  } else {
    alert("Por favor ingresa una fecha y las horas trabajadas.");
  }
}

function saveDataLocally() {
  localStorage.setItem('hoursData', JSON.stringify(hoursData));
}

function displayHours() {
    const displayDiv = document.getElementById("displayHours");
    displayDiv.innerHTML = "<h2>Horas Trabajadas</h2>";
    
    if (hoursData.length === 0) {
      displayDiv.innerHTML += "<p>No hay datos disponibles.</p>";
      return;
    }
  
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th>Fecha</th><th>Horas Trabajadas</th><th>Eliminar</th>";
  
    hoursData.forEach((data, index) => {
      const row = table.insertRow();
      row.innerHTML = `<td>${data.date}</td><td>${data.hours}</td><td><button onclick="deleteEntry(${index})">Eliminar</button></td>`;
    });
  
    displayDiv.appendChild(table);
  }
  
  function deleteEntry(index) {
    hoursData.splice(index, 1); // Elimina el elemento en el índice especificado
    saveDataLocally(); // Guarda los cambios en el localStorage
    displayHours(); // Actualiza la tabla para reflejar los cambios
  }
  

  const table = document.createElement("table");
  const headerRow = table.insertRow();
  headerRow.innerHTML = "<th>Fecha</th><th>Horas Trabajadas</th>";

  hoursData.forEach((data) => {
    const row = table.insertRow();
    row.innerHTML = `<td>${data.date}</td><td>${data.hours}</td>`;
  });

  displayDiv.appendChild(table);
