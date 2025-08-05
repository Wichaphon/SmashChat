import { Gamepad2 } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <Gamepad2 className="w-12 h-12 text-primary " />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Welcome to SmashChat!</h2>
        <p className="text-base-content/60">
          Smash a conversation from the sidebar to start.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;