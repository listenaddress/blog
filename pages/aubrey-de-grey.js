import UL, { LI } from '../components/post/bullets-list'
import Head from 'next/head'
import Post from '../layouts/post'
import Title from '../components/post/title'
import P from '../components/post/paragraph'
import Quote from '../components/post/quote'
import Figure, { Image } from '../components/post/figure'
import YouTube from '../components/post/youtube'
import HR from '../components/post/hr'

export default () => (
  <Post>
    <Head><title>AUBREY DE GREY</title></Head>
    <Title>AUBREY DE GREY</Title>
    <P>For me, Aubrey’s work to end aging at the <a href="http://www.sens.org">SENS Foundation</a> is among the dankest. He thinks we have a shot at reversing aging the next few decades (so anyone who is alive could return to something like a mid-twenties vibe). This would also mean an end to all age-related diseases, like cancer and Alzheimer's.</P>
    <P>In 1982 Aubrey categorized aging into seven types of cell damage. If we can find solutions for all seven, we’ll likely have solved aging.</P>
    <Figure desc={<span>
        From his <a href="https://youtu.be/T0lvxTm2iLg?t=12m13s" target="_blank">TED Talk</a>, "Seeking immortality"
      </span>}>
      <Image src="https://d26dzxoao6i3hh.cloudfront.net/items/0S1y0b101S0X3R1b2r47/Untitled.png" />
    </Figure>
    <P>Here's Aubrey addressing some common concerns and such...</P>
    <Figure>
      <YouTube videoId="2bmBrxyUoF0" />
    </Figure>
    <Figure>
      <YouTube videoId="Fn-6zM0j1qU" />
    </Figure>
    <HR />
    <P>Being into this for a few years, the most shocking thing for me has been how many people aren’t on board immediately. I'd guess over half of the 100+ people I’ve talked to said they wouldn’t be v interested in living longer than we do now, even if we were at full health with indefinite resources, only limited by our imaginations, could fly around the universe and other dimensions being omnipotent, omniscient, and such. I’ve heard a couple reasons most often… First is that life is often pretty shit and full of suffering and it’s hard to imagine that suffering leaving somehow. Second is that we’ve built amazing ways to deal with the idea death to the point of wanting it for religious reasons or otherwise.</P>
    <P>On an optimistic note though… when it comes down to it and we actually have the tech to relieve suffering, live indefinitely, and enter hot new intergalactic metaphysical realms of facebook, very few people will turn it down you have to imagine. You see this pattern with lots of tech adoption. Distaste/hate —> doubt —> adoption.</P>
    <P>One immaculate book that gets into this psychology around death is <a href="https://0ducks.files.wordpress.com/2015/01/alan-harrington-the-immortalist-1977.pdf" target="_blank">The Immortalist</a> by Alan Harrington.</P>
    <P>UGGH shouts out Alan Harrington.</P>
    <Quote>"Consider the neurotic circus we put on."</Quote>
    <Quote>"All culture has been a subtle and devious attempt to usurp divine authority, to conquer death."</Quote>
    <Quote>"The time has come for [us] to turn into gods or perish."</Quote>
    <Quote>"Death remains just beyond our attention, waiting."</Quote>
    <Quote>"We can only engineer our freedom from death, not pray for it."</Quote>
    <Quote>"Spend the money, mobilize the scientists, and hunt down death like an outlaw."</Quote>
    <HR />
    <P>Aubrey isn't the only one that thinks we’re close…</P>
    <UL>
      <li><a href="https://en.wikipedia.org/wiki/Ray_Kurzweil" target="_blank">Ray Kurzweil</a>, director of engineering at Google and one of the most prolific inventors and technology forecasters is confident he’ll probably live indefinitely even though he's 69 (2017). He built on <a href="https://en.wikipedia.org/wiki/Moore%27s_law" target="_blank">Moore's Law</a> and blessed the people with <a href="https://en.wikipedia.org/wiki/Accelerating_change#Kurzweil.27s_The_Law_of_Accelerating_Returns" target="_blank">The Law of Accelerating Returns</a> which shows that similar exponentials aren't just occuring in transistors, but in many technological systems, as well as evolution itself. He’s written some amazing books that have prediction data that’s held up v well over the years. I've read and really dig <a href="https://www.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0143037889" target="_blank">The Singularity Is Near</a> & <a href="https://www.amazon.com/How-Create-Mind-Thought-Revealed/dp/0143124048/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=6N267B3YED2AHA6AH8MX" target="_blank">How to Create a Mind</a>.</li>
      <li>
        Mark Zuckerberg and Priscilla Chan are <a href="https://www.theguardian.com/technology/2016/sep/21/mark-zuckerberg-priscilla-chan-end-disease" target="_blank">investing billions</a> into curing all disease.
        <Figure>
          <Image src="https://d26dzxoao6i3hh.cloudfront.net/items/1Q251l021K1F2y3d1D1c/Screen%20Shot%202017-06-03%20at%202.28.02%20PM.png" />
        </Figure>
      </li>
      <li>Google Ventures funded <a href="https://www.calicolabs.com/" target="_blank">Calico</a>, an R&D lab aimed at “tackling aging”. They also <a href="http://fortune.com/2016/03/07/aging-cures-research-entrepeneurs/">invested 36%</a> of their 2015 funds into life sciences and we can prob expect more big numbers.</li>
    </UL>
    <P>Here’s Aubrey’s ending aging talk at Google (basically an hour long version of the TED).</P>
    <Figure>
      <YouTube videoId="tXJzvo0Jekc" />
    </Figure>
    <P>+ there's a rad documentary on Aubrey and Bill Andrews, another biologist working on aging.</P>
    <Figure>
      <YouTube videoId="mDTBgf__0aw" />
    </Figure>
    <P>Aubrey also gets deep into the science behind SENS and how he built his ideas in <a href="https://www.amazon.com/Ending-Aging-Rejuvenation-Breakthroughs-Lifetime/dp/0312367074" target="_blank">his book</a>.</P>
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
