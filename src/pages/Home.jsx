import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export function Home({ signOut, user }) {
  return (
    <>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Home);