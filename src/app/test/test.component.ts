import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../shared/api.service';
import { examData } from './test.model';
// import { questionType } from './test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  time: number = 0;
  interval: any;
  index: number = 0;

  allTestData: any;
  formValue!: FormGroup;
  examModelobj: examData = new examData();
  allexamData: any;
  randomTen: examData[] = [];
  timeLeft: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.getAllData();


    
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      question: [''],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
    });
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  generateRandomTen(): number[] {
    const arr: number[] = [];
    while (arr.length < 8) {
      const r = Math.floor(Math.random() * 50) + 1;
      if (arr.indexOf(r) === -1) {
        arr.push(r);
      }
    }
    return arr;
  }

  getAllData() {
    let count = 50;
    this.api.getTest().subscribe((res) => {
      this.allexamData = res;
      this.setData();
    });
  }

  setData() {
    const arr = this.generateRandomTen();
    for (let x in arr) {
      this.randomTen.push(
        this.allexamData.find((item: examData) => {
          return item.id === arr[x];
        })
      );
    }
  }

  changeQuestion(direction: string) {
    if (direction === 'next') {
      this.index = this.index + 1;
    } else {
      this.index = this.index - 1;
    }
    console.log('question', this.index);
  }

  postUser() {
    this.examModelobj.question = this.formValue.value.question;
    this.examModelobj.option1 = this.formValue.value.option1;
    this.examModelobj.option2 = this.formValue.value.option2;
    this.examModelobj.option3 = this.formValue.value.option3;
    this.examModelobj.option4 = this.formValue.value.option4;

    this.api.postUsers(this.examModelobj).subscribe(
      (res) => {
        console.log(res);
        // alert('test added successfully');
        // let ref =document.getElementById('clear');
        // ref?.click();
        // this.formValue.reset()
        // this.getAllData();
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
}
