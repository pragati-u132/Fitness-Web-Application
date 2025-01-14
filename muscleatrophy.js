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
  
    recommendExercises();
}
  
// Function to recommend exercises for Muscle Atrophy
function recommendExercises() {
    const exercises = [
      {
        name: "Resistance Band Squats",
        reps: "3 sets of 12 reps",
        frequency: "4 days/week"
      },
      {
        name: "Wall Push-Ups",
        reps: "3 sets of 10 reps",
        frequency: "4 days/week"
      },
      {
        name: "Seated Leg Raises",
        reps: "3 sets of 12 reps per leg",
        frequency: "5 days/week"
      },
      {
        name: "Standing Calf Raises",
        reps: "3 sets of 15 reps",
        frequency: "5 days/week"
      },
      {
        name: "Dumbbell Bicep Curls",
        reps: "3 sets of 10 reps per arm",
        frequency: "4 days/week"
      },
      {
        name: "Glute Bridges",
        reps: "3 sets of 12 reps",
        frequency: "4 days/week"
      }
    ];
  
    let exerciseCards = "";
    exercises.forEach(exercise => {
      exerciseCards += `
        <div class="card">
          <h4>${exercise.name}</h4>
          <p>${exercise.reps}</p>
          <p>${exercise.frequency}</p>
          <a href="https://youtu.be/EVQcgYQyzz0?si=3drQahuXbLVrkalU" target="_blank">Watch Video</a>
        </div>
      `;
    });
  
    document.getElementById("exerciseCards").innerHTML = exerciseCards;
}
