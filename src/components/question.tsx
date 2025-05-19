'use client';

import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Perguntas = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const textAccord = [
    {
      question: 'Com quais especialidades a Aprimora Conhecimento trabalha?',
      reply: 'Atuamos com UX/UI Design, Design Gráfico, Social Media, Recrutamento e Seleção, e Copywriting.',
    },
    {
      question: 'Preciso ter experiência para fazer parte da equipe?',
      reply: 'Não exigimos experiência prévia. Nosso objetivo é proporcionar um ambiente de aprendizado e crescimento profissional.',
    },
    {
      question: 'Qual é a carga horária de trabalho?',
      reply: 'A carga horária é flexível, com até 8 horas semanais, permitindo que você concilie com outras atividades.',
    },
    {
      question: 'Quanto tempo, em média, dura um projeto?',
      reply: 'Projetos de UX têm duração média de 4 a 6 meses. Já os de Design Gráfico costumam ser concluídos em até 1 mês, enquanto os de Social Media envolvem a criação de posts semanais.',
    },
    {
      question: 'Os projetos desenvolvidos podem ser adicionados ao meu portfólio?',
      reply: 'Sim, incentivamos que nossos integrantes utilizem os projetos realizados para fortalecer seus portfólios e impulsionar suas carreiras.',
    },
    {
      question: 'Os projetos realizados são comercializáveis?',
      reply: 'Não. Todos os projetos têm caráter voluntário e são destinados exclusivamente a portfólio ou ONGs.',
    },
  ];

  return (
    <section data-aos="fade-up">
      <div className="container max-w-[1160px] px-6 pb-14 pt-14 md:flex md:pt-20">
        <h1 className="text-5xl font-bold text-darkBlue md:text-6xl">
          Perguntas frequentes
        </h1>
        <div className="flex basis-5/6 flex-col space-y-5">
          {textAccord.map((item, index) => (
            <Collapsible.Root
              key={index}
              className="group mt-12 w-full rounded-[33px] border-2 border-darkBlue  p-3 font-lustria font-normal md:mt-0"
              data-aos="fade-up"
            >
              <Collapsible.Trigger className="flex w-full transform items-center justify-center text-start text-lg text-darkBlue lg:text-xl">
                <p>{item.question}</p>
                <ChevronDown className="ml-auto min-w-[30px] duration-200 group-data-[state='open']:rotate-180" />
              </Collapsible.Trigger>
              <Collapsible.Content className="data-[state='open']:slideUp CollapsibleContent mt-3 duration-100 ease-out">
                {item.reply}
              </Collapsible.Content>
            </Collapsible.Root>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perguntas
