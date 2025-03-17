function myFunction()
{

  console.log("Send Email");

  var Prenom = document.getElementById("prenom");
  const inputPrenom = Prenom.value;
  console.log(inputPrenom);

  var Nom = document.getElementById("nom");
  const inputNom = Nom.value;
  console.log(inputNom);

  var subject = document.getElementById("subject");
  const inputSubject = subject.value;
  console.log(inputSubject);
  
  var msg = '<body>' + inputPrenom + '<br/>' + inputNom + '<br/>' + inputSubject + '</body>';

  console.log(msg); 

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "juliadbz2004@gmail.com",
    Password : "CF9357B2ED061F63459F9C518F989409E77C",
    To : 'jduboz@aplus-sa.com',
    From : "juliadbz2004@gmail.com",
    Subject : "This is the subject",
    Body : msg
}).then(
  message => alert(message)
);


}

