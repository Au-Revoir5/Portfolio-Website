import { hardSkills, softSkills } from '../data'
import { str, tok, type Line } from '../lib/tokens'
import Code from './Code'
import CodeWindow from './CodeWindow'

const HARD_LINES: Line[] = [
  [tok('keyword', 'const'), tok('plain', ' hardSkills'), tok('punct', ' = {')],
  ...Object.entries(hardSkills).map(([group, items]): Line => [
    tok('plain', '  '),
    tok('prop', group),
    tok('punct', ': ['),
    ...items.flatMap((item, i) => (i === 0 ? [str(item)] : [tok('punct', ', '), str(item)])),
    tok('punct', '],'),
  ]),
  [tok('punct', '} '), tok('keyword', 'as const'), tok('punct', ';')],
]

const SOFT_LINES: Line[] = [
  [tok('keyword', 'const'), tok('plain', ' softSkills'), tok('punct', ' = [')],
  ...softSkills.map((skill): Line => [tok('plain', '  '), str(skill), tok('punct', ',')]),
  [tok('punct', '] '), tok('keyword', 'as const'), tok('punct', ';')],
]

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <h2 id="skills-title">Skills</h2>

        <div className="skills-grid">
          <div>
            <h3 className="sr-only">Hard skills</h3>
            <CodeWindow title="hard-skills.ts">
              <Code lines={HARD_LINES} />
            </CodeWindow>
          </div>

          <div>
            <h3 className="sr-only">Soft skills</h3>
            <CodeWindow title="soft-skills.ts">
              <Code lines={SOFT_LINES} />
            </CodeWindow>
          </div>
        </div>
      </div>
    </section>
  )
}