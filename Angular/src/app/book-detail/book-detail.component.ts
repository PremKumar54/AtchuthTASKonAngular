import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AFCService } from '../afc.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  toppingList: string[] = ['Chennai', 'Hyderabad', 'Bangalore', 'Delhi', 'Mumbai', 'Vizag'];

  getId: any;
  Books:any = [];

  userForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private service: AFCService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.service.GetBook(this.getId).subscribe(res => {
      this.userForm.setValue({
        fullName: res['fullName'],
        countryNo: res['countryNo'],
        mobileNo: res['mobileNo'],
        email : res['email']
      });
    });

    this.userForm = this.formBuilder.group({
      fullName: [''],
      countryNo: [''],
      mobileNo: [''],
      email: ['']
    })
  }

  ngOnInit() {
    this.service.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });
    
   }

  onUpdate(): any {
    this.service.updateBook(this.getId, this.userForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!');
        console.log(this.userForm.value);

    });
    this.ngOnInit();

  }
  show(data:any){
    console.log(data);
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.service.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }

  }

}
