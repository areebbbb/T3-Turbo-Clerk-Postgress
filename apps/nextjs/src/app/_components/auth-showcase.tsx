import { auth, currentUser, SignIn, SignOutButton } from "@clerk/nextjs";

export async function AuthShowcase() {
  const session = auth();
  const user = await currentUser();
  console.log("session", session?.userId);
  if (!session) {
    return (
      <form>
        <SignIn />
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {user?.firstName}</span>
      </p>

      <form>
        <SignOutButton />
      </form>
    </div>
  );
}
