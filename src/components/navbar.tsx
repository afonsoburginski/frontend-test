'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-tremor-background-subtle shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/logo.svg"
                  alt="Logo"
                  width={180}
                  height={25}
                  className="ml-10"
                />
              </div>
              <Image
                src="assets/user.svg"
                alt="User"
                width={50}
                height={50}
              />
              
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}