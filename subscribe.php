<!DOCTYPE html>
<html>
<head>
</head>
<body>

<?php
include 'database.php';
$q = $_GET['q'];

$sql="SELECT * FROM `subscribe_details` WHERE email = '".$q."'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	echo "Email already exists";	
mysqli_close($conn);					
} else {
	$sql="INSERT INTO SUBSCRIBE_DETAILS (email) VALUES ('$q')";
		if ($conn->query($sql) === TRUE) {
			echo "Thank you for subscribing. We will get back to you shortly";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	$conn->close();
}
?>
</body>
</html>