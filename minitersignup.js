const whereIsSignBtn = document.getElementById('signBtn');


  const whereIsSignId = document.getElementById('signupId');  const whereIsSignName = document.getElementById('signupName');
  const whereIsSignPw = document.getElementById('signupPw');
  const whereIsSignRePw = document.getElementById('signupRePw');
  const whereIsPfl = document.getElementById('signupProfile');

whereIsSignBtn.addEventListener('click', function(){

  const whereIsSignIdVl = whereIsSignId.value;
  const whereIsSignNameVl = whereIsSignName.value;
  const whereIsSignPwVl = whereIsSignPw.value;
  const whereIsSignRePwVl = whereIsSignRePw.value;

  if (!whereIsSignIdVl){
    alert('ID를 입력해주세요!');
    return;
  } else if (!whereIsSignNameVl){
    alert('이름을 입력해주세요!');
    return;
  } else if (!whereIsSignPwVl){
    alert('Password를 입력해주세요!');
    return;
  } else if (!whereIsSignRePwVl){
    alert('Password 확인을 입력해주세요!');
    return;
  } else if (whereIsSignPwVl !== whereIsSignRePwVl){
    alert('Password 와 Password 확인이 다릅니다.');
    return;
  } else {
    alert('환영합니다!');
  }

});


