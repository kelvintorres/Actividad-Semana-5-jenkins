fetch("/mascotas")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((mascotas) => {
       
      const cardTemplate = document.querySelector("template");

       
      const card = cardTemplate.content.cloneNode(true);

       
    
      card.querySelector("p1").innerText = mascotas.id;
      card.querySelector("p2").innerText = mascotas.nombre;
      card.querySelector("p3").innerText = mascotas.raza;
      card.querySelector("p4").innerText = mascotas.edad;
       
      card.querySelector("p6").innerText = mascotas.descripcion;
       
      document.body.appendChild(card);

      
    });
  });