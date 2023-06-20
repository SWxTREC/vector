import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ModelService {
    data: {};

    constructor(private _http: HttpClient) { }

    submitSinglePointRequest( payload: any) {
        return this._http.post<any>( environment.vectorApi + '/singlepoint', payload);
    }

    submitGeometryFile( id: string, file?: any ) {
        const formData = new FormData();
        formData.append('file', file);
        return this._http.put<any>( environment.vectorApi + '/geometry/' + id, formData );
    }
}
