/* SmtpJS.com - v3.0.0 */

// Objet Email qui contient les fonctions pour envoyer un mail via SMTPJS
var Email = {
    // Fonction principale pour envoyer un e-mail
    send: function (a) {
      return new Promise(function (resolve, reject) {
        // Ajout d'un paramètre "nocache" pour éviter que la requête soit mise en cache
        a.nocache = Math.floor(1e6 * Math.random() + 1);
        // Indique l'action à faire (ici "Send")
        a.Action = "Send";
  
        // Conversion de l'objet contenant les infos de l'email en JSON
        var jsonData = JSON.stringify(a);
  
        // Envoie la requête HTTP POST vers le serveur de smtpjs
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", jsonData, function (response) {
          // Résout la promesse avec la réponse du serveur (succès)
          resolve(response);
        });
      });
    },
  
    // Fonction qui envoie une requête POST AJAX
    ajaxPost: function (url, data, callback) {
      // Crée une requête CORS (Cross-Origin Resource Sharing)
      var request = Email.createCORSRequest("POST", url);
  
      // Définit le type de contenu de la requête (formulaire encodé)
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
      // Lorsque la réponse est reçue, on l’envoie au callback
      request.onload = function () {
        var response = request.responseText;
        if (callback != null) callback(response);
      };
  
      // Envoie la requête avec les données
      request.send(data);
    },
  
    // Fonction qui envoie une requête GET AJAX (pas utilisée ici mais dispo dans l’objet)
    ajax: function (url, callback) {
      var request = Email.createCORSRequest("GET", url);
  
      // Quand la réponse est reçue, on l’envoie au callback
      request.onload = function () {
        var response = request.responseText;
        if (callback != null) callback(response);
      };
  
      // Envoie la requête
      request.send();
    },
  
    // Fonction qui crée une requête CORS compatible avec plusieurs navigateurs
    createCORSRequest: function (method, url) {
      var xhr = new XMLHttpRequest();
  
      // Vérifie si XMLHttpRequest supporte CORS (navigateur moderne)
      if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
      }
      // Sinon, utilise XDomainRequest (ancien IE)
      else if (typeof XDomainRequest !== "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
      }
      // Si aucun des deux, on renvoie null
      else {
        xhr = null;
      }
  
      return xhr;
    }
  };
  