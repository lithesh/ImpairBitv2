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

$sql="SELECT * FROM `demo_form` WHERE email = '".$email."'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	echo "Already registered for demo";	
mysqli_close($conn);					
} else {
	$sql="INSERT INTO demo_form (Name,email) VALUES ('$name','$email')";
		if ($conn->query($sql) === TRUE) {
			echo "";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	$conn->close();
		echo "Registered for demo successfully";
}
?>
</body>
</html>