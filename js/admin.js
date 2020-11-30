const updateShow = document.getElementById('updateShow');
const addShow = document.getElementById('addShow');
const deleteShow = document.getElementById('deleteShow');
const updateform = document.getElementById('updateform');
const addform = document.getElementById('addform');
const deleteform = document.getElementById('deleteform');

updateShow.addEventListener('click', e => {
    e.preventDefault();
    updateform.classList.remove('hide');
});
addShow.addEventListener('click', v => {
    v.preventDefault();
    addform.classList.remove('hide');
});
deleteShow.addEventListener('click', n => {
    n.preventDefault();
    deleteform.classList.remove('hide');
});
updateform.addEventListener('submit', a => {
    a.preventDefault();
    updateInputs();
});
addform.addEventListener('submit', b => {
    b.preventDefault();
    addInputs();
});
deleteform.addEventListener('submit', c => {
    c.preventDefault();
    deleteInputs();
});
function updateInputs() {
    const pnameValue = document.getElementById('pname').value;
    const plengthValue = document.getElementById('plength').value;
    const pdescValue = document.getElementById('pdesc').value;
    const upasswordValue = document.getElementById('upassword').value;

    if (pnameValue === '') {
        setErrorFor(pname, 'Plan name cannot be blank');
    } else {
        setSuccessFor(pname);
    }
    if (plengthValue === '') {
        setErrorFor(plength, 'Plan length cannot be blank');
    } else {
        setSuccessFor(plength);
    }
    if (pdescValue === '') {
        setErrorFor(pdesc, 'Description cannot be blank');
    } else {
        setSuccessFor(pdesc);
    }
    if (upasswordValue === '') {
        setErrorFor(upassword, 'Password cannot be blank');
    } else {
        setSuccessFor(upassword);
    }
}
function addInputs() {
    const pnameValue = document.getElementById('pname2').value;
    const plengthValue = document.getElementById('plength2').value;
    const pdescValue = document.getElementById('pdesc2').value;
    const apasswordValue = document.getElementById('apassword').value;

    if (pnameValue === '') {
        setErrorFor(pname2, 'Plan name cannot be blank');
    } else {
        setSuccessFor(pname2);
    }
    if (plengthValue === '') {
        setErrorFor(plength2, 'Plan length cannot be blank');
    } else {
        setSuccessFor(plength2);
    }
    if (pdescValue === '') {
        setErrorFor(pdesc2, 'Description cannot be blank');
    } else {
        setSuccessFor(pdesc2);
    }
    if (apasswordValue === '') {
        setErrorFor(apassword, 'Password cannot be blank');
    } else {
        setSuccessFor(apassword);
    }
}
function deleteInputs() {
    const pnameValue = document.getElementById('pname3').value;
    const dpasswordValue = document.getElementById('dpassword').value;

    if (pnameValue === '') {
        setErrorFor(pname3, 'Plan name cannot be blank');
    } else {
        setSuccessFor(pname3);
    }
    if (dpasswordValue === '') {
        setErrorFor(dpassword, 'Password cannot be blank');
    } else {
        setSuccessFor(dpassword);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}