// import { ShowcaseState } from './../../store/showcase/showcase.reducer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
// import * as ShowcaseActions from '../../store/showcase/showcase.actions';
import { take } from 'rxjs/operators';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newly-added',
  templateUrl: './newly-added.component.html',
  styleUrl: './newly-added.component.css',
  standalone: true,
  imports: [NgStyle, RouterLink, NgFor, NgIf]
})
export class NewlyAddedComponent implements OnInit {

  // showcaseState !: Observable<ShowcaseState>;

  // constructor(private store : Store<fromApp.AppState>) {
  // }

  ngOnInit() {
    // this.showcaseState = this.store.select('showcase');
    // this.showcaseState
    //   .pipe(take(1))
    //   .subscribe(
    //     data => {
    //       if (data.newlyAdded.length === 0) {
    //         this.store.dispatch(new ShowcaseActions.FetchNewlyAdded());
    //       }
    //     }
    //   );
  }

}