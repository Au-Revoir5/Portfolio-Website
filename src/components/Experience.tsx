import { experience } from '../data'
import '../timeline.css'
import CodeWindow from './CodeWindow'

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <h2 id="experience-title">Experience</h2>

        <div className="timeline-window">
          <CodeWindow title="experience.ts">
            <div className="window-body">
              <ol className="timeline">
                {experience.map((entry) => (
                  <li className="timeline-item" key={`${entry.experience}-${entry.period}`}>
                    <p className="timeline-period">{entry.period}</p>
                    <h3>{entry.experience}</h3>
                    <p className="timeline-degree">{entry.title}</p>

                    {entry.notes && (
                      <ul className="timeline-notes">
                        {entry.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </CodeWindow>
        </div>
      </div>
    </section>
  )
}