import { Component } from '@angular/core';

import {
    LaspBaseAppSnippetsService
} from 'lasp-base-app-snippets';
import {
    IImageLink,
    ISocialLink,
    IVersion
} from 'lasp-footer';
import { INavItem } from 'lasp-nav';

import { environment } from '../environments/environment';

/** Entry Component */
@Component({
    selector: 'swt-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    // please have no more than 7 items in the nav menu
    navItems: INavItem[] = [
        {
            label: 'Calculator',
            link: '/',
            activeOnlyOnExact: true
        }, {
            label: 'Documentation',
            link: '/docs'
        }
    ];

    orgLogos: IImageLink[] = [
        {
            src: 'https://lasp.colorado.edu/media/projects/base-app/images/footer-lasp-logo.png',
            href: 'http://lasp.colorado.edu'
        }
    ];

    socialLinks: ISocialLink[] = [
        {
            name: 'github',
            href: 'https://github.com/SWxTREC/vector-code'
        }
    ];

    versions: IVersion[] = [
        {
            version: environment.version
        }
    ];

    constructor( private _snippetsService: LaspBaseAppSnippetsService ) {
        this._snippetsService.appComponent.all({ googleAnalyticsId: environment.googleAnalyticsId });
    }
}
