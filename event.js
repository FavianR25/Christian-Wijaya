document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('modelForm');
  
  function validateEmail(email) {
    const atPos = email.indexOf('@');
    const dotPos = email.lastIndexOf('.');
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
  }

  function validateName(name) {
    return name.trim().length >= 3 && name.trim().indexOf(' ') > 0;
  }

  function validateBirthDate(date) {
    if (!date) return false;
    const birthDate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 16;
  }

  function validateGender() {
    return document.querySelector('input[name="gender"]:checked') !== null;
  }

  function validateTerms() {
    return document.getElementById('terms').checked;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email || !validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    const fullname = document.getElementById('fullname').value;
    const nameError = document.getElementById('nameError');
    if (!fullname || !validateName(fullname)) {
      nameError.textContent = 'Please enter your full name (first and last)';
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }

    const birthdate = document.getElementById('birthdate').value;
    const birthError = document.getElementById('birthError');
    if (!birthdate || !validateBirthDate(birthdate)) {
      birthError.textContent = 'You must be at least 16 years old';
      birthError.style.display = 'block';
      isValid = false;
    } else {
      birthError.style.display = 'none';
    }

    const genderError = document.getElementById('genderError');
    if (!validateGender()) {
      genderError.textContent = 'Please select your gender';
      genderError.style.display = 'block';
      isValid = false;
    } else {
      genderError.style.display = 'none';
    }

    const termsError = document.getElementById('termsError');
    if (!validateTerms()) {
      termsError.textContent = 'You must accept the terms and conditions';
      termsError.style.display = 'block';
      isValid = false;
    } else {
      termsError.style.display = 'none';
    }

    if (isValid) {
      alert('Application submitted successfully!');
      form.reset();
    }
  });

  document.getElementById('email').addEventListener('input', function() {
    const emailError = document.getElementById('emailError');
    if (validateEmail(this.value)) {
      emailError.style.display = 'none';
    }
  });

  document.getElementById('fullname').addEventListener('input', function() {
    const nameError = document.getElementById('nameError');
    if (validateName(this.value)) {
      nameError.style.display = 'none';
    }
  });

  document.getElementById('birthdate').addEventListener('change', function() {
    const birthError = document.getElementById('birthError');
    if (validateBirthDate(this.value)) {
      birthError.style.display = 'none';
    }
  });

  document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.getElementById('genderError').style.display = 'none';
    });
  });

  document.getElementById('terms').addEventListener('change', function() {
    document.getElementById('termsError').style.display = 'none';
  });
});