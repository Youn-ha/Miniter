let myNameInJS = 'Yuna Kwon';

let whereIsMyName = document.getElementById("myName");
whereIsMyName.innerHTML = myNameInJS;

const data = [{
    "contents": "Name It, and They Will Come",
    "date": "20190327",
    "user": "Yuna Kwon"
  },{
    "contents": "첫 트윗",
    "date": "20190327",
    "user": "Yeri Kim"
  },{
    "contents": "Landed in SF. Gonna be here until Friday. ",
    "date": "20190324",
    "user": "Dan Abramov"
  },{
    "contents": "I love React and Vue and don't like framework wars ",
    "date": "20190323",
    "user": "Yuna Kwon"
  },{
    "contents": "Y’all have been phenomenal. Thank you for sharing your earnest thoughts. I’m so grateful. Much to chew on. ",
    "date": "20190323",
    "user": "Dan Abramov"
  },{
    "contents": "roughly 2 years as an indie dev now, it's hard not to give up sometimes, I'm not even close to where I'd like to be, but seeing other indie developers succeed is still motivating—the potential for complete freedom over your time is too enticing",
    "date": "20190322",
    "user": "Yuna Kwon"
  },{
    "contents": "Huh",
    "date": "20190321",
    "user": "Dan Abramov"
  },{
    "contents": "They’re gonna have a problem hiring for this role.",
    "date": "20190320",
    "user": "Dan Abramov"
  },{
    "contents": "오늘의 신기한 경험 일본어/영어로된 README 에 대한 한국어  PR 을 보냈는데 owner 가 일본인이라 일본어로 리뷰 달아줌. 일본어를 1도 몰라 번역기 돌려서 대충 알아듣고 수정함. owner 는 한국어를 몰라 자기 트위터 친구한테 물어보고 merge 해줬다함. ㅎㅎㅎㅎ",
    "date": "20190306",
    "user": "Insanehong"
  }];



let whereIsData = document.getElementsByClassName('iAmUl')[0];
let count = 0;

for (let i=0; i<=data.length-1; i++){
  let thisIsUserP = document.createElement('p');
  let thisIsTweetP = document.createElement('p');
  let thisIsLi = document.createElement('li');

console.log(data[i]["user"]);

  let tweetData = data[i]["contents"];
  let userData = data[i]["user"];

  thisIsUserP.className = 'userName';
  thisIsTweetP.className = 'tweetContent';

  thisIsUserP.innerHTML = userData;
  thisIsTweetP.innerHTML = tweetData;

  thisIsLi.appendChild(thisIsUserP);
  thisIsLi.appendChild(thisIsTweetP);

  whereIsData.appendChild(thisIsLi);

  let whatIsDataNum = [];
  if (data[i]['user']===myNameInJS){
    count = count+1;
  } 
}

let thisIsTweetNum = document.createElement('p');
let whereNumIsGoing = document.getElementById('bigBlueNum');
whereNumIsGoing.innerHTML = count;


console.log(data);
