import { Disclosure } from "@headlessui/react"

export default function DropdownList() {

  return (
    <>
      <div className="w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <div className="flex justify-between w-full">
              <span>Do you know the way?</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 p-4">
            No! Unfortunately I don't know the way, the way must be walked by he who wants to know the way, and he will know it by himself!
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </>
  )
}