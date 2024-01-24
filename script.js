function calculateBMI() {
    // Get user input
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display result
    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
}
