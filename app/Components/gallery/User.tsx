import { UserProps } from "../../Types/UserProps";
export default function User({
  display,
  userInfo,
}: {
  display: string;
  userInfo: UserProps;
}) {
  return (
    <div className={`absolute bottom-2 left-2 ${display} `}>
      <div className="flex items-end space-x-2">
        <div>
          <img
            className="h-6 w-6 rounded-full object-cover"
            src={userInfo.image}
          />
        </div>
        <div className="text-sm">{userInfo.name}</div>
      </div>
    </div>
  );
}
