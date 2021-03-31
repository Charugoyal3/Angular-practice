import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct Hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SAZAM', strength: 20 };
    expect(fixture.componentInstance.hero.name).toEqual('SAZAM');
  });

  it('should render the Hero name in Anchor Tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SAZAM', strength: 20 };
    fixture.detectChanges();
    const name = fixture.nativeElement.querySelector('a').textContent;
    expect(name).toContain('SAZAM');
  });

  it('should call delete Method', () => {
    spyOn(component.delete, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    expect(component.delete.emit).toHaveBeenCalled();
    expect(component.delete.emit).toHaveBeenCalledWith(true);
  });

  it('getHeroStrength should return current hero Strength', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SAZAM', strength: 20 };
    expect(component.getHeroStrength()).toEqual(20);
  });
});
