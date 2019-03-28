import {Component, Input, Output, EventEmitter, Sanitizer, SecurityContext, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy{
    @Output() close = new EventEmitter();
    @Output() searchSent = new EventEmitter(); // emit when we send a search
    @Input() placeholder = 'Search';
    searchText = '';
    breakpointObserverSubscription: Subscription;

    constructor(
        private router: Router,
        private sanitizer: Sanitizer,
        private breakpointObserver: BreakpointObserver
    ) {
        this.breakpointObserverSubscription = breakpointObserver.observe([
            Breakpoints.HandsetLandscape,
        ]).subscribe(result => {
            if (result.matches) {
                this.close.emit();
            }
        })
    }

    ngOnDestroy() {
        this.breakpointObserverSubscription.unsubscribe();
    }

    closeSearch() {
        this.searchText = '';
        this.close.emit();
    }

    search( query: string ) {
        this.searchSent.emit();
        this.router.navigateByUrl( this.sanitizer.sanitize( SecurityContext.URL, '/search?query=' + query  ) );
    }
}
