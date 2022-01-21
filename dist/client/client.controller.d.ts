import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    addCustomer(res: any, createCustomerDTO: CreateCustomerDTO): Promise<any>;
    getAllCustomer(res: any): Promise<any>;
    getCustomer(res: any, customerID: any): Promise<any>;
    export class: any;
    CustomerController: any;
}
