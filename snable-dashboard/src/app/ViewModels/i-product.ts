import { SafeUrl } from "@angular/platform-browser";
export interface IProduct {
    id:number;
    name:string;
    price:number;
    quantity:number;
    image:string;
    description:string;
    SupCategory_Id:number;
    url:SafeUrl;
}
