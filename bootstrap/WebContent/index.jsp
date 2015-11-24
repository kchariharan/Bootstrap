<%@ include file="common/header.jsp"%>
<head>
<link rel="stylesheet" href="css/custom/signin.css">
<style type="text/css">

</style>
</head>
<div class="login_container">
	<div class="container">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">Login</h3>
			</div>
			<div class="panel-body">
				<form class="form-signin" role="form">
					<h2 class="form-signin-heading">Please sign in</h2>
					<input type="email" class="form-control" placeholder="Email address"> 
					<input type="password" class="form-control" placeholder="Password">
					<label class="checkbox"> 
					<input type="checkbox" value="remember-me">Remember me
					</label>
					<button class="btn btn-lg btn-primary btn-block" type="submit">Sign	in</button>
				</form>
			</div>
		</div>
</div>
</div>
<%@ include file="common/footer.jsp"%>