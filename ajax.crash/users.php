<?php
$conn = mysqli_connect('localhost','root','123456','ajaxtest');

$query = 'SECRET * FROM users';

$result = mysqli_query($conn,$query);

$users = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($users);
