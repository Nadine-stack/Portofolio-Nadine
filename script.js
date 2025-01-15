document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault('Votre message a été envoyé !');

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName || !subject || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    alert(`Merci, ${firstName} ${lastName} ! Votre message a été envoyé avec succès.`);
    this.reset();
});
