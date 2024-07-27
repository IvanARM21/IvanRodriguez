"use client";

import { formattTecnologies } from '@/utils';
import { TechnologieItem } from './TechnologieItem';


export const TechnologiesGrid = () => {

  const categoriesWithTechnologies  = formattTecnologies();

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      {categoriesWithTechnologies.map(categoryWithTechnologies => (
        <div key={categoryWithTechnologies.category.id} className="space-y-4 mb-4">
          <h3 className={`flex gap-2 items-center text-2xl font-bold ${categoryWithTechnologies.category.color}`}><categoryWithTechnologies.category.icon className="h-8 w-8" /> {categoryWithTechnologies.category.name}</h3>
          <div className="grid grid-cols-2 gap-3">
            {categoryWithTechnologies.technologies.map(technology =>
              <TechnologieItem key={`${categoryWithTechnologies.category.id}-${technology.id}`} name={technology.name} color={technology.color} icon={technology.icon} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}


/*<div className="grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {technologies.map(tecnology => (
            <TechnologieItem 
              key={tecnology.id} 
              name={tecnology.name} 
              color={tecnology.color}
              icon={tecnology.icon}
            />
        ))}
    </div> */