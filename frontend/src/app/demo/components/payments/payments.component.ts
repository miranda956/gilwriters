import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  paymentStatus: string = '';

  // Add properties for your form fields
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  contact: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  makePayment() {
    // Implement the logic to make the PayPal payment using the form field values
    // You can access the form field values using this.firstName, this.lastName, etc.
    // Update this.paymentStatus based on the payment result
    this.paymentStatus = 'Processing...';

    // Simulate a payment success (replace with actual payment logic)
    setTimeout(() => {
      this.paymentStatus = 'Payment Successful';
    }, 5000); // Simulate a 5-second payment process
  }
}
