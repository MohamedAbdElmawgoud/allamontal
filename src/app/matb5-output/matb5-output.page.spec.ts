import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Matb5OutputPage } from './matb5-output.page';

describe('Matb5OutputPage', () => {
  let component: Matb5OutputPage;
  let fixture: ComponentFixture<Matb5OutputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matb5OutputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Matb5OutputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
