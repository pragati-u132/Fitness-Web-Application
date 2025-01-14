document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bmi = weight / (height / 100) ** 2;
  
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obesity";
  
    document.getElementById("bmiResult").innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  
    displayExercises(category);
  });
  
  function displayExercises(category) {
    const exerciseGrid = document.getElementById("exerciseGrid");
    exerciseGrid.innerHTML = "";
  
    const exercises = {
      Underweight: [
        { name: "Squats", description: "3 sets of 12-15 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Push-ups", description: "3 sets of 8-12 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Lunges", description: "3 sets of 10 reps (each leg)", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Deadlifts", description: "3 sets of 8-10 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Bench Press", description: "3 sets of 8-12 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Dumbbell Rows", description: "3 sets of 10-12 reps (each arm)", video: "https://www.youtube.com/embed/R30JGe23A24" },
      ],
      "Normal weight": [
        { name: "Running/Jogging", description: "20-30 minutes (steady pace)", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Planks", description: "Hold for 30-60 seconds, 3 sets", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Jumping Jacks", description: "3 sets of 30-40 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Bicycle Crunches", description: "3 sets of 20 reps (each side)", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Burpees", description: "3 sets of 10-15 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Mountain Climbers", description: "3 sets of 20-30 seconds", video: "https://www.youtube.com/embed/R30JGe23A24" },
      ],
      Overweight: [
        { name: "Walking", description: "30-45 minutes (brisk pace)", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Swimming", description: "20-30 minutes", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Cycling", description: "20-30 minutes", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Bodyweight Squats", description: "3 sets of 10-12 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Modified Push-ups", description: "3 sets of 8-10 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Yoga", description: "20-30 minutes of basic poses", video: "https://www.youtube.com/embed/R30JGe23A24" },
      ],
      Obesity: [
        { name: "Chair Squats", description: "3 sets of 10-12 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Water Aerobics", description: "20-30 minutes", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Seated Leg Raises", description: "3 sets of 10-12 reps (each leg)", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Walking in Water", description: "20-30 minutes", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Resistance Band Exercises", description: "3 sets of 10-12 reps", video: "https://www.youtube.com/embed/R30JGe23A24" },
        { name: "Stationary Biking", description: "20-30 minutes (low resistance)", video: "https://www.youtube.com/embed/R30JGe23A24" },
      ],
    };
  
    exercises[category].forEach((exercise) => {
      const card = document.createElement("div");
      card.classList.add("explore__card");
      card.innerHTML = `
        <h4>${exercise.name}</h4>
        <p>${exercise.description}</p>
        <iframe src="${exercise.video}" frameborder="0" allowfullscreen></iframe>
      `;
      exerciseGrid.appendChild(card);
    });
  }
  