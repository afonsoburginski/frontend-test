import { Flex, Text, Metric } from "@tremor/react";

const Banner: React.FC = () => {
  return (
    <Flex className="flex-col bg-cover bg-center h-[150px] md:h-[190px] rounded-xl justify-center items-start pl-10" style={{backgroundImage: "url('/img/banner.png')"}}>
      <Text className="text-lg md:text-xl text-tremor-brand mb-2">Bem-vindo ao pilar</Text>
      <Metric className="text-[30px] md:text-white">Profissional</Metric>
    </Flex>
  );
};

export default Banner;