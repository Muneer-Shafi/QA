import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { testData } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formValue!: FormGroup;
  testModelobj: testData = new testData();
  allTestData: any;
  showBtn: boolean | undefined;
  showAdd: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['', [Validators.required]],
      option1: ['', [Validators.required]],
      option2: ['', [Validators.required]],
      option3: ['', [Validators.required]],
      option4: ['', [Validators.required]],
    });

    this.getAllData();
  }
  get name() {
    return this.formValue.get('name');
  }
  get option1() {
    return this.formValue.get('option1');
  }
  get option2() {
    return this.formValue.get('option2');
  }
  get option3() {
    return this.formValue.get('option3');
  }
  get option4() {
    return this.formValue.get('option4');
  }

  clickAddTest() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  addTest() {
    this.testModelobj.name = this.formValue.value.name;
    this.testModelobj.option1 = this.formValue.value.option1;
    this.testModelobj.option2 = this.formValue.value.option2;
    this.testModelobj.option3 = this.formValue.value.option3;
    this.testModelobj.option4 = this.formValue.value.option4;

    this.api.postTest(this.testModelobj).subscribe(
      (res) => {
        console.log(res);
        alert('test added successfully');
        let ref = document.getElementById('clear');
        ref?.click();
        this.formValue.reset();
        this.getAllData();
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
  getAllData() {
    this.api.getTest().subscribe((res) => {
      this.allTestData = res;
    });
  }

  deleteTest(data: any) {
    this.api.deleteTest(data.id).subscribe((res) => {
      alert('Record Deleted ');
      this.getAllData();
    });
  }
  onEditTest(data: any) {
    this.showAdd = false;
    this.showBtn = true;

    this.testModelobj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['option1'].setValue(data.option1);
    this.formValue.controls['option2'].setValue(data.option2);
    this.formValue.controls['option3'].setValue(data.option3);
    this.formValue.controls['option4'].setValue(data.option4);

    this.getAllData();
  }
  updateTest() {
    this.testModelobj.name = this.formValue.value.name;
    this.testModelobj.option1 = this.formValue.value.option1;
    this.testModelobj.option2 = this.formValue.value.option2;
    this.testModelobj.option3 = this.formValue.value.option3;
    this.testModelobj.option4 = this.formValue.value.option4;

    this.api
      .updateTest(this.testModelobj, this.testModelobj.id)
      .subscribe((res) => {
        alert('record updated successfully');
        console.log(res);

        let ref = document.getElementById('clear');
        ref?.click();
        this.formValue.reset();
        this.getAllData();
      });
  }

  displayStyle = 'none';

  openPopup() {
    console.log('working');
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
