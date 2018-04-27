import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../services/holidays.service';

@Component({
    selector: 'app-holidays',
    templateUrl: './holidays.component.html',
    styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
    holidaysData: Array<any> = [];
    constructor(private holidaysService: HolidaysService) {

    }

    getFullDate(date){
        return new Date(date);
    }

    ngOnInit() {
        this.holidaysService.getHolidays().subscribe((response) => {
            this.holidaysData = Object.keys(response.holidays);
        })
    }

}
