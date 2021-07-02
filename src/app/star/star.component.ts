import { Component } from "@angular/core";
import { Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app.star',
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;

    starwidth: number=0;

    ngOnChanges(): void{
        this.starwidth = this.rating * 94 / 5;

    }

}