const quiz = [
  {
    question: 'サックスは次のうちどの楽器の仲間でしょう？',
    answers: [
      '弦楽器',
      '木管楽器',
      '金管楽器',
      '打楽器'
    ],
    correct: '木管楽器'
  },{
    question: '世界で一番面積の小さな国は？',
    answers: [
      'モナコ',
      'ナウル',
      'バチカン',
      'ツバル'
    ],
    correct: 'バチカン'
  },{
    question: '世界で二番目に面積の大きな国は？',
    answers: [
      'カナダ',
      'アメリカ合衆国',
      '中華人民共和国',
      'ロシア'
    ],
    correct: 'カナダ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength =$button.length;
  while(buttonIndex < buttonLength) {
  //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
