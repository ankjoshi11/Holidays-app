import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class HolidaysService {
    data = null;
    constructor(private http: Http) {

    }


    getServiceData(): object {
        return this.data;
    }


    getHolidays(): Observable<any> {

        // ...using get request
        return this.http.get('/api/us-holidays')
            // ...and calling .json() on the response to return data
            .map((res: Response) => {
                this.data = res.json();
                return res.json()
            })
            //...errors if any
            .catch((error: any) => Observable.throw(error || 'Server error'));

    }


}
