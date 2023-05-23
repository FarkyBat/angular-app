import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupEditorComponent } from './pickup-editor.component';

describe('PickupEditorComponent', () => {
  let component: PickupEditorComponent;
  let fixture: ComponentFixture<PickupEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickupEditorComponent]
    });
    fixture = TestBed.createComponent(PickupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
