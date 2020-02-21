import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomarDataPage } from './customar-data.page';

describe('CustomarDataPage', () => {
  let component: CustomarDataPage;
  let fixture: ComponentFixture<CustomarDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomarDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomarDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
