export default ({ children }) => (
  <h1>
    { children }
    <style jsx>{`
      h1 {
        font-weight: 500;
        margin-bottom: 20px;
        text-decoration: none;
        font-size: 35px;
        color: #41e545;
      }
    `}</style>
  </h1>
)
