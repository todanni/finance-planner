import React from "react";
import { api } from "~/utils/api";

const Categories: React.FC = () => {
const { data } = api.category.getAll.useQuery();

  return (
    <section id='plan' className='flex flex-col justify-center items-center mt-5'>
      { data?.map((cat) => (
        <div key={cat.id}> {cat.name} </div>
      )) }
    </section>
  ) 
};

export default Categories;