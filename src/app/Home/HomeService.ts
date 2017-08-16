import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HomeModel } from './HomeModel';

@Injectable()
export class HomeService {
    public homeModel: HomeModel[];
    public GetAlerts(): HomeModel[] {
        this.homeModel = [{ "JobId": 100, "AlertType": "Compliance", "AlertSubType": "HPML", "Alert": "Your Loan is failing HPML, please contact your account manager to help coordinate the reconciliation of this loan|Your Loan passed HPML Test", "IsActive": true, "JobFrequency": "M", "RunsEvery": 30 },
        { "JobId": 100, "AlertType": "Compliance", "AlertSubType": "P&F", "Alert": "Your Loan is failing QM Points and Fees, please contact your account manager to help coordinate the reconciliation of this loan|Your Loan passed QM Points And Fees Test", "IsActive": true, "JobFrequency": "M", "RunsEvery": 30 }];
        return this.homeModel;
    }

}

