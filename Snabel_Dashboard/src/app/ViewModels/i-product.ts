import { SafeUrl } from "@angular/platform-browser";
export interface IProduct {
    id:number;
    name:string;
    price:number;
    quantity:number;
    image:string;
    description:string;
    category_Id:number;
    url:SafeUrl;
}
