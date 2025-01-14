let selectedDisability = "";

// Function to select a disability card
function selectDisability(disability) {
  selectedDisability = disability;
  alert(`You have selected ${disability}`);
}

// Function to calculate BMI and recommend exercises
function calculateBMI(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const bmi = weight / (height / 100) ** 2;

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obesity";

  const bmiResult = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  document.getElementById("bmiResult").innerHTML = bmiResult;

  // Recommend exercises based on selected disability
  if (selectedDisability) {
    recommendExercises(selectedDisability, category);
  } else {
    document.getElementById("exerciseRecommendation").innerHTML = "Please select a disability first.";
  }
}

// Function to recommend exercises
function recommendExercises(disability, bmiCategory) {
  let exercises = [];

  if (disability === "Lower Back Strain") {
    exercises = [
      "Cat-Cow Stretch - 3 sets of 10 reps",
      "Pelvic Tilts - 3 sets of 15 reps",
      "Knee to Chest Stretch - 2 sets of 10 reps"
    ];
  } else if (disability === "Muscle Atrophy") {
    exercises = [
      "Resistance Band Exercises - 3 sets of 12 reps",
      "Seated Leg Extensions - 3 sets of 15 reps",
      "Chair Squats - 3 sets of 10 reps"
    ];
  }

  let exerciseList = `<h3>Recommended Exercises for ${disability} (${bmiCategory})</h3>`;
  exerciseList += `<ul>${exercises.map(ex => `<li>${ex}</li>`).join('')}</ul>`;

  // Add video link
  exerciseList += `
    <h4>Watch this video for guidance:</h4>
    <a href="https://youtu.be/EVQcgYQyzz0?si=3drQahuXbLVrkalU" target="_blank">Exercise Video</a>
  `;

  document.getElementById("exerciseRecommendation").innerHTML = exerciseList;
}
