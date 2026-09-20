export type TokenKind =
  | 'keyword'
  | 'type'
  | 'prop'
  | 'string'
  | 'literal'
  | 'punct'
  | 'plain'

export interface Token {
  kind: TokenKind
  text: string
  href?: string
}

export type Line = Token[]

export const tok = (kind: TokenKind, text: string, href?: string): Token => ({
  kind,
  text,
  href,
})

/** A quoted string token, e.g. "React" */
export const str = (value: string, href?: string): Token =>
  tok('string', `"${value}"`, href)

/** Character count of a set of lines, counting one newline between lines. */
export const countChars = (lines: Line[]): number =>
  lines.reduce(
    (total, line) => total + line.reduce((n, t) => n + t.text.length, 0),
    0,
  ) +
  Math.max(0, lines.length - 1)
