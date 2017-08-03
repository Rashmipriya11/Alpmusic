<?php
  $name= $_POST['name']; 
  $number= $_POST['number']; 
  $email= $_POST['email']; 
  $message= $_POST['message'];
  $to="aluruakash@gmail.com";
  $subject= "Goal'dinaire Business Solutions";
  $body= "From: $name\n E-mail: $email\n Message: $message\n";
  mail($to,$subject,$body);
  echo "Message sent!,Thank you will contact you soon"
?>
