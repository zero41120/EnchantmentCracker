import { Component } from '@angular/core';
import { Random    } from 'java-random';

@Component({
  selector: 'app-xp-seed-processor',
  templateUrl: './xp-seed-processor.component.html',
  styleUrls: ['./xp-seed-processor.component.less']
})
export class XpSeedProcessorComponent {
  possibleSeeds: number[];
  searchedSeedCount: number;

  constructor() {
    this.possibleSeeds = [];
    this.searchedSeedCount = 0;
  }

  get seed() {
    return this.possibleSeeds[0];
  }

  /**
   * This function gets the enchantability base on a given Java
   * Random typed object and number of bookshelves.
   * @param jRandom a implementation of Java Random typed object
   * @param bookshelves number of bookshelves from 0 to 15
   * @returns a number between 1 to 30
   */
  getEnchantability(jRandom: Random, bookshelves: number): number {
    const first = jRandom.nextInt(8);
    const second = jRandom.nextInt(bookshelves + 1);
    return first + 1 + (bookshelves >> 1) + second;
  }

  /**
   * This function should give the display level number of a given
   * slot on the Minecraft enchanting table using a given Java Random typed
   * object and bookshelves count.
   * @param bookshelves number of bookshelves from 0 to 15
   * @param slot index of the slot from 0 to 2
   * @returns 1 to 30 base on the given slot and bookshelves.
   */
  getDisplayLevel(bookshelves: number, slot: number): number {
    return 0;
  }

  /**
   * This function should be called once to brute force all seeds with given
   * parameters in order to reduce the search space for subsequence calls of
   * XpSeedProcessorComponent.addInput
   * @param bookshelves number of bookshelves from 0 to 15
   * @param slots an array containing the 3 displayed numbers on a Minecraft
   * enchanting table.
   */
  firstInput(bookshelves: number, ...slots: number[]): void {
    var rng = new Random();
    rng.nextInt();
  }

  /**
   * This function should be called multiple times to brute force Java Random
   * typed object's seeds with given parameters
   * @param bookshelves number of bookshelves from 0 to 15
   * @param slots an array containing the 3 displayed numbers on a Minecraft
   * enchanting table.
   */
  addInput(bookshelves: number, ...slots: number[]): void {

  }
}
