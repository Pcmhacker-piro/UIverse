// Components.jsx – Component showcase page

import React, { useState } from 'react'
import Button from '../components/Button/Button.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import { componentsList } from '../data/componentsList.js'
import './Components.css'

const sections = [
  {
    id: 'buttons',
    label: 'Buttons',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="3"/></svg>,
  },
  {
    id: 'all-components',
    label: 'All Components',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
  },
]

const CopyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

function Components() {
  const [activeSection, setActiveSection] = useState('buttons')
  const [copied, setCopied] = useState(false)

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const scrollTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="comp-page">
      <Navbar />

      <div className="comp-layout">

        {/* ── Sidebar ── */}
        <aside className="comp-sidebar">
          <p className="sidebar-label">ON THIS PAGE</p>
          {sections.map((s) => (
            <button
              key={s.id}
              className={`sidebar-item ${activeSection === s.id ? 'sidebar-item--active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              <span className="sidebar-item-icon">{s.icon}</span>
              {s.label}
            </button>
          ))}

          <div className="sidebar-divider" />
          <p className="sidebar-label">CONTRIBUTE</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="sidebar-item sidebar-item--link"
          >
            <span className="sidebar-item-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </span>
            GitHub Repo
          </a>
        </aside>

        {/* ── Main content ── */}
        <main className="comp-main">
          <div className="comp-header">
            <h1>Components</h1>
            <p>Production-ready UI components. Copy the code, drop it in, done.</p>
          </div>

          {/* ── Buttons Section ── */}
          <section className="comp-section" id="buttons">
            <div className="comp-section-header">
              <h2>Button</h2>
              <span className="comp-badge comp-badge--stable">Stable</span>
            </div>
            <p className="comp-section-desc">
              Versatile button component with 3 variants and 3 sizes. Supports any click handler.
            </p>

            <div className="comp-subsection">
              <h3 className="comp-subsection-title">Variants</h3>
              <div className="comp-preview">
                <Button text="Primary" variant="primary" />
                <Button text="Secondary" variant="secondary" />
                <Button text="Danger" variant="danger" />
              </div>
            </div>

            <div className="comp-subsection">
              <h3 className="comp-subsection-title">Sizes</h3>
              <div className="comp-preview comp-preview--align-end">
                <Button text="Small" variant="primary" size="sm" />
                <Button text="Medium" variant="primary" size="md" />
                <Button text="Large" variant="primary" size="lg" />
              </div>
            </div>

            <div className="code-block">
              <div className="code-block-header">
                <span>JSX</span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(`<Button text="Primary"   variant="primary" />\n<Button text="Secondary" variant="secondary" />\n<Button text="Danger"    variant="danger" />\n\n{/* Sizes */}\n<Button text="Small"  variant="primary" size="sm" />\n<Button text="Medium" variant="primary" size="md" />\n<Button text="Large"  variant="primary" size="lg" />`)}
                >
                  {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy</>}
                </button>
              </div>
              <pre>{`<Button text="Primary"   variant="primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Danger"    variant="danger" />

{/* Sizes */}
<Button text="Small"  variant="primary" size="sm" />
<Button text="Medium" variant="primary" size="md" />
<Button text="Large"  variant="primary" size="lg" />`}</pre>
            </div>

            <div className="comp-subsection">
              <h3 className="comp-subsection-title">Props</h3>
              <div className="props-table-wrap">
                <table className="props-table">
                  <thead>
                    <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>text</code></td><td>string</td><td><code>"Button"</code></td><td>Label text</td></tr>
                    <tr><td><code>variant</code></td><td>string</td><td><code>"primary"</code></td><td>primary · secondary · danger</td></tr>
                    <tr><td><code>size</code></td><td>string</td><td><code>"md"</code></td><td>sm · md · lg</td></tr>
                    <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── All Components Table ── */}
          <section className="comp-section" id="all-components">
            <div className="comp-section-header">
              <h2>All Components</h2>
            </div>
            <p className="comp-section-desc">
              Full registry of current and upcoming UIverse components.
            </p>
            <div className="comp-table-wrap">
              <table className="comp-table">
                <thead>
                  <tr><th>Name</th><th>Category</th><th>Status</th><th>Description</th></tr>
                </thead>
                <tbody>
                  {componentsList.map((c) => (
                    <tr key={c.id}>
                      <td><strong>{c.name}</strong></td>
                      <td><span className="category-tag">{c.category}</span></td>
                      <td>
                        <span className={`comp-badge comp-badge--${c.status.toLowerCase()}`}>
                          {c.status}
                        </span>
                      </td>
                      <td>{c.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default Components
