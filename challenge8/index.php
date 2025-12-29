<?php 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="GET">
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="username...">
        <input type="submit" name="envoi">
    </form>
</body>
</html>


<?php 
if(isset($_GET['envoi'])){
    $username=$_GET['username'];
    $_SESSION['username']=$username;
    header('Location: test.php');
};


?>