"use client";

import { Button, IButton } from '@dathaplus/storybook';
import { useRouter } from 'next/navigation';

export const ButtonClient = ({ path, ...props }: IButton & {path: string}) => {
  const router = useRouter()
  return <Button onClick={() => router.push(path)} {...props} />;
}