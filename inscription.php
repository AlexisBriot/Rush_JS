<html>
<head>
	<title></title>

<?php  

	if (isset($_POST['login']))
	{

	 	header("Location: ./phpinscription.php");

	}


	if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['passwordcheck']) && $_POST['password'] == $_POST['passwordcheck']) 
	{
	
	$_SESSION['name'] = $_POST['name'];
	$_SESSION['email'] = $_POST['email'];
	$_SESSION['password'] = $_POST['password'];

		if ($_SESSION['status'] == "KO")
		{

		echo "Error! If you are an existing user, please log in";

		}
	}

	if (isset($_POST['password']) && isset ($_POST['passwordcheck']) && $_POST['password'] != $_POST['passwordcheck'])
	{
		echo"Passwords are not matching bitch!";
	}

?>


</head>
<body>

<header>

<p>Bienvenue</p>


<form id ="log" action ="inscription.php" method ="post" accept-charset="UTF-8" enctype="multipart/form-data">
<button type="submit" name="login"  >Log in</button>
</form>

</header>

 	<form id ="register" action ="inscription.php" method ="post" accept-charset="UTF-8" enctype="multipart/form-data">
 	<br>
	<legend><br>Userame:</legend>
	<input type="text" required name="name" minlength="3" maxlength="10">
	<legend><br>Email address:</legend>
	<input type="email" required name="email">
	<legend><br>Password:</legend>
	<input type="password" required name="password" minlength="3" maxlength="15">
	<br>
	<legend><br>Password confirmation:</legend>
	<input type="password" required name="passwordcheck" minlength="3" maxlength="15">
	<br>
	<br><button type="submit" name="submit">Submit</button>
	</form>

</body>
</html>