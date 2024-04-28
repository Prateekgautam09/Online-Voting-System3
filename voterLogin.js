var pass=document.getElementById('pass');
    var letter=document.getElementById('letter');
    var capital=document.getElementById('capital');
    var number=document.getElementById('number');
    var length=document.getElementById('length');
    var svg=document.getElementById('lock');
    var login=document.getElementById('loginButton');
    var email=document.getElementById('email');
    var lc=0;
    var cc=0;
    var nc=0;
    var lec=0;
    pass.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }
    pass.onblur = function() {
        document.getElementById("message").style.display = "none";
    }
    
    function passVal() {
  // Validate lowercase letters
  var lower = /[a-z]/g;
  if(pass.value.match(lower)) {
    letter.style.color="green";
    lc++;
  } else {
    letter.style.color="red";
  }
  // Validate capital letters
  var upper = /[A-Z]/g;
  if(pass.value.match(upper)) {
    capital.style.color="green";
    cc++;
  } else {
    capital.style.color="red";
  }

  // Validate numbers
  var num = /[0-9]/g;
  if(pass.value.match(num)) {
    number.style.color="green";
    nc++;
  } else {
    number.style.color="red";
  }

  // Validate length
  if(pass.value.length >= 8) {
    length.style.color="green";
    lec++;
  } else {
    length.style.color="red";
  }
}  function submit(){
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (lc>0 && cc>0 && nc>0 && lec>0 && email.value.match(pattern)){
svg.innerHTML='<path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>';
setTimeout(function(){window.location.href="./voter.html";},500);
}
else {
alert("Please enter correct Email Address and Password!");
window.location.reload();
}
} 