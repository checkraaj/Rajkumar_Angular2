import { Component, Inject, OnInit } from '@angular/core';
import { HomeService } from './HomeService';
import { HomeModel } from './HomeModel';
@Component({
    selector: 'app-alert-home',
    templateUrl: './home.html',
    providers: [HomeService]       
})
export class HomeComponent implements OnInit {
    public homeModel: HomeModel[];    
    public ErrorMessages: any;
    public loading: boolean;

    constructor(private hs: HomeService) {
        this.homeModel = [];
    }
    ngOnInit() {
        this.homeModel = this.hs.GetAlerts();
    }

    public loadData(response: HomeModel[]): void {
        this.homeModel = response;
    }
    public loadError(error: any): void {
        this.ErrorMessages = error;        
        this.loading = false;
    }
}