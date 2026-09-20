import type { ReactNode } from 'react'

interface CodeWindowProps {
  title: string
  children: ReactNode
}

export default function CodeWindow({ title, children }: CodeWindowProps) {
  return (
    <div className="window">
      <div className="window-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}
