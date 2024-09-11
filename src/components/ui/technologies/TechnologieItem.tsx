import React from 'react'
import { IconType } from 'react-icons';

interface Props {
  name: string;
  icon: IconType;
  color: string;
}

export const TechnologieItem = ({ name, icon: Icon, color }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center text-xl items-center gap-3 p-3 rounded-lg bg-slate-900 bg-opacity-70">
      <p className=" text-nowrap">{name}</p>
      <Icon className={`${color} size-12 rounded-sm`}/>
    </div>
  );
};