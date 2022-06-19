import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { AnsType, QuestionType } from './quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  quizform = new FormGroup({});

  public ansArray:AnsType[]=[];

  public ans:string =''
  public index:number=0;
  public questions: QuestionType[] = [];
  constructor(private api: ApiService) {
  }



  ngOnInit(): void {
    this.api.getQuestions().subscribe((res:any) => {
      this.questions=res;
    });
  }

  changeQuestion(direction: string) {
    if (direction === 'next') {
      this.index = this.index + 1;
    } else {
      this.index = this.index - 1;
    }
    console.log('question', this.index);
  }

  handleFormSubmit(question: any) {

    if(!this.ansArray.includes(question.id)){
    this.ansArray.push({
      question: question.question,
      id: question.id,
      ans: this.ans
    })
    this.index = this.index + 1;
    
  }
  }

  viewResult(){
    console.log(this.ansArray)

  }

}
