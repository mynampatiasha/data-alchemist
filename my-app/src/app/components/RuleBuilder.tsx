import React, { useState } from "react";

const RuleBuilder: React.FC = () => {
  const [rule, setRule] = useState("");

  const handleAdd = () => {
    alert(`Rule added: ${rule}`);
  };

  return (
    <div>
      <h4>Rule Builder</h4>
      <input value={rule} onChange={(e) => setRule(e.target.value)} placeholder="e.g. Co-run T1 and T2" />
      <button onClick={handleAdd}>Add Rule</button>
    </div>
  );
};

export default RuleBuilder;
