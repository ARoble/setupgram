export default function User({
  display,
  user,
}: {
  display: string;
  user: { image: string; name: string };
}) {
  return (
    <div className={`absolute bottom-2 left-2 ${display} `}>
      <div className="flex items-end space-x-2">
        <div>
          <img className="h-6 w-6 rounded-full object-cover" src={user.image} />
        </div>
        <div className="text-sm">{user.name}</div>
      </div>
    </div>
  );
}
