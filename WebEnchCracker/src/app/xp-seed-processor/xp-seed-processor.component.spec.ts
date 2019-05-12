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

  describe('Compute the enchantability using Java-Random typed class', () => {
    const Random = require('java-random');
    it('should compute enchantability', () => {
      const fixture = TestBed.createComponent(XpSeedProcessorComponent);
      const app = fixture.debugElement.componentInstance;
      // Use java 1.8.0_31 as reference
      const seed = 28825252;
      let bookshelves = 0;
      const ctrlRng = new Random(seed);
      let controlResult = 1 + ctrlRng.nextInt(8) + ctrlRng.nextInt(1);
      const testRng = new Random(seed);
      let result = app.getEnchantability(testRng, bookshelves);
      expect(result).toEqual(controlResult);

      bookshelves = 15;
      ctrlRng.setSeed(seed);
      testRng.setSeed(seed);
      controlResult = 1 + (15 >> 1) + ctrlRng.nextInt(8) + ctrlRng.nextInt(16);
      result = app.getEnchantability(testRng, bookshelves);
      expect(result).toEqual(controlResult);
    });
  });
});
