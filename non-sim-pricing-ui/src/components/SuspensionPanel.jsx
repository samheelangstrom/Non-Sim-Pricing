import React from 'react'

export default function SuspensionPanel({ players, onToggle }) {
  return (
    <div>
      <h2 className="font-medium mb-2">Suspension</h2>
      <ul className="space-y-1">
        {players.map(p => (
          <li key={p.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={p.suspended}
              onChange={() => onToggle(p.id)}
            />
            <span>{p.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
