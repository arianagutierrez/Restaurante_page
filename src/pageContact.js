function contact() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
  
    // Informazioni di contatto
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    contactInfo.innerHTML = `
    <div class="contact-item">
        <h2>Phone </h2>
        <p>+39 (123)456-7890</p>
    </div>
    <div class="contact-item">
        <h2>Email </h2>
        <p>info@macchupisco.com</p>
    </div>
    `;
  
    // Prenotazioni
    const reservationSection = document.createElement('div');
    reservationSection.classList.add('reservation-section');
  
    reservationSection.innerHTML = `
    <h2>Reservations</h2>
    <form>
        <label for="name">Name : </label>
        <input type="text" id="name" required>

        <label for="date">Date : </label>
        <input type="date" id="date" required>

        <label for="people">N° people : </label>
        <input type="number" id="people" required min="1" max="100">

        <button type="submit">Check Availability</button>
    </form>
    `;
  
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(reservationSection);
  
    return contactContainer;
}

export default function pageContact() {
    const main = document.getElementById("main");
     main.textContent = "";
     main.appendChild(contact()); 
 }