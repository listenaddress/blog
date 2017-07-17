import Head from 'next/head'
import Post from '../layouts/post'
import Title from '../components/post/title'
import P from '../components/post/paragraph'
import Quote from '../components/post/quote'
import HR from '../components/post/hr'
import Figure, { Image } from '../components/post/figure'

const pinStyle = {
  marginBottom: '35px',
  borderRadius: '4px'
};

const credit = {
  top: '-7px',
  position: 'relative'
};

export default () => (
  <Post>
    <Head><title>WIP: BOAT</title></Head>
    <Title>WIP: BOAT</Title>
    <P>Thinking of building a boat to live on and scoot about various forms of the holy liquid. I’d love to get started in the next few years but nobody knows yet. <a href="instagram.com/elihulsing" target="_blank">Eli</a> and <a href="https://twitter.com/Arran_Davis" target="_blank">Arran</a> may join me, and others were tickled and wanted a note when we get started. Idk, it seems like I need to. The river is my favorite place. And it’s never been possible until recently to do work with instant global comms like we've got.</P>
    <P>I started fiending when I was camping on the Mississippi with <a href="https://www.instagram.com/mr_chrisjack/" target="_blank">Chris</a> one night. When I got up in the middle of the night the fog was thicc but only 10-20 feet high and neatly floating over the rio. The moon was all bright. I could see everything around me. It was beyond clear right there how slept on rivers are and that I’d love to be able to live on them, cruise around, dock up at new vistas.</P>
    <P>My first thought was something optimized for living and working with lots of windows. Something for 4-10 people at first maybe? For starters I imagined something like this but not such the modern vibe.</P>
    <Figure desc={<span style={credit}>
        From <a href="https://www.thrillist.com/home/photos-of-incredible-house-boats" target="_blank">Thrillist</a>
      </span>}>
      <img style={pinStyle} src="https://d26dzxoao6i3hh.cloudfront.net/items/1L0g1T1F1c0I3r2A322q/Image%202017-07-14%20at%209.22.41%20PM.jpg" />
    </Figure>
    <P>But also wondering about different shapes, curves/underwater windows. Stuff like this.</P>
    <Figure desc={<span style={credit}>
        From <a href="http://www.coastmagazine.co.uk/content/luxury-houseboat-living-waternest-100" target="_blank">Coast</a>
      </span>}>
      <img style={pinStyle} src="https://d26dzxoao6i3hh.cloudfront.net/items/2Z0z2y0A0F353o0K0O2r/boat.png" />
    </Figure>
    <P>On the other hand, Eli is trying to build a navy classic w heavy artillery so we'll see what we end up with.</P>
    <P>I'm collecting other river things 🚨 <a href="https://www.pinterest.com/thomasbeta/the-rio/" target="_blank">on pinterest.</a>🚨</P>
  </Post>
)
