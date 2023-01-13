import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Person {
  name: string
  description: string
}

const persons: Person[] = [
  {
    name: "Matias",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum asperiores fugit doloribus commodi vitae, ratione nisi maxime magnam pariatur optio consequuntur debitis accusamus voluptatem tempore, similique laudantium, consectetur eaque nostrum!"
  },
  {
    name: "Carlos",
    description: "Lorem doloribus commodi vitae, ratione nisi maxime magnam pariatur optio consequuntur debitis accusamus voluptatem tempore, similique laudantium, consectetur eaque nostrum!"
  },
  {
    name: "Miguel",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum asperiores fugit doloribus commodi vitae, ratione nisi maxime magnam pariatur optio consequuntur debitis accusamus voluptatem tempore, similique laudantium, consectetur eaque nostrum! Voluptatem tempore, similique laudantium, consectetur eaque nostrum"
  }
]

export default function Tabs() {
  return (
    <div className='w-full max-w-md px-2 sm:px-0'>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {persons.map(person => {
            return (
              <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>{person.name}</Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {persons.map(person => {
            return (
              <Tab.Panel className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}>{person.description}</Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
