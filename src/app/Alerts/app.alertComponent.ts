import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertModelList } from './app.alertModel';
import { AlertModel } from './app.alertModel';
import { ValidationService } from './app.ValidationService';
import { GitHubService } from './GitHub/Githubservice';
import { repos } from './GitHub/repos';

@Component({
    selector: 'app-alert',
    templateUrl: './app.alertView.html',
    styleUrls: ['../app.component.css'],
    providers: [{ provide: 'lol', useValue: 'Cool' }, ValidationService, GitHubService]
})
export class AppAlertComponent {
    public alertModel: AlertModel[];
    public test: string;
    public ModelDrivenErrors: string[];
    public Errors: string[];
    public userForm: FormGroup;
    public userName: string;
    public responseArray: repos[];
    public ErrorMessages: any;
    public loading: boolean;

    constructor(private fb: FormBuilder, private vs: ValidationService, private gs: GitHubService, @Inject('lol') private lol: string) {
        //console.log(this.lol);   
        this.userName = 'tektutorialshub'; 
        this.alertModel = new AlertModelList().GetAlertModel();
        this.userForm = this.fb.group({
            'fname': ['', Validators.required],
            'lname': [],
            'address': this.fb.group({
                'city': ['', Validators.required],
                'street': [],
                'pincode': []
            })
        });
    }

    public onSubmit(abc): void {
        this.Errors = [];
        /*if (abc.controls.firstname.value == '') this.Errors.push('Please enter FirstName');
        if (abc.controls.lastname.value == '') this.Errors.push('Please enter LastName');*/
    }

    public onModelSubmit(frmGrp: FormGroup): void {
        this.ModelDrivenErrors = [];
        this.ModelDrivenErrors = this.vs.Validate(frmGrp, { 'fname': { 'required': 'Please enter First Name' } });
        //console.log(this.userForm.get('address.city').value);
        /*if (!this.contactForm.controls.firstname.errors.required) {
            this.Errors.push('Please enter First Name');
        }*/
    }

    public onclick(): void {
        this.responseArray = [];
        this.ErrorMessages = null;        
        this.gs.getRepos(this.userName).subscribe((response) => this.loadData(response), (error) => this.loadError(error), () => this.loading = false);
    }

    public loadData(response: repos[]): void {
        this.responseArray = response;
    }
    public loadError(error: any): void {
        this.ErrorMessages = error;
        this.responseArray = [];
        this.loading = false;
    }
}