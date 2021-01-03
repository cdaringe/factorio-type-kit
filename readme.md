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

## ToDo

- [ ] improve `defines` symbol typings in JSON schema
  - ATM, we guess, because factorio gives us no type information
  - perhaps create mapping document that can be used to narrow the types, post-scrape?
