document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');

    form.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Reset error messages
        resetErrorMessages();

        // Validate each input field
        if (!validateNom()) {
            showError("nom", "Le nom doit contenir que des lettres et avoir au moins 1 caractère.");
        }

        if (!validatePrenom()) {
            showError("prenom", "Le prénom doit contenir au moins 1 caractère.");
        }

        if (!validateTelephone()) {
            showError("telephone", "Le numéro de téléphone doit contenir exactement 8 chiffres et ne doit pas contenir des lettres.");
        }

        if (!validateDateNaissance()) {
            showError("date_naissance", "La date de naissance doit être inférieure à la date d’aujourd’hui et elle doit être une date valide.");
        }

        if (!validateMotDePasse()) {
            showError("mot_de_passe", "Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule.");
        } else {
            showSuccess("mot_de_passe", "Formulaire validé avec succès!");
        }
    });

    // Add keyup event listener for email validation
    var emailInput = document.getElementById('email');
    emailInput.addEventListener("keyup", function () {
        validateEmail();
    });

    function resetErrorMessages() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (element) {
            element.textContent = '';
        });
    }

    function showError(fieldName, message) {
        var field = document.getElementById(fieldName);
        var errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        field.parentNode.appendChild(errorMessage);
    }

    function showSuccess(fieldName, message) {
        var field = document.getElementById(fieldName);
        var successMessage = document.createElement('span');
        successMessage.classList.add('success-message');
        successMessage.style.color = 'green';
        successMessage.textContent = message;
        field.parentNode.appendChild(successMessage);
    }

    function validateNom() {
        var nom = document.getElementById('nom').value;
        return /^[a-zA-Z]+$/.test(nom) && nom.length >= 1;
    }

    function validatePrenom() {
        var prenom = document.getElementById('prenom').value;
        return prenom.length >= 1;
    }

    function validateTelephone() {
        var telephone = document.getElementById('telephone').value;
        return /^\d{8}$/.test(telephone);
    }

    function validateDateNaissance() {
        var dateNaissance = new Date(document.getElementById('date_naissance').value);
        var today = new Date();
        return dateNaissance < today && dateNaissance.toString() !== 'Invalid Date';
    }

    function validateMotDePasse() {
        var motDePasse = document.getElementById('mot_de_passe').value;
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(motDePasse);
    }

    function validateEmail() {
        var email = emailInput.value;
        var errorMessage = document.querySelector('#email + .error-message');
        var successMessage = document.querySelector('#email + .success-message');
    
        if (errorMessage) {
            errorMessage.remove();
        }
    
        if (successMessage) {
            successMessage.remove();
        }
    
        var isValid = /\S+@esprit\.tn/.test(email);
        var emailField = document.getElementById('email');
    
        if (isValid) {
            showSuccess("email", "Email valide!");
        } else {
            showError("email", "Email non valide. Assurez-vous qu'il contient @esprit.tn.");
        }
    }
    