import React, { useState } from 'react'
import FixtureSelector from './components/FixtureSelector'
import SuspensionPanel from './components/SuspensionPanel'
import SettlementTable from './components/SettlementTable'
import SimControl from './components/SimControl'
import CommitButton from './components/CommitButton'

const dummyFixtures = [
  { id: 1, name: 'Fixture 1' },
  { id: 2, name: 'Fixture 2' },
]

const dummyPlayers = [
  { id: 1, name: 'Player A', suspended: false, outcome: '' },
  { id: 2, name: 'Player B', suspended: false, outcome: '' },
]

export default function App() {
  const [selectedFixture, setSelectedFixture] = useState(dummyFixtures[0].id)
  const [players, setPlayers] = useState(dummyPlayers)
  const [useSim, setUseSim] = useState(false)

  const toggleSuspension = (id) => {
    setPlayers(players.map(p => p.id === id ? { ...p, suspended: !p.suspended } : p))
  }

  const updateOutcome = (id, outcome) => {
    setPlayers(players.map(p => p.id === id ? { ...p, outcome } : p))
  }

  const handleCommit = () => {
    console.log('Committing state:', { selectedFixture, players, useSim })
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Non-Sim Pricing Admin</h1>
      <FixtureSelector fixtures={dummyFixtures} value={selectedFixture} onChange={setSelectedFixture} />
      <SuspensionPanel players={players} onToggle={toggleSuspension} />
      <SettlementTable players={players} onUpdate={updateOutcome} />
      <SimControl value={useSim} onChange={setUseSim} />
      <CommitButton onCommit={handleCommit} />
    </div>
  )
}
