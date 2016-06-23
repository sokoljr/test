var form = document.forms.pages;

form.onsubmit = function(e) {
    e.preventDefault();
    var errors = document.querySelector('p.errors');
    if(form.elements.name.value.length < 2) {
        errors.innerHTML = "Your name is too short";
        return;
    }
    if(form.elements.surname.value.length < 2) {
        errors.innerHTML = "Your surname is too short";
        return;
    }
    if(form.elements.name.value.length >15 ) {
        errors.innerHTML = "Your name is too long";
        return;
    }
    if(form.elements.surname.value.length >15) {
        errors.innerHTML = "Your surname is too long";
        return;
    }
    this.submit();
};







