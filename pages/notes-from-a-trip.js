import UL, { LI } from '../components/post/bullets-list'
import Head from 'next/head'
import Post from '../layouts/post'
import Title from '../components/post/title'
import P from '../components/post/paragraph'
import Quote from '../components/post/quote'
import Figure, { Image } from '../components/post/figure'
import YouTube from '../components/post/youtube'
import HR from '../components/post/hr'

const imageStyle = {
  marginBottom: '15px'
};

const videoStyle = {
  marginBottom: '35px',
  marginTop: '35px'
};

export default () => (
  <Post>
    <Head><title>NOTES FROM A TRIP</title></Head>
    <Title>NOTES FROM A TRIP</Title>
    <P>I scooped some truffles from <a href="https://www.google.com/maps/place/Kokopelli/@52.3761439,4.8662686,13z/data=!4m12!1m6!3m5!1s0x47c609b8346cec19:0xf0c280f4fb91c556!2sKokopelli!8m2!3d52.3762346!4d4.8990192!3m4!1s0x47c609b8346cec19:0xf0c280f4fb91c556!8m2!3d52.3762346!4d4.8990192" target="_blank">Kokopelli</a> and headed to the park. Crushed 42g and took em to the bodymind via gulps of water. Went to fill up my water, left my tea in the park and came back to the paper cup crushed and upside down amid a bunch of nemo kids frolicking lmao. Grabbed another tea, sat in some sun next to a pond and some trees. Swallowed 10 more grams, packed a bowl as an absolute tsunami of some kind gathered behind me, then felt a bit sick—dizzy and disoriented.</P>
    <P>The whole thing felt like such a dream. Crazy that you can go from sickness to pure bliss, and that being straight sick can feel like a dream/trip sometimes too.</P>
    <P>After a couple hits of the holy root it was time to watch the fireworks go off. Closed my eyes and quickly got red and white rectangles that started to swirl inward and gain dimension. It eventually became this seemingly miles wide grid of vertical columns attached to long, wide horizontal walkways (there was nobody walking on them but they seemed fit for it). The columns and walkways were folding in and out of each other. And some of the corners were sphinxes, and out of their mouths came more columns. This was going down in a dim but vivid space that was a part of a space station or futuristic environment, idk. But it was clear that it’d show me almost anything I’d ask for.</P>
    <P>Some scribbles from the trip...</P>
    <Figure>
      {notePictures}
    </Figure>
    <P>Some jams I sailed to...</P>
    <Figure desc={<span style={videoStyle}>
        THIS ONE. Listening to this was my fav part of the trip. The whole vibe is mind blowingly beautiful, anti-entropic with a bit of harmless melancholy. "Nobody feels old at the museum." UGHHHH I can't get over the feelings of infinite potential & sexiness. It's all possible.
      </span>}>
      <YouTube videoId="Zc11cmgkQc4" />
    </Figure>
    <Figure desc={<span style={videoStyle}>
        Felt an intense wave of pure redemption with this one. Like I had a smirk on my face because I was fine with my mistakes and potential. I felt clean with brand new visions/visuals that convinced me that I'm free to reinvent myself at any moment.
      </span>}>
      <YouTube videoId="-quzzAfRJhU" />
    </Figure>
    <Figure desc={<span>
        Uncertainty & mystery
      </span>}>
      <YouTube videoId="RpIeSFF1DnU" />
    </Figure>
  </Post>
)

const tripNotes = [
  'https://d26dzxoao6i3hh.cloudfront.net/items/3O1B1O2m3M0o3I0T0d3B/Screen%20Shot%202017-07-03%20at%202.22.36%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/3F0u0X1t2a0S3X441L1T/Screen%20Shot%202017-07-03%20at%202.18.29%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/0y0Y1Z0M2e401Y180Y0w/Screen%20Shot%202017-07-03%20at%202.18.46%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/2m3K2O0p443I3V110n1P/Screen%20Shot%202017-07-03%20at%202.18.14%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/3P3I3d1C0a3L1t1G0Q22/Screen%20Shot%202017-07-03%20at%202.43.02%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/1F0h002w093128003p2V/Screen%20Shot%202017-07-03%20at%202.15.16%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/2q031T1p2X0P2Q0q0c0o/Screen%20Shot%202017-07-03%20at%202.45.17%20PM.png',
  'https://d26dzxoao6i3hh.cloudfront.net/items/203M1N2v2Y1G0T2k4307/Screen%20Shot%202017-07-03%20at%203.05.15%20PM.png'
];

const notePictures = tripNotes.map((picture) =>
  <div style={imageStyle}>
    <Image src={picture} />
  </div>
);
