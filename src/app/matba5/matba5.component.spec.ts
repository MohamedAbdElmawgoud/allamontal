import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Matba5Component } from './matba5.component';

describe('Matba5Component', () => {
  let component: Matba5Component;
  let fixture: ComponentFixture<Matba5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Matba5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Matba5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
