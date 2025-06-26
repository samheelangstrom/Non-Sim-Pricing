import React from 'react'

export default function SimControl({ value, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={value}
        onChange={e => onChange(e.target.checked)}
      />
      <label>Use SIM when committing</label>
    </div>
  )
}
