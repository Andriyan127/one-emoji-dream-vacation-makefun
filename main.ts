import { mkdirSync, writeFileSync } from "node:fs";

/**
 * Entry for make.fun bounty "One Emoji, One Dream Vacation"
 * (u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
 *
 * Chosen emoji: 🌅 SUNRISE
 *
 * Why this one — scored against the judging rubric (each out of 10):
 *
 *   Candidate        Wanderlust  Distinctive  Universal  Emotion  Total
 *   🌅 Sunrise            9           7          10        9      35
 *   🏔️ Mountain           8           7           9        8      32
 *   🧭 Compass            7           9           8        6      30
 *   🏝️ Desert island      8           3           9        8      28
 *   ✈️ Airplane           7           2          10        5      24
 *
 * - Instant wanderlust: a sunrise somewhere else is the purest
 *   "I want to be there" image — the first morning of a trip.
 * - Distinctiveness: the field is crowded with beach/plane picks
 *   (🏖️ 🏝️ ✈️ 🌴); a sunrise stands apart while staying on-theme.
 * - Universality: the sun rising reads instantly in every culture.
 * - Emotional pull: warmth, hope, new beginnings — longing, not logistics.
 *
 * The plane says "travel"; the sunrise says "the place you dream of
 * waking up in". That is what makes a stranger book the flight.
 */

const EMOJI = "🌅";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

console.log(`Wrote entry: ${EMOJI}`);
console.log(`Character count: ${[...EMOJI].length}`);
console.log(`UTF-16 code units: ${EMOJI.length}`);
