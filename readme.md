# Problem

- factorio API is hard to explore, because it is both _wide_ and _deep_
  - many classes/events to interact with
  - many methods/props drilled into nested data-models used during model
- iteration is slow
  - lua is dynamically typed
  - **objective** iterate less & have higher quality by applying typechecking on mod

# Solution

- scrape factorio API
- convert scraped API datas => [json-schema](https://json-schema.org/)
- convert json-schema to typed language target
  - typescript
  - haxe?

## Usage
