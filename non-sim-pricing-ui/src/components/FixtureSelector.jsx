import React from 'react'

export default function FixtureSelector({ fixtures, value, onChange }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Select Fixture</label>
      <select
        className="border p-2 rounded w-full"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      >
        {fixtures.map(f => (
          <option key={f.id} value={f.id}>{f.name}</option>
        ))}
      </select>
    </div>
  )
}
