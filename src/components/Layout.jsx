const Layout = ({ header, children, footer }) => {
  return (
    <div className="layout-root">
      <div className="layout-header">{header}</div>

      <main className="layout-main">
        {children}
      </main>

      <div className="layout-footer">{footer}</div>
    </div>
  )
}

export default Layout
