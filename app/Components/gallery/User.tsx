export default function User({ display }: { display: string }) {
  return (
    <div className={`absolute bottom-2 left-2 ${display} `}>
      <div className="flex items-end space-x-2">
        <div>
          <img
            className="h-6 w-6 rounded-full object-cover"
            src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg"
          />
        </div>
        <div className="text-sm">Mohamed Amiin</div>
      </div>
    </div>
  );
}
