<html>
<head>
<title>Yohoho!mvn</title>
</head>
<body>
Yohoho!<br/>- - - - -<br/><br/>
<?php

//phpinfo();

$link = mysqli_connect('mysql', 'root', '123');
if (!$link) {
    die('Ошибка соединения: ' . mysqli_error());
}
echo 'Успешно соединились'."<br>";
mysqli_close($link);

//

$conn = new mysqli("mysql", "root", "123", "m_db");
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error."<br>");
} else {
	echo "connected"."<br>";
}

echo "- - - - -"."<br>";

$sql = "SELECT * FROM `table-one` ;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		echo $row['id'].' _ '.$row['name'].' # '.$row['datetime'].' = '.$row['level']."<br>";
	}
} else {
	echo "0 results"."<br>";
}
$conn->close();

echo "- - - - -"."<br>";

//

$conn = new PDO("mysql:host=mysql;dbname=m_db", 'root', '123');

$sql = 'SHOW DATABASES;';

$q = $conn->query($sql);

while ($row = $q->fetch()){
  print_r($row);
  echo "<br>";
}
?>
</body>
</html>
