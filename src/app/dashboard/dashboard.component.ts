import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  setofWords=[ "He looked down at the ground knowing that she would not like his answer He hesitated, knowing that the truth would only hurt ",
  "There was a time when he would have embraced the change that was coming He looked down at the ground knowing that she would not like his answer",
  "He hesitated, knowing that the truth would only hurt There was a time when he would have embraced the change that was coming",
     "Please take your dog, Cali, out for a walk – he really needs some exercise!"
    ]

  innerText: string;
  input_text: any;
  timeLeft: number = 25;
  interval;
  textCount: any;
  Intext: any;
  words: any;
  typeWord: any;
  errorCount :number = 0;
  accurateCount : number  = 0;
  accuracyPercent : any = 0;
  textWrapper: any;

  constructor() { }

  ngOnInit(): void {
      this.startTest();
  }

  startTest(){
    let randomWord = Math.floor(Math.random()*this.setofWords.length);
   this.innerText = this.setofWords[randomWord];
   console.log(randomWord);
  }

   setTimer(){
    let timer = 25;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        timer = timer-1;
        this.timeLeft = timer;
      }else{
        this.words = this.typeWord.split(" ").length;
        this.stopTimer();
      }
    },1000)
    console.log(this.interval)
  }

  stopTimer(){
    this.accuracyPercent = (this.accurateCount / (this.accurateCount  + this.errorCount) * 100).toFixed(2);
    clearInterval(this.interval);
  } 

  onAccuracyCheck(event){
    let text = event.target.value;
    this.typeWord = text;
    let length =  this.typeWord.length;
    let temp = this.innerText;
    let typedWordTemp = temp.substr(0,length);
    if(text !== typedWordTemp ){
      text = text.substr(0,length - 1);
      this.typeWord = this.typeWord + text.substr(length-1 ,1)
      event.target.value = text;
      this.errorCount++;
    }else{
      this.accurateCount++;
    }
  }
    /* if(this.innerText[0] == this.typeWord){
      this.textWrapper.style.borderColor = 'green';
   }else{
     this.textWrapper.style.borderColor = 'red';
   } */

    
     // let textLength =text.length ;

  

  highlightText(){
   
  }


  reloadPage(){
    location.reload();
  }

  onClick(){
    this.timeLeft =60;
     this.setTimer();
  }


  }


  


