---
title: faq
excerpt: Frequently Asked Questions
# coverImage: "/factorio-type-kit/assets/blog/hello-world/cover.jpg"
date: "2021-01-20T05:35:07.322Z"
author:
  name: cdaringe
  picture: "/factorio-type-kit/assets/blog/authors/cdaringe.jpeg"
# ogImage:
#   url: "/factorio-type-kit/assets/blog/hello-world/cover.jpg"
---

<!-- # FAQ -->

## Do I have to use TypeScript?

If you want to convert the Lua API into _something else_, you have (undeveloped) options.

Option 1:

  - use the factorio-type-kit CLI to emit JSON (IR)
  - convert that JSON to anything you desire

Option 2:

  - [Add a printer here](https://github.com/cdaringe/factorio-type-kit/tree/main/src/printers).


## The generated code adds `:` characters to access methods and properties, versus `.` characters

Read about JS vs Lua [this binding](https://typescripttolua.github.io/docs/the-self-parameter#removing-it), tuneable in your code & the compiler.

## Can I use npm libraries?

There is no recipe for this yet. Perhaps some webpack-like bundling could enable this. If you get a working recipe, send a patch!
