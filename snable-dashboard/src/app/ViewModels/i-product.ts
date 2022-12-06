import { SafeUrl } from "@angular/platform-browser";
export interface IProduct {
    id:number;
    name:string;
    price:number;
    quantity:number;
    image:File;
    description:string;
    SupCategory_Id:number;
    url:SafeUrl;
}
