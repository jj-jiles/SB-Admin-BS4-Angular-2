import {Component} from 'angular2/core';

import {OrderListService} from '../../../shared/services/orders-list.service';

@Component({
  selector: 'orders',
  templateUrl: './pages/orders/components/orders.html',
  styleUrls: ['./pages/orders/components/orders.css'],
  bindings: [OrderListService]
})
export class OrdersPage {
    constructor(public orderListService:OrderListService) {
    }
}
