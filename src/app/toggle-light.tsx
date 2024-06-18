import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ToggleLight() {
  const [isTurnedOn, setTurnedOn] = useState(false);
  const handleToggle = () => {
    setTurnedOn(!isTurnedOn);
  };
  return (
    <div>
      <Button onClick={handleToggle}>Toggle</Button>
      <div
        className={`w-[40px] h-[40px] rounded-full ${
          isTurnedOn ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
    </div>
  );
}
