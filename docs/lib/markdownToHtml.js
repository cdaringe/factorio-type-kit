const unified = require('unified')
const markdown = require('remark-parse')
const html = require('remark-html')
const highlight = require('remark-highlight.js')



export default async function markdownToHtml(mdstr) {
  // const result = await remark().use(html).use(highlight, { include: ["shell", "typescript"]}).process(markdown);
  return new Promise((res, rej) =>
    unified()
    .use(markdown)
    .use(highlight, { include: ["shell", "typescript", "lua"]})
    .use(html)
    .process(mdstr, (err, f) => {
      if (err) return rej(err)
      return res(f.toString())
    })

  )
  // return result.toString();
}
