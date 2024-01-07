'use client';

import { Card, Flex, ProgressBar, Text, Title, Metric, Grid, Divider } from "@tremor/react";

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

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-full">
      <div className="flex">
        <div className="flex-grow pr-6">
          <Flex className="bg-cover bg-center h-48" style={{backgroundImage: "url('/img/banner.png')"}}>
            <Title className="text-4xl text-white font-bold p-4">Bem-vindo ao pilar</Title>
            <Metric className="text-4xl text-white font-bold p-4">Profissional</Metric>
          </Flex>
          <Title className="mb-4">Seu título aqui</Title>
          <Grid numItemsSm={2} numItemsLg={4} className="gap-6 mb-6">
            <Card>Card 1</Card>
            <Card>Card 2</Card>
            <Card>Card 3</Card>
            <Card>Card 4</Card>
          </Grid>
          <Title className="mb-4">Avisos importantes</Title>
          <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
            <Card>Aviso 1</Card>
            <Card>Aviso 2</Card>
            <Card>Aviso 3</Card>
          </Grid>
        </div>
        <div className="w-96 flex flex-col space-y-6">
          {data.map((item) => (
            <Card className="h-full" key={item.category}>
              <Title className="text-2xl">{item.category}</Title>
              <Divider className="mt-2 mb-5" />
              {item.data.map((dataItem) => (
                <div key={dataItem.name} className="mb-4">
                <Flex justifyContent="between">
                  <Text className="text-lg">{dataItem.name}</Text>
                  <Text className="text-lg">{dataItem.label}</Text>
                </Flex>
                  <ProgressBar value={dataItem.value} className="mt-3" />
                </div>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}