import type { ActionFunction, LoaderFunction, MetaFunction } from "@vercel/remix";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  console.log('loader', userId);
  return {};
}

export const action: ActionFunction = async (args) => {
  const { userId } = await getAuth(args);
  console.log('action', userId);
  return {};
}

export default function Index() {
  return (
    <div>
      <SignedIn>
        <h1>Index route</h1>
        <p>You are signed in!</p>

        <Form method='post'>
          <button type='submit'>Submit</button>
        </Form>

        <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
