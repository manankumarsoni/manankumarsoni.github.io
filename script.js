const contacts = [
    { name: "Manan Soni", phone: "9694665254" }
  ];

const contactListElement = document.getElementById('contact-list');

function renderContacts() {
    contactListElement.innerHTML = '';

    const contact = contacts[0]; // only one person

    const card = document.createElement('div');
    card.className = 'contact-card';

    card.innerHTML = `
        <div class="contact-info">
            <div class="contact-name">${contact.name}</div>
            <div class="contact-phone">${contact.phone}</div>
        </div>
        <button class="save-btn" onclick="saveContact('${contact.name}', '${contact.phone}')">
            Save
        </button>
    `;

    contactListElement.appendChild(card);
}

function saveContact(name, phone) {
    console.log(name, phone);
}

renderContacts();

  
