import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewInformationPage } from './view-information.page';

describe('ViewInformationPage', () => {
  let component: ViewInformationPage;
  let fixture: ComponentFixture<ViewInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
