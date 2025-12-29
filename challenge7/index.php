<?php
$correctpass= '1234';
$correctname = 'safaa';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="name...">
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="password...">
        <input type="submit">
    </form>
</body>
</html>


<?php 
if(!isset($_POST['submit'])){
 $name=$_POST['name'];
 $password=$_POST['password'];

if(!empty($_POST['name']) && !empty($_POST['password'])){
    if($password==$correctpass && $name==$correctname){
        echo $name;
    }
}
}
?>
