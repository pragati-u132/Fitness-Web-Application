
document.addEventListener('keydown', function (event) {
    // Check if the Alt key is pressed and prevent default browser behavior
    if (event.altKey) {
        event.preventDefault();
        switch (event.key.toLowerCase()) {
            case 'u': // Alt + U -> About Us page
                window.location.href = 'aboutus.html';
                break;
            case 'h': // Alt + H -> Home page
                window.location.href = 'index.html';
                break;
            case 'g': // Alt + G -> Get Started page
                window.location.href = 'getstarted.html';
                break;
            case 'c': // Alt + C -> Contact Us page
                window.location.href = 'contact.html';
                break;
            case 'n': // Alt + N -> Get Started Abnormal page
                window.location.href = 'getstartedabnormal.html';
                break;
            default:
                break;
        }
    }
});

window.onload = function () {
    // Function to speak the text aloud
    function speakText(text) {
        if ('speechSynthesis' in window) {
            // Stop any current speech
            stopSpeech();

            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.lang = 'en-US'; // Language set to English
            speech.pitch = 1; // Pitch
            speech.rate = 1; // Speed of speech
            speech.volume = 1; // Volume of speech
            window.speechSynthesis.speak(speech);
        }
    }

    // Function to check if speech should be stopped
    function stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stops any ongoing speech
        }
    }

    // Default behavior: Consider user as disabled (starts with speech)
    let isUserDisabled = localStorage.getItem('isDisabled') || 'true'; // Default to 'true'

    // Check the page and read corresponding content if user is disabled
    if (isUserDisabled === 'true') {
        const currentPage = window.location.pathname;
        let contentToRead = '';

        // Match the content with the current page
        if (currentPage.includes('aboutus.html')) {
            contentToRead = "Welcome to FitClub. Our mission is to provide world-class training and create a supportive environment for fitness enthusiasts. We offer a variety of programs designed to help you reach your fitness goals.";
        } else if (currentPage.includes('contact.html')) {
            contentToRead = "If you have any questions or would like more information, please reach out to us via email at contact@fitclub.com, phone at 123-456-7890, or visit us at 123 Fitness Street, FitCity. or simply fill the below form.";
        } else if (currentPage.includes('getstarted.html')) {
            contentToRead = "Get Started with FitClub! You Are On Page Taking the first step towards a healthier you begins here. Start by calculating your Body Mass Index (BMI) using our easy-to-use BMI calculator. This essential tool will help you understand your body composition and set realistic fitness goals. Let’s get started today and take the first step towards achieving your fitness aspirations!";
        } else if (currentPage.includes('getstartedabnormal.html')) {
            contentToRead = "You are now on the Get Started page. Explore the specific workouts. Select the section. Following sections are Spinal Degenerative. Muscle Atrophy. Autism. Postural imbalance. Mobility impairment. Tendon inflammation. Mental instability. Upper limb disabled. Frozen shoulder.";
        } else if (currentPage.includes('index.html') || currentPage === '/') {
            contentToRead = "Welcome to FitClub! You are on the Home Page. Our platform is designed to be accessible for all users. Keyboard shortcuts available include Alt + U for About Us, Alt + H for Home, Alt + G for Get Started, Alt + C for Contact Us, and Alt + N for the Abnormal Get Started page. If you are disabled, you can easily navigate through our website using these shortcuts. Press Alt + 1 to disable the voice assistance feature, or press Alt + 2 to enable it.";
        } else if(currentPage.includes('lowerbackstrain.html') || currentPage.includes('lowerbackstrain.html')){
            contentToRead = "Enter your weight and height to calculate the BMI";
        }

        // Speak the text if content is available
        if (contentToRead) {
            speakText(contentToRead);
        }
    }

    // Listen for keyboard shortcuts (Alt + 1 for not disabled, Alt + 2 for disabled)
    document.addEventListener('keydown', function (event) {
        if (event.altKey) {
            if (event.key === '1') {
                // Alt + 1: User is NOT disabled
                localStorage.setItem('isDisabled', 'false');
                stopSpeech(); // Stop any ongoing speech
            } else if (event.key === '2') {
                // Alt + 2: User is disabled
                localStorage.setItem('isDisabled', 'true');
                window.location.reload(); // Reload the page to trigger speech
            }
        }
    });

    // Handle font size change
    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;

    function changeFontSize(newSize) {
        document.body.style.fontSize = newSize + 'px';
        localStorage.setItem('fontSize', newSize);
    }

    changeFontSize(currentFontSize);

    // Ensure the elements exist before adding event listeners
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');

    if (increaseFontButton) {
        increaseFontButton.addEventListener('click', function () {
            currentFontSize += 2;
            changeFontSize(currentFontSize);
        });
    }

    if (decreaseFontButton) {
        decreaseFontButton.addEventListener('click', function () {
            currentFontSize = Math.max(10, currentFontSize - 2);
            changeFontSize(currentFontSize);
        });
    }
};
/*document.addEventListener('keydown', function(event) {
    // Check if the Alt key is pressed
    if (event.altKey) {
      switch (event.key.toLowerCase()) {
        case 'u': // Alt + A -> About Us page
          window.location.href = 'aboutus.html';
          break;
        case 'h': // Alt + H -> Home page
          window.location.href = 'index.html';
          break;
        case 'g': // Alt + G -> Get Started page
          window.location.href = 'getstarted.html';
          break;
        case 'c': // Alt + C -> Contact Us page
          window.location.href = 'contact.html';
          break;
        default:
          break;
      }
    }
  });
  

  window.onload = function () {
    // Function to speak the text aloud
    function speakText(text) {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.lang = 'en-US'; // Language set to English
            speech.pitch = 1; // Pitch
            speech.rate = 1; // Speed of speech
            speech.volume = 1; // Volume of speech
            window.speechSynthesis.speak(speech);
        }
    }

    // Function to check if speech should be stopped
    function stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stops any ongoing speech
        }
    }

    // Default behavior: Consider user as disabled (starts with speech)
    let isUserDisabled = localStorage.getItem('isDisabled') || 'true'; // Default to 'true'

    // Check the page and read corresponding content if user is disabled
    if (isUserDisabled === 'true') {
        const currentPage = window.location.pathname;
        let contentToRead = '';

        // Match the content with the current page
        if (currentPage.includes('aboutus.html')) {
            contentToRead = "Welcome to FitClub. Our mission is to provide world-class training and create a supportive environment for fitness enthusiasts. We offer a variety of programs designed to help you reach your fitness goals.";
        } else if (currentPage.includes('contact.html')) {
            contentToRead = "If you have any questions or would like more information, please reach out to us via email at contact@fitclub.com, phone at 123-456-7890, or visit us at 123 Fitness Street, FitCity. or simply fill the below form";
        } else if (currentPage.includes('getstarted.html')) {
            contentToRead = "Get Started with FitClub! Taking the first step towards a healthier you begins here. Start by calculating your Body Mass Index (BMI) using our easy-to-use BMI calculator. This essential tool will help you understand your body composition and set realistic fitness goals. Once you've calculated your BMI, explore our curated selection of instructional videos tailored to your results. These videos cover a variety of workouts and fitness tips to guide you on your journey, whether you're looking to lose weight, gain muscle, or simply improve your overall health. Let’s get started today and take the first step towards achieving your fitness aspirations!";
        } else if (currentPage.includes('index.html') || currentPage === '/') {
            contentToRead = "Welcome to FitClub! Our platform is designed to be accessible for all users. If you are disabled, you can easily navigate through our website using keyboard shortcuts. Press Alt + 1 to disable the voice assistance feature at any time. If you prefer to enable speech assistance, simply press Alt + 2, and our site will read aloud the information relevant to your current page. Explore personalized training sessions, join our vibrant community, and access a range of resources tailored to help you achieve your fitness goals. Join us today and embark on your journey towards a healthier, stronger you!☺";
        }

        // Speak the text if content is available
        if (contentToRead) {
            speakText(contentToRead);
        }
    }

    // Listen for keyboard shortcuts (Alt + 1 for not disabled, Alt + 2 for disabled)
    document.addEventListener('keydown', function (event) {
        if (event.altKey) {
            if (event.key === '1') {
                // Alt + 1: User is NOT disabled
                localStorage.setItem('isDisabled', 'false');
                stopSpeech(); // Stop any ongoing speech
                // alert("Voice assistance disabled.");
            } else if (event.key === '2') {
                // Alt + 2: User is disabled
                localStorage.setItem('isDisabled', 'true');
                // alert("Voice assistance enabled.");
                window.location.reload(); // Reload the page to trigger speech
            }
        }
    });

    changeFontSize(currentFontSize);
};
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;

function changeFontSize(newSize) {
    document.body.style.fontSize = newSize + 'px';
    localStorage.setItem('fontSize', newSize);
}

// window.onload = function() {
//     changeFontSize(currentFontSize);
// };

document.getElementById('increase-font').addEventListener('click', function () {
    currentFontSize += 2;
    changeFontSize(currentFontSize);
});

document.getElementById('decrease-font').addEventListener('click', function () {
    currentFontSize = Math.max(10, currentFontSize - 2);
    changeFontSize(currentFontSize);
});
*/