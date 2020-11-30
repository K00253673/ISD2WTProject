const bmiform = document.getElementById('BMIform');
var isValid = true;

bmiform.addEventListener('submit', t => {
    t.preventDefault();
    bmiInputs();
    if(isValid){
        calcBMI();
    }
});

function bmiInputs() {
    const heightValue = document.getElementById('height').value;
    const weightValue = document.getElementById('weight').value;
    
    if(heightValue === '') {
        setErrorFor(height, 'Height cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(height);
        isValid = true
    }
    
    if(weightValue === '') {
        setErrorFor(weight, 'Weight cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(weight);
        isValid = true;
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

function calcBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var type;
    var BMI = weight / Math.pow(height, 2);
    document.getElementById("result").innerText = Math.round(BMI * 100) / 100;
    if (BMI < 18.5){
        document.getElementById("bmitype").innerText = "Underweight";
        type = "underweight";
    }else if (BMI >= 18.5 && BMI <= 25){
        document.getElementById("bmitype").innerText = "Normal";
        type = "normal";
    }else if (BMI >= 25 && BMI <= 30){
        document.getElementById("bmitype").innerText = "Overweight";
        type = "overweight";
    }else if (BMI > 30){
        document.getElementById("bmitype").innerText = "Obese";
        type = "obese";
        }
    
    document.getElementById('info').style.display = "block";
    document.getElementById(type).style.display = "block";
    

}
