function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    
    return menuItem;
}

function createMenuSection(sectionName, items) {
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = sectionName;
    
    menuSection.appendChild(sectionTitle);

    const menuItems = document.createElement('section');
    menuItems.classList.add('menu-items');
    
    items.forEach(item => {
      const menuItem = createMenuItem(item.name, item.description);
      menuItems.appendChild(menuItem);
    });
    
    menuSection.appendChild(menuItems);
    return menuSection;
}

function menu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuSections = [
      {
        name: 'Entrées',
        items: [
          { name: 'Causa Rellena', description: 'potato, lime, yellow pepper, chicken and mayonnaise.' },
          { name: 'Papa a la Huancaina', description: 'spicy cheese sauce, over boiled potatoes, olives and eggs.' },
          { name: 'Papa rellena', description: 'mashed fried potatoes filled with meat, eggs and olives.' }
        ]
      },
      {
        name: 'Main Courses',
        items: [
          { name: 'Ají de Gallina', description: 'chicken pieces dipped in a sauce made of ají amarillo peppers, walnuts and fresh cheese. Served with white rice and potatoes.' },
          { name: 'Lomo Saltado', description: 'beef or chicken (your choice) stir-fried with onions, tomatoes, peppers and exotic spices. Served with rice.' },
          { name: 'Bistec a lo Pobre', description: 'tasty grilled beef steak, served with crispy fried potatoes, caramelised onions and fried eggs. Served with rice.' },
          { name: 'Chaufa', description: 'stir-fried rice with succulent chicken, meat or shrimp (your choice) pieces, crispy vegetables, and a combination of typical Peruvian condiments.' }
        ]
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Picarones Peruanos', description: 'fluffy doughnuts made from a mixture of flour, pumpkin, sweet potatoes and sugar.' },
          { name: 'Mazamorra Morada', description: 'creamy dessert prepared from purple corn, cooked with soft fruit, aromatic spices and sugar.' },
          { name: 'Arroz con Leche', description: 'creamy dessert made with rice cooked in milk and sugar. Served with a sprinkling of cinnamon.' },
          { name: 'Suspiro a la Limeña', description: 'creamy dessert consists of two delicious layers: a bottom layer of a sweet caramelised milk cream and a top layer of soft cream flavoured with vanilla.' }
        ]
      },
      {
        name: 'Drinks',
        items: [
          { name: 'Chicha Morada', description: 'prepared with purple corn, pineapple, cinnamon and natural herbs.' },
          { name: 'Inka Cola', description: 'a sparkling and refreshing drink that embodies the unique taste and cultural identity of Perú.' },
          { name: 'Pisco Sour', description: 'a distilled grape brandy, fresh lime juice, sugar syrup and egg whites.' },
          { name: 'Machu Picchu', description: 'a blend of Pisco, fresh lemon juice, maracuya and sugar syrup, decorated with an orange peel.' }
        ]
      }
    ];
    
    menuSections.forEach(section => {
      const menuSection = createMenuSection(section.name, section.items);
      menuContainer.appendChild(menuSection);
    });
    
    return menuContainer;
}

export default function pageMenu() {
    const main = document.getElementById("main");
     main.textContent = "";
     main.appendChild(menu()); 
 }