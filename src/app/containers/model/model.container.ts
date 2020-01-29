import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModelService } from 'src/app/services';

@Component({
    selector: 'swt-model',
    templateUrl: './model.container.html',
    styleUrls: [ './model.container.scss' ]
})
export class ModelComponent implements OnInit {
    modelForm = new FormGroup({
        objectType: new FormControl('sphere'),
        diameter: new FormControl(1.212.toFixed(3)),
        length: new FormControl(2.010.toFixed(3)),
        area: new FormControl(3.400.toFixed(3)),
        pitch: new FormControl(35.6.toFixed(1)),
        sideslip: new FormControl(12.5.toFixed(1)),
        temperature: new FormControl(1200.5.toFixed(1)),
        speed: new FormControl(7800.45.toFixed(2)),
        composition: new FormGroup({
            o: new FormControl(100000000000.0.toPrecision(3)),
            o2: new FormControl(1000000.0.toPrecision(3)),
            n2: new FormControl(1000000.0.toPrecision(3)),
            he: new FormControl(1000000.0.toPrecision(3)),
            h: new FormControl(10000.0.toPrecision(3))
        }),
        accommodationModel: new FormControl('SESAM'),
        energyAccommodation: new FormControl(0.930.toFixed(3)),
        surfaceMass: new FormControl(65.0.toFixed(1))
    });
    models = [
        'SESAM',
        'Goodman',
        'Fixed'
    ];
    objectTypes = [
        'sphere',
        'cylinder',
        'plate',
        'geometry file'
    ];
    resultTranslator = {
        dragCoefficient: 'Drag Coefficient',
        forceCoefficient: 'Force Coefficient',
        projectedArea: 'Projected Area'
    };
    results: {};
    showArea: boolean;
    showDiameter: boolean;
    showEnergyAccommodation: boolean;
    showLength: boolean;
    showPitch: boolean;
    showSideslip: boolean;
    showSurfaceMass: boolean;

    constructor(private modelService: ModelService) {}

    ngOnInit() {
        this.setShowHideConditions();

        this.modelForm.valueChanges.subscribe( () => {
            this.setShowHideConditions();
            this.results = undefined;
        });
    }

    onSubmit(): void {
        // TODO: make a new form instead of mutating?
        // format the model form values to values appropriate for the form/payload
        this.modelForm.patchValue({
            diameter: (+this.modelForm.value.diameter).toFixed(3),
            length: (+this.modelForm.value.length).toFixed(3),
            area: (+this.modelForm.value.area).toFixed(3),
            pitch: (+this.modelForm.value.pitch).toFixed(1),
            sideslip: (+this.modelForm.value.sideslip).toFixed(1),
            temperature: (+this.modelForm.value.temperature).toFixed(1),
            speed: (+this.modelForm.value.speed).toFixed(2),
            composition: {
                o: Number(this.modelForm.value.composition.o),
                o2: Number(this.modelForm.value.composition.o2),
                n2: Number(this.modelForm.value.composition.n2),
                he: Number(this.modelForm.value.composition.he),
                h: Number(this.modelForm.value.composition.h)
            },
            energyAccommodation: (+this.modelForm.value.energyAccommodation).toFixed(3),
            surfaceMass: (+this.modelForm.value.surfaceMass).toFixed(1)
        });
        this.modelService.submitSinglePointRequest(this.modelForm.value).subscribe( data => {
            this.results = data;
        });
        // format the model form values back to values appropriate for the form
        this.modelForm.patchValue({
            composition: {
                o: (+this.modelForm.value.composition.o).toPrecision(3),
                o2: (+this.modelForm.value.composition.o2).toPrecision(3),
                n2: (+this.modelForm.value.composition.n2).toPrecision(3),
                he: (+this.modelForm.value.composition.he).toPrecision(3),
                h: (+this.modelForm.value.composition.h).toPrecision(3)
            }
        });
    }

    setShowHideConditions(): void {
        this.showArea = this.modelForm.value.objectType === 'plate';
        this.showDiameter =
            this.modelForm.value.objectType === 'sphere' || this.modelForm.value.objectType === 'cylinder';
        this.showLength = this.modelForm.value.objectType === 'cylinder';
        this.showPitch =
            this.modelForm.value.objectType === 'cylinder' ||
            this.modelForm.value.objectType === 'plate' ||
            this.modelForm.value.objectType === 'geometry file';
        this.showSideslip = this.modelForm.value.objectType === 'geometry file';
        this.showEnergyAccommodation = this.modelForm.value.accommodationModel === 'Fixed';
        this.showSurfaceMass = this.modelForm.value.accommodationModel === 'Goodman';
    }

}