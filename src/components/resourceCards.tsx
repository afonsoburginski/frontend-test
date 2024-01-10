// ResourceCards.tsx
import React from 'react';
import { Card, Title, Text, Grid } from "@tremor/react";
import { ScaleIcon, SearchIcon, EngineIcon, PowerBiIcon } from '../components/icons';

const ResourceCards: React.FC = () => {
  return (
    <>
      <Title className="text-xl sm:text-3xl font-bold mb-3 mt-6">O que está procurando?</Title>
      <Grid numItemsSm={2} numItemsMd={2} numItemsLg={4} className="grid grid-cols-2 gap-4">
        <Card className="flex-grow h-56 flex flex-col items-start justify-center rounded-xl text-left">
          <ScaleIcon className="text-tremor-brand w-8 h-8 mb-4" name="icon1" />
          <Title className="text-xl sm:text-2xl mt-2">Plano de Carreira</Title>
          <Text className="mt-1">Veja como você pode avançar</Text>
        </Card>
        <Card className="flex-grow h-56 flex flex-col items-start justify-center rounded-xl text-left">
          <SearchIcon className="text-tremor-brand w-[37px] h-[37px] mb-4" name="icon2" />
          <Title className="text-xl sm:text-2xl mt-2">Vagas</Title>
          <Text className="mt-1">Temos 8 vagas disponíveis</Text>
        </Card>
        <Card className="flex-grow h-56 flex flex-col items-start justify-center rounded-xl text-left">
          <EngineIcon className="text-tremor-brand w-[37px] h-[37px] mb-4" name="icon3" />
          <Title className="text-xl sm:text-2xl mt-2">Processos</Title>
          <Text className="mt-1">Veja por aqui todos os nossos POP`s</Text>
        </Card>
        <Card className="flex-grow h-56 flex flex-col items-start justify-center rounded-xl text-left">
          <PowerBiIcon className="text-tremor-brand w-8 h-8 mb-4" name="icon4" />
          <Title className="text-xl sm:text-2xl mt-2">PowerBI</Title>
          <Text className="mt-1">Veja o PowerBI da Coli&Co</Text>
        </Card>
      </Grid>
    </>
  );
}

export default ResourceCards;