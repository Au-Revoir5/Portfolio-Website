import { profile } from '../data'
import { str, tok, type Line } from '../lib/tokens'
import Code from './Code'
import CodeWindow from './CodeWindow'

const entry = (name: string, label: string, href: string): Line => [
  tok('plain', '  '),
  tok('prop', name),
  tok('punct', ': '),
  str(label, href),
  tok('punct', ','),
]

const CONTACT: Line[] = [
  [tok('keyword', 'const'), tok('plain', ' contact'), tok('punct', ' = {')],
  entry('email', profile.email, `mailto:${profile.email}`),
  entry('github', `github.com/${profile.github}`, `https://github.com/${profile.github}`),
  entry(
    'linkedin',
    `linkedin.com/in/${profile.linkedin}`,
    `https://www.linkedin.com/in/${profile.linkedin}`,
  ),
  [tok('punct', '};')],
]

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="prose">
          <h2 id="contact-title">Contact</h2>
          <p>
            I'm open to full-time roles and freelance projects. Email is the fastest way to
            reach me.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Send an email
            </a>
          </div>
        </div>
        <CodeWindow title="contact.ts">
          <Code lines={CONTACT} />
        </CodeWindow>
      </div>
    </section>
  )
}
