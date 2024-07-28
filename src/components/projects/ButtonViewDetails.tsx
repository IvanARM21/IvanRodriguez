"use client";

import { useRouter, usePathname } from "next/navigation";

interface Props {
  id: number | null;
}

export const ButtonViewDetails = ({id} : Props) => {

  const pathname = usePathname();
  const router = useRouter();

  const openModal = () => {
    router.replace(`${pathname}?viewProject=${id}`, {
      scroll: false
    });
  }
  
  return (
    <button
        type="button"
        onClick={openModal} 
        className="btn-primary w-full p-3 my-5"
    >View Details</button>
  )
}
