"use client";

import { UserAuth } from '@/interfaces'
import { useAuthStore } from '@/store/auth-store';

interface Props {
    user: UserAuth | undefined
    children: React.ReactNode
}

export const SessionProvider = ({children, user} : Props) => {

  const signIn = useAuthStore(state => state.signIn);

  if(user?.id) {
    signIn(user);
  }

  return (
    <>
      {children}
    </>
  )
}
