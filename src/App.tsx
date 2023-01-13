import MenuDropdown from "./components/MenuDropdown"
import Modal from "./components/Modal"
import RadioGroups from "./components/RadioGroup"

function App() {

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-xl pt-2">Menu (Dropdown)</h2>
        <div className='mt-2'>
          <MenuDropdown />
        </div>
        <h2 className="font-bold text-xl pt-16">Dialog (Modal)</h2>
        <div className="mt-2">
          <Modal />
        </div>
        <h2 className="font-bold text-xl pt-16">Radio Group</h2>
        <div className="mt-2">
          <RadioGroups />
        </div>
      </div >
    </div >
  )
}

export default App
