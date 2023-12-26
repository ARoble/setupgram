export default function Header() {
  return (
    <div className="flex justify-between py-8">
      <h1 className="text-2xl">SetupGram</h1>
      <div className="space-x-3">
        <button className="bg-secondary p-2.5 px-3 rounded-md text-primary">
          Create account
        </button>
        <a>Login</a>
      </div>
    </div>
  );
}
