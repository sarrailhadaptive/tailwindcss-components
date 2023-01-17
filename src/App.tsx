import Button from "./components/Button"
import DropdownList from "./components/DropdownList"
import MenuDropdown from "./components/MenuDropdown"
import Modal from "./components/Modal"
import RadioGroups from "./components/RadioGroup"
import SwitchToggle from "./components/SwitchToggle"
import Tabs from "./components/Tabs"

const btnBuyClass = "bg-button-pink w-24 h-5 rounded-3xl text-xs hover:bg-button-pink-hovered"

function App() {

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      <div className="container mx-auto grid grid-cols-4 gap-16">
        <div>
          <h2 className="font-bold text-xl pt-16">Menu (Dropdown)</h2>
          <div className='mt-2'>
            <MenuDropdown />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl pt-16">Dialog (Modal)</h2>
          <div className="mt-2">
            <Modal />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl pt-16">Radio Group</h2>
          <div className="mt-2">
            <RadioGroups />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl pt-16">Tabs</h2>
          <div className="mt-2">
            <Tabs />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl pt-16">Switch</h2>
          <div className="mt-2">
            <SwitchToggle />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl pt-16">Disclosure</h2>
          <div className="mt-2">
            <DropdownList />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl pt-16">Button</h2>
          <div className="mt-2">
            <Button text="Buy" style={btnBuyClass} />
            <Button text="Sell" style={btnBuyClass} />
            <Button text="Add to Cart" style={btnBuyClass} />
            <Button text="Disabled" style={btnBuyClass} disabled="disabled" />
            <Button text="Forward" style={btnBuyClass} />
            <Button text="Back" style={btnBuyClass} />
          </div>
        </div>
      </div >
    </div >
  )
}

export default App
