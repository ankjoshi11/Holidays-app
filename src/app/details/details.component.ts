import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../services/holidays.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    detailsData: Array<any> = [];
    selectedDate: string;
    constructor(private holidaysService: HolidaysService, private route: ActivatedRoute) {

    }

    getFullDate(date) {
        return new Date(date);
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.selectedDate = params['date'];
            if (this.holidaysService.data) {
                this.detailsData = this.holidaysService.data.holidays[this.selectedDate];
            } else {
                this.holidaysService.getHolidays().subscribe((response) => {
                    this.detailsData = response.holidays[this.selectedDate];
                })
            }
        });

    }


}
