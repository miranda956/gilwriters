import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './inputdemo.component.html',
  styles: [
    // Styles here
  ]
})
export class InputDemoComponent {
  withdrawalAmount?: number;
  selectedDebitAccount?: any;
  description?: string;

  accountOptions: any[] = [
    { name: 'Account 1', value: 'account1' },
    { name: 'Account 2', value: 'account2' },
    { name: 'Account 3', value: 'account3' }
  ];

  constructor(private http: HttpClient) {}

  withdraw() {
    const withdrawalData = {
      amount: this.withdrawalAmount,
      account: this.selectedDebitAccount,
      description: this.description
    };

    this.http.post('/api/withdraw', withdrawalData).subscribe(
      (response) => {
        console.log('Withdrawal successful:', response);
        // Perform any additional actions or show success message to the user
      },
      (error) => {
        console.error('Withdrawal error:', error);
        // Handle error scenario, show error message to the user, etc.
      }
    );
  }
}
