import React, { useState } from "react";

const PrioritySettings: React.FC = () => {
  const [priority, setPriority] = useState(5);

  return (
    <div>
      <h4>Priority Settings</h4>
      <input
        type="range"
        min="1"
        max="10"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />
      <p>Current Priority Weight: {priority}</p>
    </div>
  );
};

export default PrioritySettings;
