import { profile, type Profile } from '../data'
import { countChars, str, tok, type Line } from '../lib/tokens'
import { useTyping } from '../hooks/useTyping'
import Code from './Code'
import CodeWindow from './CodeWindow'
import Snowfall from './Snowfall'

function buildLines(p: Profile): Line[] {
  const stack: Line = p.stack.flatMap((item, i) =>
    i === 0 ? [str(item)] : [tok('punct', ', '), str(item)],
  )

  return [
    [
      tok('keyword', 'const'),
      tok('plain', ' dev'),
      tok('punct', ': '),
      tok('type', 'Developer'),
      tok('punct', ' = {'),
    ],
    [tok('plain', '  '), tok('prop', 'name'), tok('punct', ': '), str(p.name), tok('punct', ',')],
    [tok('plain', '  '), tok('prop', 'role'), tok('punct', ': '), str(p.role), tok('punct', ',')],
    [
      tok('plain', '  '),
      tok('prop', 'stack'),
      tok('punct', ': ['),
      ...stack,
      tok('punct', '],'),
    ],
    [tok('plain', '  '), tok('prop', 'status'), tok('punct', ': '), str(p.status), tok('punct', ',')],
    [tok('punct', '};')],
  ]
}

const LINES = buildLines(profile)
const TOTAL = countChars(LINES)

export default function Hero() {
  const typed = useTyping(TOTAL)

  return (
    <section className="hero" id="top">
      <Snowfall />

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1>Hi, I'm {profile.name}.</h1>
          <p className="hero-lead">{profile.tagline}</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        {/* The typing animation is decorative; screen readers get the summary below. */}
        <div aria-hidden="true">
          <CodeWindow title="dev.ts">
            <Code lines={LINES} visible={typed} caret />
          </CodeWindow>
        </div>
        <p className="sr-only">
          {profile.name}, {profile.role}. Works with {profile.stack.join(', ')}. Status:{' '}
          {profile.status}.
        </p>
      </div>
    </section>
  )
}
