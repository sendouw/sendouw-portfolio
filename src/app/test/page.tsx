// Save this as src/app/test/page.tsx
export default function TestPage() {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '2rem' }}>Inline CSS Test (Should be RED)</h1>
      
      <div className="bg-blue-500 text-white p-4 m-4 rounded">
        Tailwind Test (Should have BLUE background if Tailwind works)
      </div>
      
      <div style={{ backgroundColor: 'green', color: 'white', padding: '1rem', margin: '1rem' }}>
        Another Inline CSS Test (Should be GREEN)
      </div>
      
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button (Should be PURPLE)
      </button>
    </div>
  )
}