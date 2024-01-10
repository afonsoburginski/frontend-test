'use client'
import { useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HomeIcon, ScaleIcon, SearchIcon, EngineIcon, PowerBiIcon } from '../components/icons';
import { HiBars3, HiXMark } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'
import { FaBell } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { Icon, Text } from "@tremor/react"

const navigation = [
  { name: 'Início', icon: HomeIcon, href: '/' },
  { name: 'Plano de Carreira', icon: ScaleIcon, href: '/career' },
  { name: 'Viagens', icon: SearchIcon, href: '/trips' },
  { name: 'Processos', icon: EngineIcon, href: '/processes' },
  { name: 'PowerBI', icon: PowerBiIcon, href: '/powerbi' },
];

const menuItems = ['Sua conta', 'Configurações', 'Sair'];

export default function Navbar() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setDisclosureOpen(!disclosureOpen);
  };

  return (
    <Disclosure as="nav" className="bg-tremor-background-subtle shadow-sm" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-[60px] md:h-[90px] justify-between items-center">
              <div className="flex flex-shrink-0 items-center">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={150}
                height={15}
                className="ml-5 md:w-[225px] md:h-[25px]"
              />
              </div>
              <div className="flex items-center sm:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex items-center flex-grow">
                  <Icon className="rounded-tremor-full bg-tremor-background-emphasis h-8 w-8 mr-4" icon={HiSearch} variant="light" tooltip="Faça sua busca"/>
                  <Icon className="rounded-tremor-full bg-tremor-background-emphasis h-8 w-8 mr-4" icon={FaBell} variant="light" tooltip="Exibe suas notificações"/>
                  <Menu.Button onClick={handleMenuButtonClick} className="inline-flex items-center justify-center p-2 rounded-md text-tremor-brand-muted hover:text-tremor-brand-muted hover:bg-tremor-background-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tremor-brand-muted transition-transform duration-500">
                    <span className="sr-only">Open main menu</span>
                    {disclosureOpen ? <HiXMark className="block h-8 w-8 transform rotate-180" aria-hidden="true" /> : <HiBars3 className="block h-8 w-8" aria-hidden="true" />}
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-tremor-background-emphasis ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-1">
                        <div className="flex items-center px-4 py-2">
                          <Image
                            src="assets/user.svg"
                            alt="User"
                            width={50}
                            height={50}
                            className="object-cover rounded-full mr-5 w-10 h-10 md:w-14 md:h-14" 
                          />
                          <Text className="text-lg font-bold ">Pablo Almeida</Text>
                        </div>
                        {menuItems.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                href="#"
                                className={`block px-4 py-2 text-sm ${active ? 'bg-tremor-background text-tremor-brand-inverted' : 'text-tremor-brand-faint'}`}
                              >
                                {item}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                      <div className="border-t border-tremor-background-muted mt-2 pt-2">
                        {navigation.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={`block px-4 py-2 text-sm ${active ? 'bg-tremor-background text-tremor-brand-inverted' : 'text-tremor-brand-faint'}`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="hidden sm:flex items-center">
                <Icon className="rounded-tremor-full bg-tremor-background-emphasis mr-4 w-10 h-10 flex items-center justify-center" icon={HiSearch} variant="light" tooltip="Faça sua busca"/>
                <Icon className="rounded-tremor-full bg-tremor-background-emphasis mr-4 w-10 h-10 flex items-center justify-center" icon={FaBell} variant="light" tooltip="Exibe suas notificações"/>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="focus:outline-none">
                    <Image
                      src="assets/user.svg"
                      alt="User"
                      width={50}
                      height={50}
                      className="object-cover rounded-full mr-5 w-10 h-10 md:w-14 md:h-14" 
                    />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-tremor-background-emphasis ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {menuItems.map((item, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={`block px-4 py-2 text-sm ${active ? 'bg-tremor-background text-tremor-brand-inverted' : 'text-tremor-brand-faint'}`}
                            >
                              {item}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-tremor-brand-muted hover:text-tremor-brand-muted hover:bg-tremor-background-emphasis"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}