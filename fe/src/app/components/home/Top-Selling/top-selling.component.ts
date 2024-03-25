import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
// import * as fromApp from '../../store/app.reducers';
// import * as ShowcaseActions from '../../store/showcase/showcase.actions';
// import { ShowcaseState } from '../../store/showcase/showcase.reducer';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css'],
  standalone: true,
  imports: [NgStyle, RouterLink, NgIf, CommonModule]
})
export class TopSellingComponent implements OnInit {

  @ViewChild('mostCards') mostCards !: ElementRef;

  // showcaseState !: Observable<ShowcaseState>;

  // constructor(private store: Store<fromApp.AppState>) {
  // }

  ngOnInit() {
    // this.showcaseState = this.store.select('showcase');
    // this.showcaseState
    //   .pipe(take(1))
    //   .subscribe(
    //     data => {
    //       if (data.topSelling.length === 0) {
    //         this.store.dispatch(new ShowcaseActions.FetchTopSelling());
    //       }
    //     }
    //   );
  }

  scrollLeft() {
    this.mostCards.nativeElement.scrollLeft -= 250;
  }

  scrollRight() {
    this.mostCards.nativeElement.scrollLeft += 250;
  }
}
