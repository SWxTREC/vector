import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules';

import { CalculatorComponent } from './calculator.container';

describe('CalculatorComponent', () => {
    let component: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ CalculatorComponent ],
            imports: [
                BrowserAnimationsModule,
                HttpClientModule,
                ReactiveFormsModule,
                MaterialModule
            ]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should round numbers to 4 decimal places', () => {
        // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
        const longNumber = 9.99999999999999999999999999;
        // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
        const longNumberBig = 1233999.123399999999999999999999999;
        expect(component.round(longNumber, 4)).toEqual('10.0000');
        expect(component.round(longNumberBig, 4)).toEqual('1233999.1234');
    });
});
