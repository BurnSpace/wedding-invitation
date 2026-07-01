import { Suspense } from 'react';
import InvitationApp from '@/components/InvitationApp';

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-theme" />}>
      <InvitationApp />
    </Suspense>
  );
}
