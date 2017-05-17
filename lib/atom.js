const {posts} = require('../posts')
const max = 10 // max returned posts

module.exports = () => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>youngdayjob</title>
    <subtitle>Notes</subtitle>
    <link href="https://youngdayjob.com/atom" rel="self"/>
    <link href="https://youngdayjob.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://youngdayjob.com/</id>
    <author>
      <name>Thomas O'Brien</name>
      <email>tbobrien612@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://youngdayjob.com/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`
      }, '')}
  </feed>
`
