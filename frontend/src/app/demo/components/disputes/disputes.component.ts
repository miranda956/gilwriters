import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent implements OnInit {
  loading: boolean = true; // Simulate loading initially
  disputeDetailsList: any[] = []; // Replace with your actual dispute data

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching dispute data from an API
    this.fetchDisputeDataFromApi().then(data => {
      this.disputeDetailsList = data; // Assign your API response data here
      this.loading = false; // Set loading to false after data is fetched
    });
  }

  fetchDisputeDataFromApi(): Promise<any[]> {
    // Simulate fetching dispute data from an API
    return new Promise(resolve => {
      setTimeout(() => {
        const fakeApiDisputes = [
          {
            disputeId: 1,
            reason: 'Quality of work did not meet expectations.',
            resolution: 'Awaiting resolution from the client.',
            submittedBy: 'Client XYZ',
            submittedDate: new Date(),
            status: 'Open'
          },
          {
            disputeId: 2,
            reason: 'Late delivery of the project.',
            resolution: 'Investigating the delay with the freelancer.',
            submittedBy: 'Client ABC',
            submittedDate: new Date(),
            status: 'In Progress'
          },
          // ... other disputes
        ];
        resolve(fakeApiDisputes);
      }, 1000); // Simulating delay for API call
    });
  }
}
