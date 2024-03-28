// Selecting the button to add patient data
const addPatientButton = document.getElementById("addPatient");

// Selecting the HTML element to display analysis reports
const report = document.getElementById("report");

// Selecting the button to initiate search
const btnSearch = document.getElementById('btnSearch');

// Array to store collected patient data
const patients = [];

// Function to add patient details
function addPatient() {
    // Retrieving patient details from the form
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    // Validating if all fields have valid inputs
    if (name && gender && age && condition) {
        // Adding patient details to the patients array
        patients.push({ name, gender: gender.value, age, condition });

        // Resetting the form fields
        resetForm();

        // Generating and displaying the analysis report
        generateReport();
    }
}

// Function to reset form values
function resetForm() {
    // Clearing form field values
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}

// Function to search for health condition information
function searchCondition() {
    // Retrieve user input and convert to lowercase
    const input = document.getElementById('conditionInput').value.toLowerCase();
    
    // Clear previous search results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    // Fetch health condition data from JSON file
    fetch('health_analysis.json')
      .then(response => response.json())
      .then(data => {
        // Find the health condition matching the user input
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);
        
        // Display condition details or error message
        if (condition) {
          const symptoms = condition.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;
          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="Condition Image">`;
          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

// Event listener for search button
btnSearch.addEventListener('click', searchCondition);


// Function to generate analysis report
function generateReport() {
    // Calculate total number of patients
    const numPatients = patients.length;
    
    // Initialize counters for specific medical conditions
    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    };
    
    // Initialize gender-specific condition counters
    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
    };
    
    // Loop through each patient's data
    for (const patient of patients) {
        // Increment condition counts
        conditionsCount[patient.condition]++;
        
        // Update gender-based condition counts
        genderConditionsCount[patient.gender][patient.condition]++;
    }
    
    // Update report content dynamically
    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    
    // Display counts for each medical condition
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }
    
    // Display gender-based condition counts
    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
        report.innerHTML += `${gender}:<br>`;
        for (const condition in genderConditionsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
}

// Event listener for adding patient details
addPatientButton.addEventListener("click", addPatient);