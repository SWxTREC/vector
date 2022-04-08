import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ModelService } from './model.service';

describe('ModelService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ HttpClientModule ]
    }));

    it('should be created', () => {
        const service: ModelService = TestBed.inject(ModelService);
        expect(service).toBeTruthy();
    });
});
