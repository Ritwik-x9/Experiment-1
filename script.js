document.getElementById("form").addEventListener("submit",function(event){event.preventDefault();
	let name=document.getElementById("name").value;
	let email=document.getElementById("email").value;
	let password=document.getElementById("password").value;
	let gender=" ";
	let g=document.getElementByIdName("gender");
	for(let i=0;i<g.length;i++)
	{
		if(g[i].checked)
		{
			gender=g[i].value;
		}
	}
	let country=document.getElementById("country").value;
	let terms=document.getElementById("terms").value;
	if(name==" "||email==" "||password==" "||cpassword==" ")
	{
		alert("Please fill all fields");
		return;
	}
	if(password!=cpassword)
	{
		alert("Password doesn't match");
		return;
	}
	if(gender==" ")
	{
		alert("select gender");
		return;
	}
	if(country==" ")
	{
		alert("select country");
		return;
	}
	if(!terms)
	{
		alert("Accept terms and condition");
		return;
	}
	document.getElementById("message").innerHTML="Registration Successfull";
	document.getElementById("output").innerHTML="<p><b>Name:</b>"+name+"</p>"+"<p><b>Email:</b>"+email+"</p>"+"<p><b>Gender:<p>"+"<p><b>Country:</b>"+country+"<p>";
	document.getElementById("form").reset();
});
