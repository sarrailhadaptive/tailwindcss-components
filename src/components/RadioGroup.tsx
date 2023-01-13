import { RadioGroup } from "@headlessui/react"
import { useState } from "react"

interface Fruit {
  name: string
}


const fruits: Fruit[] = [
  {
    name: 'Pear',
  },
  {
    name: 'Apple',
  },
  {
    name: 'Banana',
  },
  {
    name: 'Melon'
  }
]


export default function RadioGroups() {
  const [selected, setSelected] = useState<Fruit | Fruit[]>(fruits[0])

  return (
    <>
      <div className="w-full px-4">
        <div className="max-w-md">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-4">
              {fruits.map((fruit) => (
                <RadioGroup.Option
                  key={fruit.name}
                  value={fruit}
                  className={({ active, checked }) =>
                    `${active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                    }
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                    }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                              {fruit.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                }`}
                            >
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  )
}