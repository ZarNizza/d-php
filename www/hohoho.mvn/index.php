<html>
<head>
<title>Hohoho!mvn</title>
</head>
<body>
Hohoho!<br/>- - - - -<br/><br/>
<?php

//phpinfo();

$link = mysqli_connect('mysql', 'root', '123');
if (!$link) {
    die('Ошибка соединения: ' . mysqli_error());
}
echo 'Успешно соединились, Hohoho!';
mysqli_close($link);

?>
</body>
</html>
