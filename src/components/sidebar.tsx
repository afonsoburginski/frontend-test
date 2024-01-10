'use client'
import Image from 'next/image';
import { Title, Text, Button } from '@tremor/react';
import { HomeIcon, ScaleIcon, SearchIcon, EngineIcon, PowerBiIcon } from '../components/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigation = [
  { name: 'Início', icon: HomeIcon, href: '/' },
  { name: 'Plano de Carreira', icon: ScaleIcon, href: '/career' },
  { name: 'Viagens', icon: SearchIcon, href: '/trips' },
  { name: 'Processos', icon: EngineIcon, href: '/processes' },
  { name: 'PowerBI', icon: PowerBiIcon, href: '/powerbi' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-[22rem] md:py-7 md:px-14 bg-tremor-background-muted p-4 md:block hidden">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 rounded-full mb-4">
        <Image
          src="/img/user.png"
          alt="Avatar do usuário"
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
        </div>
        <div className="text-center">
          <Text className="text-lg font-bold mb-2">Pablo Almeida</Text>
          <Text className="text-tremor-brand mb-2">Designer de Mídias</Text>
          <Text>V4</Text>
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