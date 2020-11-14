const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;

}

TypeWriter.prototype.type = function() {
    // Current index of words
    const i = this.wordIndex % this.words.length;
    const fullTxt = this.words[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}



// Init on DOM load

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Initialising the Typewriter
    new TypeWriter(txtElement, words, wait);
}



// Giving Ripple Effect to Hero Buttons

const hero_buttons = document.querySelectorAll('.hero-button a');
hero_buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.classList.add('ripple-span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})


// Generating privacy policy for the user using inputs

const privacy_policy_button = document.getElementById('privacy-policy-button');

privacy_policy_button.addEventListener('click', () => {
    console.log('you clicked button');

    let site_name = prompt("Enter your site domin, eg: webbeast.org, google.com");
    console.log(`site_name is ${site_name}`);
    let site_url = "https://" + site_name;
    console.log(`site_url is ${site_url}`);
    let site_email = prompt('Enter your email, eg:contact@webbeast.org, conactwebbest@gmail.com');
    console.log(`site_email is ${site_email}`);
});