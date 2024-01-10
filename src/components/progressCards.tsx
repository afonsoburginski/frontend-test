// ProgressCards.tsx
import React from 'react';
import ProgressBar from './progressBar';
import { Card, Flex, Text, Title, Metric, Divider } from "@tremor/react";

const progress = [
  { name: 'OKR 1', value: 80, label: '80% concluída' },
  { name: 'OKR 2', value: 80, label: '80% concluída' },
  { name: 'OKR 3', value: 80, label: '80% concluída' }
];

const abilities = [
  { name: 'Técnico Criativos', value: 80, label: '4/5' },
  { name: 'Solução de problemas', value: 80, label: '4/5' },
  { name: 'Comportamento', value: 80, label: '4/5' },
  { name: 'Inovação', value: 80, label: '4/5' },
  { name: 'Comunicação', value: 70, label: '3/5' }
];

const data = [
  {
    category: 'Meu progresso',
    data: progress
  },
  {
    category: 'Radar de Habilidades',
    data: abilities
  }
];

const ProgressCards: React.FC = () => {
  return (
    <>
      <Card className="rounded-xl" key={data[0].category}>
        <Flex className="mt-3 md:mt-2" justifyContent="between">
          <Title className="text-[20px] md:text-[26px] font-bold">{data[0].category}</Title>
          <Metric className="text-sm text-tremor-brand">V4</Metric>
        </Flex>
        <Divider className="mt-2" />
        {progress.map((dataItem) => (
          <div key={dataItem.name} className="mb-3 md:mb-4 mt-4 md:mt-5">
            <Flex justifyContent="between">
              <Text className="text-[18px] md:text-[22px]">{dataItem.name}</Text>
              <Text className="text-sm md:text-base">{dataItem.label}</Text>
            </Flex>
            <ProgressBar value={dataItem.value} />
          </div>
        ))}
      </Card>
      <Card className="rounded-xl" key={data[1].category}>
        <Title className="text-[20px] mt-2 md:text-[26px] font-bold">{data[1].category}</Title>
        <Divider className="mt-2" />
        {abilities.map((dataItem) => (
          <div key={dataItem.name} className="mb-3 md:mb-4 mt-4 md:mt-5">
            <Flex justifyContent="between">
              <Text className="text-base md:text-lg">{dataItem.name}</Text>
              <Text className="text-base md:text-lg">{dataItem.label}</Text>
            </Flex>
            <ProgressBar value={dataItem.value} />
          </div>
        ))}
      </Card>
    </>
  );
}

export default ProgressCards;