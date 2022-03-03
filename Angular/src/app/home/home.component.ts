import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AFCService } from '../afc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toppingList: string[] = ['Chennai', 'Hyderabad', 'Bangalore', 'Delhi', 'Mumbai', 'Vizag'];
  Books:any = [];

  userForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private service:AFCService
  ){
    this.userForm = this.formBuilder.group({
      fullName : [''],
      countryNo : [''],
      mobileNo : [''],
      email : ['']

    })
  }



  ngOnInit(): void {
    this.service.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });
    

  }

  show(data:any){
    console.log(data);
  }
  Add():any{
   this.service.AddBook(this.userForm.value).subscribe(()=>{
    console.log(this.userForm.value);
   })
   this.ngOnInit();

  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.service.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
    this.ngOnInit();

  }

}
