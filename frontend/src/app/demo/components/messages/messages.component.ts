import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  loading: boolean = true; // Simulate loading initially
  messages: any[] = []; // Replace with your actual messages data

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching messages from an API
    this.fetchMessagesFromApi().then(data => {
      this.messages = data; // Assign your API response data here
      this.loading = false; // Set loading to false after data is fetched
    });
  }

  fetchMessagesFromApi(): Promise<any[]> {
    // Simulate fetching messages from an API
    return new Promise(resolve => {
      setTimeout(() => {
        const fakeApiMessages = [
          { sender: 'John', date: new Date(), text: 'Hello there i can work on your order' },
          { sender: 'Alice', date: new Date(), text: 'Hi, how are you? check the latest solution' },
          // ... other messages
        ];
        resolve(fakeApiMessages);
      }, 1000); // Simulating delay for API call
    });
  }
}
