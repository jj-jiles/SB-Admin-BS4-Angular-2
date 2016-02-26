import {Component} from 'angular2/core';

interface Account {
    CompanyName: string;
    ContactName: string;
    Address: string;
    City: string;
    State: string;
    Country: string;
    Zip: string;
    BillingPhone: string;
    BusinessPhone: string;
    MobilePhone: string;
    Fax: string;
    BusinessDescription: string;
}

@Component({
    selector:'account-details',
    templateUrl: './pages/account/components/account.html',
    styleUrls: ['./pages/account/components/account.css']
})
export class AccountPage {
}
