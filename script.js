function calculateAge() {
    var dob = document.getElementById('dob').value;
    var mob = document.getElementById('mob').value;
    var yob = document.getElementById('yob').value;

    var today = new Date();
    var birthDate = new Date(yob, mob - 1, dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = "Your age is: " + age;
}