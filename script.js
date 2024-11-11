// FAQ 
let questionBtn = document.getElementsByClassName('question');
let answerInfos = document.getElementsByClassName('answer');
let toggleMarks = document.getElementsByClassName('toggle-mark');

//  Toggle the display of the answer
for(let i = 0; i < questionBtn.length; i++){
  questionBtn[i].addEventListener('click',function(){
    
    if (answerInfos[i].style.display === 'block') {
      answerInfos[i].style.display = 'none';
      toggleMarks[i].textContent = '+';
    
    }else{
      answerInfos[i].style.display = 'block';
      toggleMarks[i].textContent = '-';
 
      questionBtn[i].style.color = 'red';
      questionBtn[i].style.backgroundColor = 'lightgray';
    }
  });
}

