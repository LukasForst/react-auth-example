import { ReactNode } from 'react';
import { CircularProgress } from '@material-ui/core';

interface ComponentProps {
  status: 'pending' | string,
  children: ReactNode
}

export default function ComponentOrPending(props: ComponentProps) {
  return (
    <div>
      {props.status === 'pending' ? (<CircularProgress/>) : props.children}
    </div>
  );
}
