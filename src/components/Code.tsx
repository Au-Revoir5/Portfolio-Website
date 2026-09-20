import type { Line } from '../lib/tokens'

interface CodeProps {
  lines: Line[]
  /** How many characters to show. Omit to show everything. */
  visible?: number
  /** Show a blinking caret at the end of the visible text. */
  caret?: boolean
}

const lineLength = (line: Line) => line.reduce((n, t) => n + t.text.length, 0)

export default function Code({ lines, visible, caret = false }: CodeProps) {
  const limit = visible ?? Number.POSITIVE_INFINITY
  const lengths = lines.map(lineLength)
  // Character offset where each line starts (each line break counts as one character)
  const starts = lengths.map((_, i) =>
    lengths.slice(0, i).reduce((sum, len) => sum + len + 1, 0),
  )
  // The caret sits on the line that is currently being typed
  const caretLine = caret
    ? lengths.findIndex((len, i) => limit - starts[i] <= len)
    : -1

  return (
    <pre className="code">
      {lines.map((line, lineIndex) => {
        const shown = Math.max(0, Math.min(limit - starts[lineIndex], lengths[lineIndex]))

        return (
          <span className="line" key={lineIndex}>
            {line.map((token, tokenIndex) => {
              const before = line.slice(0, tokenIndex).reduce((n, t) => n + t.text.length, 0)
              const text = token.text.slice(0, Math.max(0, shown - before))
              if (!text) return null

              return token.href ? (
                <a
                  key={tokenIndex}
                  className={`tok-${token.kind}`}
                  href={token.href}
                  target={token.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {text}
                </a>
              ) : (
                <span key={tokenIndex} className={`tok-${token.kind}`}>
                  {text}
                </span>
              )
            })}
            {lineIndex === caretLine && <span className="caret" aria-hidden="true" />}
          </span>
        )
      })}
    </pre>
  )
}
