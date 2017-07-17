import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'
import { posts } from '../posts'

export default () => (
  <Page>
    <Head>
      <title>youngdayjob</title>
      <link rel="icon" href="https://lh3.google.com/u/0/d/0B49_l-QPB-fKT1RZWHdoV01ubnM=w1106-h776-iv1" />
    </Head>
    <div className="home">
      <div className="main">
        <div className="posts">
          {
            posts.map(({ id, date, title }) => (
              <Post
                id={id}
                key={id}
                date={date}
                title={title}
              />
            ))
          }
        </div>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        z-index: -1;
      }

      .main {
        flex: none;
        text-align: center;
      }

      nav {
        margin-top: 20px;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }

      .posts {
        margin: 140px 0px;
      }
    `}</style>
  </Page>
)

// <span className="date">{ date }</span>
// <Link prefetch href={`/${new Date(date).getFullYear()}/${id}`}><a>{ title }</a></Link>

const Post = ({ id, date, title }) => (
  <div className="post">
    <Link prefetch href={`/${id}`}><a>{ title }</a></Link>

    <style jsx>{`
      .post {
        margin-bottom: 50px;
      }

      .date {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 30px;
        color: #999;
      }

      a {
        text-decoration: none;
        font-size: 48px;
        font-weight: 100;
      }

      @media (max-width: 800px) {
        a {
          font-size: 30px;
        }
      }

      @media (max-width: 500px) {
        .post {
          margin-bottom: 35px;
        }

        a {
          font-size: 20px;
        }

        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 11px;
          color: #ccc;
          margin-bottom: 5px;
        }
      }
    `}</style>
  </div>
)

