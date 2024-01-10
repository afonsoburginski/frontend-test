// Warnings.tsx
import React from 'react';
import { Card, Flex, Title, Text, Grid } from "@tremor/react";
import Image from 'next/image';

const WarningCards: React.FC = () => {
  return (
    <>
      <Title className="text-lg sm:text-xl md:text-3xl font-bold mb-3 mt-6">Avisos importantes</Title>
      <Grid numItemsSm={1} numItemsLg={1} className="gap-3">
        <Flex className="items-stretch h-28">
          <Image
            src="/img/warning1.png"
            alt="Avatar do usuário"
            width={200}
            height={112}
            className="object-cover"
          />
          <Card className="rounded-l-none rounded-r-xl p-4 flex flex-col justify-center h-full">
            <Title className="text-sm sm:text-lg md:text-[22px] ml-2 sm:ml-4">6º Monthly V4Colli&Co - Sucesso Intelectual</Title>
            <Text className="text-sm sm:text-lg md:text-[22px] ml-2 sm:ml-4">🎉 Prepare-se para alcançar o sucesso intelectual! 🚀✨</Text>
          </Card>
        </Flex>
        <Flex className="items-stretch h-28">
          <Image
            src="/img/warning2.png"
            alt="Avatar do usuário"
            width={200}
            height={112}
            className="object-cover"
          />
          <Card className="rounded-l-none rounded-r-xl p-4 flex flex-col justify-center h-full">
            <Title className="text-sm sm:text-lg md:text-[22px] ml-2 sm:ml-4">🔔📣 Atenção, investidores da V4Company Colli&Co!</Title>
            <Text className="text-sm sm:text-lg md:text-[22px] ml-2 sm:ml-4">🎉 Prepare-se para alcançar o sucesso intelectual! 🚀✨</Text>
          </Card>
        </Flex>
      </Grid>
    </>
  );
}

export default WarningCards;