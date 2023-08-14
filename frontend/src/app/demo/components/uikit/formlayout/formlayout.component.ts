import { Component } from '@angular/core';

@Component({
    templateUrl: './formlayout.component.html'
})
export class FormLayoutComponent {

    selectedAccount: any;

    accountOptions = [
        { name : 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name : 'Option 3', code: 'Option 3' }
    ];
}
