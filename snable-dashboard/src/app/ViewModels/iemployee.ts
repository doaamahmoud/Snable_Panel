import { SafeUrl } from "@angular/platform-browser";
export interface Iemployee {
    id:number;
    name:string;
    image:File;
    position:string;
    url:SafeUrl;
}
