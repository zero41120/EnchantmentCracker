import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { XpSeedProcessorComponent } from './xp-seed-processor.component';

describe('XpSeedProcessorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        XpSeedProcessorComponent
      ],
    }).compileComponents();
  }));

  it('should create the Xp Seed Processor', () => {
    const fixture = TestBed.createComponent(XpSeedProcessorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should compute enchantability', () => {
    const fixture = TestBed.createComponent(XpSeedProcessorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getEnchantability()).toEqual(0);
  });
});
