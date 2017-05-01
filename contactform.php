<!DOCTYPE html>
<html>
<head>
</head>
<body>

<?php
include 'database.php';
$q = $_GET['q'];

$str = explode("|",$q);
$name = $str[0];
$email = $str[1];
$formsubject = $str[2];
$message = $str[3];

/*$to = "impairbit@gmail.com";
$subject = $formsubject;
$txt = "Message from contact" +$message + "Contact name" + $name +"Contact email" + $email;
$headers = "From: thameem6.4.92@gmail.com" ;
//. "\r\n" ."CC: aaj6.4.92@gmail.com";

mail($to,$subject,$txt);*/

	$sql="INSERT INTO contact_form (Name,Email,Subject,Message) VALUES ('$name','$email','$formsubject','$message')";
		if ($conn->query($sql) === TRUE) {
			echo "Email sent successfully, Thank you for contacting us we will get back to you shortly.";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	$conn->close();
		
?>
</body>
</html>