const contacts = [
    { name: "Manan Soni", phone: "+91 9694665254" }
];

const contactListElement = document.getElementById('contact-list');

function renderContacts() {
    contactListElement.innerHTML = '';

    const contact = contacts[0];

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
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
END:VCARD
    `.trim();

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

renderContacts();

  
