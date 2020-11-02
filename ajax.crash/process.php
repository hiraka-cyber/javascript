<?php

//connect to a database
$conn = mysqli_connect('localhost','root','123456','ajaxtest');
echo 'Processing..';

//check for post variable
if(iseet($_POST('name'))){
  $name = mysqli_real_escape_string($conn,$_POST['name']);
  //echo 'POST: Your name is '. $_POST['name'];

  $query = "INSERT INTO users(name) VALUES('$name')";

  if(mysqli_qurery($conn,$query)){
    echo 'User Added...';
  }else{
    echo 'Error:'.mysqli_error($conn);
  }
}

//check for get variable
if(iseet($_GET('name'))){
  echo 'GET: Your name is '. $_GET['name'];
}
