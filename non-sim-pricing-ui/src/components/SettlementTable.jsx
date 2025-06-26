import React from 'react'

export default function SettlementTable({ players, onUpdate }) {
  return (
    <div>
      <h2 className="font-medium mb-2">Settlement</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Player</th>
            <th className="p-2 border">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {players.map(p => (
            <tr key={p.id} className="border-t">
              <td className="p-2 border-r">{p.name}</td>
              <td className="p-2">
                <input
                  className="border rounded p-1 w-full"
                  value={p.outcome}
                  onChange={e => onUpdate(p.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
