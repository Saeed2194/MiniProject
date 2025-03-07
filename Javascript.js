
// Navbar Section

function searchBar() {
    let search = document.getElementById('search');

    if (search.style.display != 'none') {
        search.style.display = 'none';
    } else {
        search.style.display = 'block';
    }
}

// Home Section 

function imagechange() {
    document.getElementById('image').src = "https://images.unsplash.com/photo-1725743537422-b36edd83b46a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}

function imagechange2() {
    document.getElementById('image').src = "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww"

}

function imagechange3() {
    document.getElementById('image').src = "https://plus.unsplash.com/premium_photo-1673448391254-095fc8adf39a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

// About Section

function toggleHide() {
    let para = document.getElementById('para');

    if (para.style.display != 'none') {
        para.style.display = 'none';
    } else {
        para.style.display = 'block';
    }

}

// Contact Section

function validateForm() {
    isValid = true;

    const error = document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const username = document.getElementById('username').value.trim();

    if (username === '') {
        document.getElementById('username-error').textContent = '*Username is required'
        isValid = false;

    } else if (username.length < 3) {
        document.getElementById('username-error').textContent = '*Username must be at least 3 character';
        isValid = false;

    }

    const email = document.getElementById('email').value.trim();

    if (email === '') {
        document.getElementById('email-error').textContent = '*Email is required'
        isValid = false;

    }

    const number = document.getElementById('number').value.trim();

    if (number === "") {
        document.getElementById('number-error').textContent = '*Number is required'
        isValid = false;

    } else if (number.length < 11) {
        document.getElementById('number-error').textContent = '*Number must be at least 11 character';
        isValid = false;

    }

    if (isValid)
        alert('Your Form Submitted Successfully')

    return isValid;

}

// Footer Section

function subscribeform(){
    isValid = true;
    
    const subscribe = document.getElementById("subscribe")

    if(isValid)
        alert('Thanks For Your Subscription');

    return isValid;
}
