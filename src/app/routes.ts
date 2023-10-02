import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import( './containers/calculator/calculator.module').then( m => m.CalculatorModule )
    }, {
        path: 'docs',
        loadChildren: () => import( './containers/docs/docs.module').then( m => m.DocsModule )
    }, {
        path: '**',
        redirectTo: ''
    }
];
