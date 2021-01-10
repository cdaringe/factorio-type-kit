export const bigBadHacks = {
  /**
   * YIKES. The circular reference/deref logic in the json-schema-to-typescript
   * module just falls apart perf-wise when processing refs. we have many, many
   * circular refs. even if we ignore them and continue on, processing them just
   * takes forever. really, we don't need to process them. we can just the `tsType`
   * hack for refs, and inject our own type pointers :). so, go fast again, and
   * HACK. sorry, world. im terrible
   */
  isReadingRefs: true,
};
