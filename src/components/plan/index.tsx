import React from "react";
import { api } from "~/utils/api";
import { useSession } from 'next-auth/react';
import Income from "./income";


const PlanSection: React.FC = () => {
const { data: sessionData } = useSession();

  return (
    <section id='plan' className='flex flex-col justify-center items-center mt-5'>
      { sessionData && (
      <div>
        <Income userId={sessionData.user.id}/>
      </div>
      )}
    </section>
  ) 
};

export default PlanSection;