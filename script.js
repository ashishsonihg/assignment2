let ans=0;
let calc=addEventListener('click', onClick);

function onClick(e){
  let btnValue=e.target.value;
  let type=e.target.dataset.type;
  if(type=="evalRes" || type=="getAns"){
      window[type]();

  }
  else{
    window[type](e.target.value);
  }
}

function clr() {
  document.getElementById("result").value = "";
}
function backspace(){
  let editVal=document.getElementById("result").value.slice(0, -1);
  document.getElementById("result").value=editVal;
}
function upScreen(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "";
  }
  res.value += value;
}

function evalRes(){
  let res=document.getElementById('result').value;
  res=res.replace("^","**");
  res=Math.round(eval(res)*1000000000)/1000000000;
  document.getElementById('result').value=res;
  ans=res;
}

function trig(value){
  let res=document.getElementById('result');
  let val;
  switch (value) {
    case "sin":
          val=Math.sin(Math.PI*res.value/180)
    case "cos":
          val=Math.cos(Math.PI*res.value/180)
    case "tan":
          val=Math.tan(Math.PI*res.value/180)

      break;
    default:

  }
  res.value=Math.round(val*1000000000)/1000000000;
}

function getAns(){
  document.getElementById('result').value=ans

}
