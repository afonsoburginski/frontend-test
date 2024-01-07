// sidebar.tsx
'use client'
import Image from 'next/image';
import { Title, Text, Button } from '@tremor/react';
import { HiOutlineHome, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigation = [
  { name: 'Início', icon: HiOutlineHome, href: '/' },
  { name: 'Plano de Carreira', icon: HiOutlineMagnifyingGlass, href: '/career' },
  { name: 'Viagens', icon: HiOutlineMagnifyingGlass, href: '/trips' },
  { name: 'Processos', icon: HiOutlineMagnifyingGlass, href: '/processes' },
  { name: 'PowerBI', icon: HiOutlineMagnifyingGlass, href: '/powerbi' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-96 bg-tremor-background-muted p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32- h-32 rounded-full mb-4">
        <Image
          src="/assets/user.svg"
          alt="Avatar do usuário"
          width={118}
          height={118}
          className="rounded-full object-cover"
        />
        </div>
        <div className="text-center">
          <Title className="text-lg font-bold mb-1">Pabro Almeida</Title>
          <Title className="text-tremor-brand font-normal mb-1">Designer de Mídias</Title>
          <Title className="mb-1">V4</Title>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center">
        {navigation.map((item, index) => (
          <div key={index} className="mt-2 flex justify-center">
            <Link href={item.href}>
              <Button
                icon={item.icon}
                variant="secondary"
                className={`w-64 inline-flex px-4 py-2 text-sm font-medium border-tremor-brand-muted hover:border-tremor-brand-emphasis rounded-full hover:bg-tremor-background-subtle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${pathname === item.href ? 'text-tremor-brand-emphasis' : 'text-tremor-brand-faint'}`}
                style={{ justifyContent: 'flex-start', borderRadius: '5rem' }}
              >
                <Text>{item.name}</Text>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;