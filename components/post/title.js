export default ({ children }) => (
  <h1>
    { children }
    <style jsx>{`
      h1 {
        font-weight: 500;
        margin-bottom: 50px;
        text-decoration: none;
        font-size: 48px;
        color: #41e545;
      }

      @media (max-width: 500px) {
        h1 {
          font-size: 36px;
        }
      }
    `}</style>
  </h1>
)
