'use client'

import Card from "@/components/card/card";
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';

export default function Home() {

  const cards = [
    {key: 1, title: '##standoff365', accepted: '2', duplicate: '2'},
    {key: 2, title: '##bi.zone', accepted: '1', duplicate: '0'},
    {key: 3, title: '##hackerone', accepted: '0', duplicate: '1'},
  ]



  return (
    <div className="flex flex-col xl:flex-row 2xl:flex-row sm:flex-row md:flex-row lg:flex-row">
      <div className="md:w-1/2 flex-col justify-start pl-6 text-gray-300 mb-10">
        <h1>@information</h1>
        <br/>
        <ReactTyped
        strings={[
          "whoami? pentester",
          "whoami? web developer",
          "whoami? bug hunter",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        <p>=======================</p>
        <p className="mt-4">
          Username: fidis 
        </p>
        <p>
          Skills: C, Python, Bug bounty, Pentest, Red Team
        </p>
        <p>
          Hobbies: ???
        </p>
        <p>
          Age: ???
        </p>
        <p>
          Social Links ~~~ none
        </p>
        <p>
          Projects ~~~ none
        </p>
      </div>
      <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex-col pr-1">
        {cards.map((card, key) => (
          <motion.div 
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0, transition: {delay: key * 0.2}}}
          custom={key}
          key={key} 
          className="flex justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end"
          >
            <Card
            title={card.title}
            accepted={card.accepted}
            duplicate={card.duplicate}
           />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
