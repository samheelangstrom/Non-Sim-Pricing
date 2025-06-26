import React from 'react'

export default function CommitButton({ onCommit }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      onClick={onCommit}
    >
      Commit
    </button>
  )
}
