import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent implements OnInit{

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize the form group with form controls and validators
    this.myForm = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      option: ['', Validators.required]  // Ensure a radio button is selected
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const apiUrl = 'https://r67d44gf-3000.inc1.devtunnels.ms/api/greet'; // Replace with your API endpoint
      this.http.post<any>(apiUrl, this.myForm.value).subscribe({
        next: (response: any) => {
          console.log('Data sent successfully:', response);
        },
        error: (error: any) => {
          console.error('Error occurred:', error);
          alert('An error occurred while sending data.');
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    }
  }      
}
