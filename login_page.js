function show_sign_in() {
    document.getElementById("password_input_sign_in").type = 'text';
    $("#show_password_sign_in").css("display","none");
    $("#hide_password_sign_in").css("display","inline");
}

function show_sign_up() {
    document.getElementById("password_input_sign_up").type = 'text';
    $("#show_password_sign_up").css("display","none");
    $("#hide_password_sign_up").css("display","inline");
}

function hide_sign_in() {
    document.getElementById("password_input_sign_in").type = 'password';
    $("#hide_password_sign_in").css("display","none");
    $("#show_password_sign_in").css("display","inline");
}

function hide_sign_up() {
    document.getElementById("password_input_sign_up").type = 'password';
    $("#hide_password_sign_up").css("display","none");
    $("#show_password_sign_up").css("display","inline");
}
function sign_in_btn() {

    // Get values from input fields and ensure they are treated as strings
    var email = String(document.getElementById("email_input_sign_in").value).trim();
    var password = String(document.getElementById("password_input_sign_in").value).trim();

    const size_email = email.length;
    const size_password = password.length;

    // --- Input Validation Check ---
    // Added a check for password length being exactly 10 as per your original code's logic
    if (size_email === 0 || size_password === 0 || size_password !== 10) {
        // Display error message for missing/invalid details
        $("#error-message").css("display", "inline").css("color", "red");
        document.getElementById("error-message").innerHTML = "Please enter a valid email and a 10-digit password.";
        return; // Stop execution if validation fails
    }

    // Show loading/waiting message before fetching data
    $("#error-message").css("display", "inline").css("color", "blue");
    document.getElementById("error-message").innerHTML = "Checking credentials...";

    // --- Fetch Data and Credential Check ---
    // const url = "http://localhost/LIBRARY%20MANAGEMENT%20SYSTEM/Login%20page/getdata.php";
    const url = "http://localhost/Library Management System/Login page/getdata.php";

    fetch(url)
        .then(response => {
            // Check if the response is OK (status 200)
            console.log(response);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the JSON response body
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data); // Log the received data
            
            // Flag to track if a match is found
            let matchFound = false;

            // Iterate over the array of user objects
            for (const user of data) {
                // Check if the entered email and password match any user in the fetched data
                if (user.Email === email && user.Password === password) {
                    matchFound = true;
                    break; // Exit the loop once a match is found
                }
            }

            if (matchFound) {
                // --- Success Case ---
                // Display success message
                $("#error-message").css("display", "inline").css("color", "#006200ff");
                document.getElementById("error-message").innerHTML = "Login successful! Redirecting...";
                // document.getElementById("email_display").innerHTML = email;  

                // Redirect to home.html
                window.location.href = "main.html";
            } else {
                // --- Failure Case (No Match) ---
                $("#error-message").css("display", "inline").css("color", "red");
                document.getElementById("error-message").innerHTML = "Invalid email or password. Please try again.";
            }
        })
        .catch(error => {
            // Handle any errors during the fetch or JSON parsing
            console.error("Fetch/Processing error:", error);
            $("#error-message").css("display", "inline").css("color", "red");
            document.getElementById("error-message").innerHTML = "An error occurred while connecting to the server. Please try again.";
        });
}

function sign_in_btn2() {
    var name = String(document.getElementById("name_input_sign_up").value);
    var email = String(document.getElementById("email_input_sign_up").value);
    var password = String(document.getElementById("password_input_sign_up").value);
    const size_name = name.length;
    const size_email = email.length;
    const size_password = password.length;
    if(size_name == 0 || size_email == 0 || size_password != 10) {
        $("#error-message2").css("display","inline");
        document.getElementById("error-message2").innerHTML = "Please enter all the details";
    }
    else {
        $(".dummy-text2").css("display","none");
        $("#error-message2").css("color","#006200ff");
        document.getElementById("error-message2").innerHTML = "Click sign in button again."
        $(".sign_in_btn2").css("display","inline-block");
        $(".box3").css("display","inline-block");
        $(".box3").css("height","450px");
        $(".box3").css("margin-left","30px");
        $(".box3").css("margin-top","-1000px");
    }
}

function sign_up_btn() {
    let btn_sign_in = document.querySelector(".sign_up");
    let title = document.querySelector("#title");
    let sub_title = document.querySelector("#sub_title");
    if(btn_sign_in.innerHTML === 'Sign up') {
        $("#box2").css("margin-left","-354px");
        $("#box2").css("border-radius","140px");
        $("#box2").css("border-top-left-radius","35px");
        $("#box2").css("border-bottom-left-radius","35px");
        $("#box2").css("transition-duration","2s");
        $("#box2").css("background-color","#ffffff");
        $("#box2").css("border-color","#ffffff");
        $("#box2").css("display","inline");
        $("#box2").css("width","342px");
        $(".sign_up").css("background-color","#9452ff");
        $(".sign_up").css("border-color","#9452ff");
        $(".sign_up").css("transition-duration","2s");
        $(".main_box").css("border-color","#9542ff");
        $("#box2, #box3").css("display","inline-block");
        $(".main_box").css("background-color","#9452ff");
        $(".main_box").css("transition-duration","2s");
        $(".box3").css("display","inline-block");
        $(".box3").css("height","450px");
        $(".box3").css("margin-left","30px");
        $(".box3").css("margin-top","-1000px");
        $(".box3 .text").css("color","#000000");
        btn_sign_in.innerHTML = "Sign in";
        title.innerHTML = "Already have an account?";
        sub_title.innerHTML = "Click on the button below to sign in";
    }
    else {
        btn_sign_in.innerHTML = "Sign up";
        title.innerHTML = "Hello, friend!";
        sub_title.innerHTML = "New to this website? Create an account now to get interesting offers !!";
        $("#box2").css("margin-left","5px");
        $("#box2").css("border-radius","140px");
        $("#box2").css("border-top-right-radius","35px");
        $("#box2").css("border-bottom-right-radius","35px");
        $(".main_box").css("background-color","#ffffff");
        $(".box3 .text").css("color","#ffffff");
        $(".main_box").css("border-color","#ffffff");
        $("#box2").css("background-color","#9452ff");
        $("#box2").css("border-color","#9452ff");
        $(".sign_up").css("background-color","#ffffff")
    }
}