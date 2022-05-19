document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

document.getElementById("loginform").addEventListener("submit",(event)=>{
	event.preventDefault()

})

firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		location.replace("web.html")
	}
})

function  signin(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
}

