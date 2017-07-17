import Meta from '../components/meta'
import Link from 'next/link'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
     <Link href="/"><a>youngdayjob</a></Link>
     {' '}
     (<a href={`https://github.com/thomasbeta/blog`} target="_blank">src</a>)
    </div>
    { children }

    { /* global styles and meta tags */ }

    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
        padding-bottom: 125px;
        font-size: 16px;
      }

      .logo {
        padding-bottom: 50px;
        position: absolute;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)
