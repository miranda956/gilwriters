import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  withdrawalAmount: number = 0;
  selectedDebitAccount: any;

  accountOptions: any[] = [
    // Add your account options here
    { name: 'Account A', value: 'A' },
    { name: 'Account B', value: 'B' },
    { name: 'Account C', value: 'C' }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  withdraw(): void {
    // Make API call to perform the cash withdrawal
    const withdrawalData = {
      amount: this.withdrawalAmount,
      debitAccount: this.selectedDebitAccount
    };

    this.http.post('/api/withdraw', withdrawalData).subscribe(
      (response) => {
        // Handle success response
        console.log('Withdrawal successful');
        // Reset form fields
        this.withdrawalAmount = 0;
        this.selectedDebitAccount = null;
      },
      (error) => {
        // Handle error response
        console.error('Withdrawal failed', error);
      }
    );
  }
}
