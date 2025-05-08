function myFunction() {
  // On récupère les valeurs des champs du formulaire
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  let commentaire = document.getElementById("subject").value;

  // Vérification simple : si l'un des champs est vide, on affiche une alerte
  if (!prenom || !nom || !commentaire) {
    alert("Merci de remplir tous les champs !");
    return; // Arrête la fonction ici
  }

  // On prépare le corps du message avec les données du formulaire
  let messageBody = `
    <strong>Prénom :</strong> ${prenom} <br>
    <strong>Nom :</strong> ${nom} <br>
    <strong>Commentaire :</strong><br> ${commentaire}
  `;

  // Envoi de l'e-mail via SMTPJS avec un autre serveur SMTP (exemple SMTP2GO)
  Email.send({
    Host: "smtp.smtp2go.com", // Serveur SMTP de SMTP2GO
    Username: "ton_utilisateur", // Ton utilisateur SMTP2GO
    Password: "ton_mot_de_passe", // Ton mot de passe SMTP2GO
    To: 'jduboz@aplus-sa.com',
    From: "tonadresse@exemple.com", // Utilise une adresse valide
    Subject: `Message de contact depuis ton portfolio - ${prenom} ${nom}`,
    Body: messageBody
  }).then(
    message => {
      alert("Message envoyé avec succès !");
      // Optionnel : vider le formulaire après l'envoi
      document.getElementById("prenom").value = "";
      document.getElementById("nom").value = "";
      document.getElementById("subject").value = "";
    }
  ).catch(error => {
    console.error("Erreur lors de l'envoi :", error); // Affiche l'erreur dans la console
    alert("Une erreur est survenue lors de l'envoi. Vérifie la console pour plus de détails.");
  });
}
