function home() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add("home-container");

    const presentation = document.createElement('div');
    presentation.classList.add("presentation");

    const titleP = document.createElement('h1');
    titleP.textContent = 'Your favourite Peruvian restaurant';
    const presentationT = document.createElement('p');
    presentationT.textContent = 'Welcome to our peruvian restaurant, where you can enjoy authentic Peruvian delicacies. Our cuisine will take you on a culinary journey through the traditions and flavours of Peru. Macchupisco, takes its name from one of the wonders of the world and the Peruvian national drink: Pisco.';
    
    presentation.appendChild(titleP); presentation.appendChild(presentationT);

    const foodSpecialties = document.createElement('div');
    foodSpecialties.classList.add("specialties");

    const titleS = document.createElement('h1');
    titleS.textContent = 'peruvian gastronomy specialties';
    foodSpecialties.appendChild(titleS);

    const divS = document.createElement('div');
    divS.classList.add("peruvian");

    const specialties = [
        { title: 'Meat', description: 'We count with 16 meat specialities , "Lomo Saltado" "Tallarin saltado" " Bistec a lo pobre" " Anticuchos" all prepared with high quality meat, all dishes are prepared with extreme care and dedication.' },
        { title: 'Fish', description: 'More than 16 Peruvian specialities, "Ceviche" Peruvian flagship dish, "Arroz con mariscos" seafood risotto, "Parihuela" fish soup with mussels, squid, crab and prawns, "Jalea" fried fish morsels and fried seafood.' },
        { title: 'Barbecue', description: 'Our workhorse, barbecued chicken, both to be eaten inside the restaurant and to take away.' },
        { title: 'Desserts', description: 'We offer several desserts typical of Peru, the desserts are of high quality and a delight for the palate "Tres leches cake" cake made from a combination of 3 types of milk, "Crema volteada" literally means upside-down cream, after baking it is tipped onto the plate for tasting.' }
    ];
    specialties.forEach(specialty => {
        const specialtyDiv = content(specialty.title, specialty.description);
        divS.appendChild(specialtyDiv);
    });
    foodSpecialties.appendChild(divS);

    homeContainer.appendChild(presentation);
    homeContainer.appendChild(foodSpecialties);

    return homeContainer
}

function content(title, paragraph) {
    const div = document.createElement('div');

    const titleT = document.createElement('h2');
    titleT.textContent = title;
    const paragraphT = document.createElement('p');
    paragraphT.textContent = paragraph;

    div.appendChild(titleT);
    div.appendChild(paragraphT);
    
    return div;
}

export default function pageHome() {
   const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(home());
}
    
