<!-- PHP CODE -->
<?php
   if(isset($_POST['result'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $host = 'localhost';
        $user = 'root';
        $pass = '';
        $dbname = 'project';
        
        $conn = mysqli_connect($host,$user,$pass,$dbname);
        $sql = "INSERT INTO signup(Username, Email, Password) values ('$username', '$email', '$password')";
        mysqli_query($conn, $sql);
    }
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login_page.css">
    <link rel="icon" type="image/jpeg" href="https://i.postimg.cc/257dpKGk/logo.jpg">
    <title>Login</title>
</head>
<body>
    <h1 class="greeting" id="greeting">Welcome to the digital library</h1>
    <h3 class="greeting" >Get signed in to unlock all the benifits</h3>
    <div class="main_box">
        <!-- Box 1 - Start -->
        <div class="box1" id="box1">
            <div class="text">
                <h1>Sign in</h1>
            </div>
            <div class="sign_in">
                <img alt="google" src="https://i.postimg.cc/x86Kp19j/google-logo.png" class="logo">
                <img alt="facebook" src="https://i.postimg.cc/zBSwWkMg/facebook-logo.jpg" class="logo">
                <img alt="github" src="https://i.postimg.cc/BZpcnM2W/github-logo.png" class="logo">
                <img alt="linkedin" src="https://i.postimg.cc/TPZ0618t/linkedin-logo.png" class="logo">
            </div>
            <div class="inputs">
                <p class="text">Enter all the required credentials</p>
                <div class="data_input">
                    <div class="user_input">
                        <input type="email" placeholder="Email" class="user_input" id="email_input_sign_in">
                    </div>
                    <div class="user_input" id="ui">
                        <input type="password" placeholder="Password" maxlength="10" class="user_input" id="password_input_sign_in">
                        <div class="hide_show">
                            <img src="https://i.postimg.cc/Dy1Bj7My/visibility.png" id="show_password_sign_in" onclick="show_sign_in()" alt="show">
                            <img src="https://i.postimg.cc/x8nc9ynF/visible.png" id="hide_password_sign_in" onclick="hide_sign_in()" alt="hide">
                        </div>
                    </div>
                </div>
            </div>
            <div class="error--message">
                <p id="error-message">ERROR</p>
            </div>
            <div class="btn" onclick="sign_in_btn()">
                <p class="dummy-text">Sign in</p>
                <a class="sign_in_btn" href="home.html" target="_blank">Sign in</a>
            </div>
        </div>
        <!-- Box 1 - End -->
        <!-- Box 2 - Start -->
        <div class="box2" id="box2">
            <div class="create_account">
                <div class="text">
                    <h1 id="title">Hello, friend!</h1>
                </div>
                <div class="text">
                    <p id="sub_title">New to this website? Create an account now to get interesting offers !!</p>
                </div>
                <div class="create_acc">
                    <button class="sign_up" id="sign_up" onclick="sign_up_btn()">Sign up</button>
                </div>
            </div>
        </div>
        <!-- Box 2 End -->
        <!-- Box 3 - Start -->
        <div class="box3">
            <div class="text">
                <h1>Create account</h1>
            </div>
            <div class="sign_in">
                <img alt="google" src="https://i.postimg.cc/x86Kp19j/google-logo.png" class="logo">
                <img alt="facebook" src="https://i.postimg.cc/zBSwWkMg/facebook-logo.jpg" class="logo">
                <img alt="github" src="https://i.postimg.cc/BZpcnM2W/github-logo.png" class="logo">
                <img alt="linkedin" src="https://i.postimg.cc/TPZ0618t/linkedin-logo.png" class="logo">
            </div>
            <div class="inputs">
                <div class="data_input">
                    <form action ="#" method="POST">
                        <div class="user_input">
                            <input name="username" type="text" placeholder="Username" class="user_input" id="name_input_sign_up">
                        </div>
                        <div class="user_input">
                            <input  name="email" type="email"  placeholder="Email" class="user_input" id="email_input_sign_up">
                        </div>
                        <div class="user_input"  id="ui">
                            <input name="password" type="password" placeholder="Password" maxlength="10" class="user_input" id="password_input_sign_up">
                            <div class="hide_show">
                                <img src="https://i.postimg.cc/Dy1Bj7My/visibility.png" id="show_password_sign_up" onclick="show_sign_up()" alt="show">
                                <img src="https://i.postimg.cc/x8nc9ynF/visible.png" id="hide_password_sign_up" onclick="hide_sign_up()" alt="hide">
                            </div>
                        </div>
                </div>
            </div>
            <div class="error--message">
                <p id="error-message2">ERROR</p>
            </div>
            <div class="btn2">
                <button name="result" onclick="sign_in_btn2()" class="btn2">Sign up</button>
                <!-- <a class="sign_in_btn2" href="home.html">Sign up</a> -->
            </div>
            </form>
        </div>
        <!-- Box 3 - End -->
    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</body>
<script src="login_page.js" defer></script>
</html>
