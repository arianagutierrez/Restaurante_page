import pageHome from "./pageHome";
import pageMenu from "./pageMenu";
import pageContact from "./pageContact";

function createHeader() {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.classList.add("restaurant-name");
    title.textContent = 'Macchupisco';
  
    header.appendChild(title);
    header.appendChild(createNavBar());
  
    return header;
}

function createNavBar() {
    const navbar = document.createElement('nav');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add("btnNav");
    homeButton.textContent = 'Home';
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        pageHome();
    });

    
    const menuButton = document.createElement('button');
    menuButton.classList.add("btnNav");
    menuButton.textContent = 'Menu';
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        pageMenu();
    });
    
    const contactButton = document.createElement('button');
    contactButton.classList.add("btnNav");
    contactButton.textContent = 'Contact';
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        pageContact();
    });

    
    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);
    
    return navbar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".btnNav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add("pages");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Ariana Gutierrez`;
  
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/arianagutierrez";
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa");
    githubIcon.classList.add("fa-github-square");
  
    githubLink.appendChild(githubIcon);

    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    
    return footer;
}

export default function initializeWebsite() {
    const content = document.getElementById("content");
  
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".btnNav"));
    pageHome();
}
  