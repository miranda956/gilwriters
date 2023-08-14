import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/progress'] }
                ]
            },
            {
                label: 'Gilwritters',
                items: [
                    { label: 'My assignments', icon: 'pi pi-fw pi-clock', routerLink: ['/mytasks'] },

                    { label: 'Mysolutions', icon: 'pi pi-fw pi-id-card', routerLink: ['/mysolutions'] },
                    { label: 'Reworks', icon: 'pi pi-fw pi-check-square', routerLink: ['/MyReworks'] },
                    { label: 'Messages', icon: 'pi pi-fw pi-table', routerLink: ['/Messages'] },
                    { label: 'Disputes', icon: 'pi pi-fw pi-arrow-right', routerLink: ['/Disputes'] },
                    
                    

                   
                ]
            },

            
            
           
        ];
    }
}
