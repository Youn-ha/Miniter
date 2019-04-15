const data2 = {
  "ID": "yuna",
  "PW": "950118"
};

const whereIsLoginBtn = document.getElementsByTagName('button')[0];


const thisIsId = document.getElementById('inputId');
const thisIsPw = document.getElementById('inputPw');



whereIsLoginBtn.addEventListener('click', function(){

  const thisIsIdVl = thisIsId.value
  const thisIsPwVl = thisIsPw.value

    if(thisIsIdVl === data2["ID"] && thisIsPwVl === data2["PW"]){ 
      alert('로그인 성공!');
      return;
    } else if (!thisIsIdVl){
      alert('아이디를 입력해주세요.');
      return;
    } else if (!thisIsPwVl){
      // 틀린 아이디나 패스워드를 확인하는 법임.
      alert('비밀번호를 입력해주세요.');
      return;
    } else if (thisIsIdVl !== data2["ID"] || thisIsPwVl !== data2["PW"]){
      alert('아이디나 비밀번호를 확인해주세요.');
      return;
    }


});
