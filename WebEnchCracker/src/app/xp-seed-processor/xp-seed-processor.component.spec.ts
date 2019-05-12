import { TestBed, async, ComponentFixture } from '@angular/core/testing';
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
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  describe('Compute the enchantability using Java-Random typed class', () => {
    const Random = require('java-random');
    let fixture: ComponentFixture<XpSeedProcessorComponent>;
    let comp: XpSeedProcessorComponent;
    let element: any;

    beforeEach(() => {
      fixture = TestBed.createComponent(XpSeedProcessorComponent);
      comp = fixture.debugElement.componentInstance;
      element = fixture.debugElement.nativeElement;
    });

    afterEach(() => {
      document.body.removeChild(element);
    });

    it('should compute enchantability', () => {
      // Use java 1.8.0_31 as reference
      const seed = 28825252;
      const controlResults = [2, 2, 3, 3, 5, 4, 11, 5, 12, 12, 13, 13, 14, 14, 15, 9];

      // 0 shelve basic test
      const testRng = new Random(seed);
      let result = comp.getEnchantability(testRng, 0);
      expect(result).toEqual(controlResults[0]);

      controlResults.forEach((controlResult, index) => {
        testRng.setSeed(seed);
        result = comp.getEnchantability(testRng, index);
        expect(result).toEqual(controlResult);
      });
    });
  });
});
