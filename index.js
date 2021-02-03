const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const input = document.querySelector("input")
const btn = document.querySelectorAll("button");

const text = [
  "あ", "い", "う", "え", "お",
  "か","き","く","け","こ",
  "さ","し","す","せ","そ",
  "た","ち","つ","て","と",
  "な","に","ぬ","ね","の",
  "は","ひ","ふ","へ","ほ",
  "ま","み","む","め","も",
  "や","ゆ","よ",
  "ら","り","る","れ","ろ",
  "わ",
];

const text2 = [
  "아", "이", "우", "에", "오",
  "가 카","기 키","구 쿠","게 케","고 코",
  "사", "시", "수", "세", "소",
  "다 타", "디 티", "두 투", "데 테", "도 토",
  "나", "니", "누", "네", "노",
  "하", "히", "후", "헤", "호",
  "마", "미", "무", "메", "모",
  "야", "유", "요",
  "라", "리", "루", "레", "로",
  "와",
];

btn[0].addEventListener("click", e => {
  e.preventDefault();
  const va = input.value;
  for(let i = 0; i<text.length; i++){
    switch(va){
      case text[i]:
      h2.textContent=text2[i];
      h2.classList.add('h2')
      break;
     }
  };
  input.value = "";
});

btn[1].addEventListener('click',e=>{
  e.preventDefault();
  h2.textContent=""
  h2.classList.remove('h2');
})
  
