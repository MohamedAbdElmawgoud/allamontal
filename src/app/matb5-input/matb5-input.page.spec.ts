import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Matb5InputPage } from './matb5-input.page';

describe('Matb5InputPage', () => {
  let component: Matb5InputPage;
  let fixture: ComponentFixture<Matb5InputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matb5InputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Matb5InputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
