function createMenuItem(name, image, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    
    const itemImage = document.createElement('img');
    itemImage.classList.add('image');
    itemImage.src = image;
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImage);
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
      const menuItem = createMenuItem(item.name, item.image, item.description, );
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
          { name: 'Causa Rellena', image: 'https://www.casapappagallo.it/storage/17114/causa-rellena-de-pollo.JPG', description: 'potato, lime, yellow pepper, chicken and mayonnaise.' },
          { name: 'Papa a la Huancaina', image: 'https://recetinas.com/wp-content/uploads/2018/04/papa-a-la-huancaina.jpg', description: 'spicy cheese sauce, over boiled potatoes, olives and eggs.' },
          { name: 'Papa rellena', image: 'https://i.ytimg.com/vi/VSWIJK58cOg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARz2_bxrEtDKQOUO5qzIkpPtbqUw', description: 'mashed fried potatoes filled with meat, eggs and olives.' }
        ]
      },
      {
        name: 'Main Courses',
        items: [
          { name: 'Ají de Gallina', image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Aj%C3%AD_de_gallina_-_Tradicional.jpg', description: 'chicken pieces dipped in a sauce made of ají amarillo peppers, walnuts and fresh cheese. Served with white rice and potatoes.' },
          { name: 'Lomo Saltado', image: 'https://i.ytimg.com/vi/r2oGrH__hT0/maxresdefault.jpg', description: 'beef or chicken (your choice) stir-fried with onions, tomatoes, peppers and exotic spices. Served with rice.' },
          { name: 'Bistec a lo Pobre', image: 'https://blog.amigofoods.com/wp-content/uploads/2021/04/bistec-a-lo-pobre.jpg', description: 'tasty grilled beef steak, served with crispy fried potatoes, caramelised onions and fried eggs. Served with rice.' },
          { name: 'Chaufa', image: 'https://arousingappetites.com/wp-content/uploads/2022/08/Arroz-Chaufa-Final-Image-6.jpeg', description: 'stir-fried rice with succulent chicken, meat or shrimp (your choice) pieces, crispy vegetables, and a combination of typical Peruvian condiments.' }
        ]
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Picarones Peruanos', image: 'https://www.kuodatravel.com/wp-content/uploads/2020/03/picarones-peruvian-donut.jpg', description: 'fluffy doughnuts made from a mixture of flour, pumpkin, sweet potatoes and sugar.' },
          { name: 'Mazamorra Morada', image: 'https://www.infobae.com/new-resizer/AvWFa-Tlv4lk2OZllhz-oNoq66c=/arc-anglerfish-arc2-prod-infobae/public/3VZXDSKEN5ASNDF2HHBZVKESLU.png', description: 'creamy dessert prepared from purple corn, cooked with soft fruit, aromatic spices and sugar.' },
          { name: 'Arroz con Leche', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F03%2F25%2Frecetas-1092-arroz-con-leche-2000.jpg&q=60', description: 'creamy dessert made with rice cooked in milk and sugar. Served with a sprinkling of cinnamon.' }
        ]
      },
      {
        name: 'Drinks',
        items: [
          { name: 'Chicha Morada', image: 'https://www.piscotrail.com/sf/media/2012/10/chicha-morada-drink.jpg', description: 'prepared with purple corn, pineapple, cinnamon and natural herbs.' },
          { name: 'Inka Cola', image: 'https://vempraver.com.br/wp-content/uploads/2019/08/inca-kola-peru-vempraver.jpg', description: 'a sparkling and refreshing drink that embodies the unique taste and cultural identity of Perú.' },
          { name: 'Pisco Sour', image: 'https://tastecocktails.com/wp-content/uploads/2015/09/Pisco-Sour-e1441121035947.jpg', description: 'a distilled grape brandy, fresh lime juice, sugar syrup and egg whites.' },
          { name: 'Machu Picchu', image: 'https://www.plataran.com/plataran-ubud/wp-content/uploads/sites/8/2020/03/Mixology-Class.jpg', description: 'a blend of Pisco, fresh lemon juice, maracuya and sugar syrup, decorated with an orange peel.' }
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