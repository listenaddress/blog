export default ({ children }) => (
  <p>
    { children }
    <style jsx>{`
      p {
        line-height: 24px;
        margin-bottom: 20px;
      }
    `}</style>
  </p>
)

