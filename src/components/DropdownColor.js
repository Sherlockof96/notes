import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MdPalette } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownColor({handleChangeColour}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="cursor-pointer justify-self-end mr-2">
        <MdPalette size="1.3em" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 origin-center z-10 mt-1 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
               <button
                    onClick={() => handleChangeColour('bg-yellow-400') }
                    className={classNames(
                    active ? 'bg-yellow-400 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                )}>
               Yellow
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
               <button
                    onClick={() => handleChangeColour('bg-purple-400') }
                    className={classNames(
                    active ? 'bg-purple-400 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                )}>
                    Purple
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                    onClick={() => handleChangeColour('bg-red-400') }
                    type="submit"
                    className={classNames(
                    active ? 'bg-red-400 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                )}>
                    Red
                </button>
              )}
            </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleChangeColour('bg-pink-400') }
                    className={classNames(
                      active ? 'bg-pink-400 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Pink
                  </button>
                )}
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}