import UL, { LI } from '../components/post/bullets-list'
import Head from 'next/head'
import Post from '../layouts/post'
import Title from '../components/post/title'
import P from '../components/post/paragraph'
import Quote from '../components/post/quote'
import Figure, { Image } from '../components/post/figure'
import YouTube from '../components/post/youtube'
import HR from '../components/post/hr'

const youtubeStyle = {
  border: 'none',
  margin: '15px 0'
};

export default () => (
  <Post>
    <Head><title>DECENTRALIZED WEB</title></Head>
    <Title>DECENTRALIZED WEB</Title>
    <P>There are some heroes out here building a new web... peer to peer, more permanent and censorship resistant.</P>
    <P><a href="https://twitter.com/monk51295">Monika</a> first put me on when she tweeted about the <a href="https://www.decentralizedweb.net/" target="_blank">dweb summit</a>. It had a bunch of presentations from people who built the current web protocols and people making new ones. There was so much free/open/anarchy talk involved… boosted my optimism. Praise to Allah, for the web was not invented by the American Government.</P>
    <P>I recommend checking out most of the summit's two days if you’re interested in the future of the web/access to data, but here are a few bits to get started.</P>
    <Figure desc={<span>
        Wendy Hanamura on how/why the decentralized web summit got started.
      </span>}>
      <iframe
        style={youtubeStyle}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="366"
        src="https://www.youtube.com/embed/Yth7O6yeZRE?start=679">
      </iframe>
    </Figure>
    <Figure desc={<span>
        Tim Berners-Lee did his thing.
      </span>}>
      <iframe
        style={youtubeStyle}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="366"
        src="https://www.youtube.com/embed/Yth7O6yeZRE?start=3970">
      </iframe>
    </Figure>
    <Figure desc={<span>
        The four projects represented at this panel are all super cool... <a href="https://datproject.org" target="_blank">Dat Data</a>, <a href="http://www.mediachain.io" target="_blank">Mediachain</a>, <a href="https://interledger.org" target="_blank">Interledger</a>, and <a href="https://ipfs.io" target="_blank">IPFS</a>.
      </span>}>
      <iframe
        style={youtubeStyle}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="366"
        src="https://www.youtube.com/embed/Yth7O6yeZRE?start=26865">
      </iframe>
    </Figure>
    <Figure desc={<span>
        Corey Doctorow on robust (web) ethics. So epic.
      </span>}>
      <iframe
        style={youtubeStyle}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="366"
        src="https://www.youtube.com/embed/Yth7O6yeZRE?start=18766">
      </iframe>
    </Figure>
    <Figure desc={<span>
        Muneeb Ali on Blockstack.
      </span>}>
      <iframe
        style={youtubeStyle}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="366"
        src="https://www.youtube.com/embed/PfWgin3JlAU?start=5831">
      </iframe>
    </Figure>
    <Figure desc={<span>
        Stallman made an appearance.
      </span>}>
      <iframe
        style={youtubeStyle}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="366"
        src="https://www.youtube.com/embed/PfWgin3JlAU?start=20096">
      </iframe>
    </Figure>
    <HR />
    <P>Here's some related decentralization/blockchain stuff I liked...</P>
    <Figure desc={<span>
        A primer on how Bitcoin works.
      </span>}>
      <YouTube videoId="bBC-nXj3Ng4" />
    </Figure>
    <Figure desc={<span>
        Juan Benet on Why We Must Distribute The Web.
      </span>}>
      <YouTube videoId="skMTdSEaCtA" />
    </Figure>
    <Figure desc={<span>
        Business Models Behind Tokens - M. Ali, J. Benet, S. Wilkinson, D. Vorick
      </span>}>
      <YouTube videoId="OC2OcOdLQqY" />
    </Figure>
    <Figure desc={<span>
        We’re more reliant everyday on the mega corporations of the Internet. I.e. Facebook for login or buying everything from Amazon.
      </span>}>
      <YouTube videoId="kSYs3UnkUX0" />
    </Figure>
    <Figure desc={<span>
        Yo this video is pretty inspiring… It’s about the idea everything needs to be reinvented for the dweb, in the same way that the iPhone needed it’s own to-do app.
      </span>}>
      <YouTube videoId="sIkJ86J75po" />
    </Figure>
    <Figure desc={<span>
        Vitalik Buterin - The Cryptoeconomic way
      </span>}>
      <YouTube videoId="ZH9nMKIHfAE" />
    </Figure>
    <Quote>"What Bitcoin does, is it uses incentives that are defined inside of a system in order to protect and secure that system’s ongoing existence. That's actually really philosophically interesting. It almost feels like a kind of snake eating its own head from the inside right. You have a system with incentives defined inside of the system and the incentives inside the system are what is ensuring that the system itself, including the thing that manages the incentives, continues to work. So this weird kind of recursive economically self-supporting construction, that's the real interesting innovation."</Quote>
    <Quote>"What do we want out of a blockchain?"</Quote>
    <Figure>
      <Image src="https://d26dzxoao6i3hh.cloudfront.net/items/2A0s0Z0K2E2s2F2N2u2t/Screen%20Shot%202017-07-01%20at%202.12.19%20PM.png"></Image>
    </Figure>
    <HR />
    <P><a href="https://github.com/nicola/decentralized-research" target="_blank">Hella research</a> on decentralization.</P>
  </Post>
)
