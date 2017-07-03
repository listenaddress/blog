import UL, { LI } from '../components/post/bullets-list'
import Head from 'next/head'
import Post from '../layouts/post'
import Title from '../components/post/title'
import P from '../components/post/paragraph'

export default () => (
  <Post>
    <Head><title>PEOPLE DOCUMENTING</title></Head>
    <Title>PEOPLE DOCUMENTING</Title>
    <P>A list of people doing the Lord's work.</P>
    <UL>
      <li><a href="https://twitter.com/monk51295" target="_blank">Monika</a>’s site <a href="https://redefineschool.com" target="_blank">redefineschool.com</a> is one of the biggest inspirations for this one. She’s got <a href="https://redefineschool.com/idiosyncratic-jargon/" target="_blank">her own</a>, prolific way of documenting. She has pages for <a href="https://redefineschool.com/tim-berners-lee" target="_blank">people</a>, <a href="https://redefineschool.com/hosting-life-bits" target="_blank">projects</a>, <a href="https://redefineschool.com/books-to-read/" target="_blank">reading lists</a>, etc., links them together, and adds to them over time.</li>
      <li><a href="https://twitter.com/austinkleon" target="_blank">Austin Kleon</a> said “Creativity is connecting the dots. On Tumblr, you can see <a href="https://austinkleon.com/" target="_blank">my dots</a>”. He also wrote <a href="https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X" target="_blank">Share Your Work</a> which has beautiful reveries on sharing creative processes. How to get started, what happens when you do. V recommended.</li>
      <li><a href="https://twitter.com/yoshuawuyts" target="_blank">Joshua Wuyts</a> documents his <a href="https://github.com/yoshuawuyts/knowledge" target="_blank">knowledge</a> real nice on Github. Super organized, lots of info. I look forward to going through this more. Here are some <a href="https://github.com/RichardLitt/meta-knowledge" target="_blank">others</a> that’ve done the same.</li>
      <li><a href="https://github.com/sindresorhus/awesome">Awesome lists</a> on GitHub is a neat format for collaborating on lists of resources and such.</li>
      <li><a href="https://www.youtube.com/watch?v=k0fgtvbMT7k&t=119s" target="_blank">Jerry Michalski</a> maps his brain on <a href="https://jerrysbrain.com" target="_blank">jerrysbrain.com</a>.</li>
      <li><a href="https://twitter.com/brainpickings" target="_blank">Maria Popova</a> is hella learning and sharing cool things on <a href="https://www.brainpickings.org/">brainpickings.org</a>, "An inventory of the meaningful life."</li>
      <li><a href="https://twitter.com/inconvergent">@inconvergent</a> documents his <a href="https://twitter.com/inconvergent/status/859041331213197312">process</a> on Twitter.</li>
    </UL>
    <style jsx>{`
      li {
          margin-bottom: 12px;
          padding-left: 20px;
          line-height: 24px;
        }

        li:before {
          content: '-';
          color: #ABABAB;
          position: absolute;
          margin-left: -20px;
        }
    `}</style>
  </Post>
)
