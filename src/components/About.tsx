import { about, profile } from '../data'
import { str, tok, type Line } from '../lib/tokens'
import Code from './Code'
import CodeWindow from './CodeWindow'

const prop = (name: string, value: Line): Line => [
  tok('plain', '  '),
  tok('prop', name),
  tok('punct', ': '),
  ...value,
  tok('punct', ','),
]

const NOW: Line[] = [
  [tok('keyword', 'export const'), tok('plain', ' now'), tok('punct', ' = {')],
  prop('location', [str(profile.location)]),
  prop('building', [str('a typed design system')]),
  prop('learning', [str('Vite", "Flutter')]),
  prop('available', [tok('literal', 'true')]),
  [tok('punct', '};')],
]

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className="prose">
          <h2 id="about-title">About</h2>
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <CodeWindow title="now.ts">
          <Code lines={NOW} />
        </CodeWindow>
      </div>
    </section>
  )
}
