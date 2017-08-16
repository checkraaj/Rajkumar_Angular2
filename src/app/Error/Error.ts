import { Component, Inject, OnInit } from '@angular/core';
import { HomeService } from '../Home/HomeService';
import { HomeModel } from '../Home/HomeModel';
@Component({
    selector: 'app-alert-error',
    templateUrl: './error.html',
    providers: [HomeService]       
})
export class ErrorComponent implements OnInit {
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