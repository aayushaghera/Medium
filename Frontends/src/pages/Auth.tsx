
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';

import AuthHandler from '@/components/ui/Auth';
export default function Auth() {

  const data = useUser()
  

console.log(data)
  return (
    <header>
      
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn >
        <UserButton />
      </SignedIn>
      <AuthHandler></AuthHandler>
    </header>
  );
}