import React from "react";

interface Props {
  errors: string[];
}

const ValidationPanel: React.FC<Props> = ({ errors }) => (
  <div>
    <h4>Validation Errors</h4>
    {errors.length === 0 ? <p>No errors 🎉</p> : (
      <ul>
        {errors.map((err, i) => <li key={i}>{err}</li>)}
      </ul>
    )}
  </div>
);

export default ValidationPanel;
