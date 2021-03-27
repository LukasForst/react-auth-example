import { ReactNode } from 'react';
import { CircularProgress } from '@material-ui/core';

interface ComponentProps {
  status: 'pending' | string,
  children: ReactNode
}

/**
 * Simple wrapper that shows progress bar if status == pending.
 */
export default function ComponentOrPending({ status, children }: ComponentProps) {
  return (
    <div>
      {status === 'pending' ? (<CircularProgress/>) : children}
    </div>
  );
}
