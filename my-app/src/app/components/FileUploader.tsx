import React from 'react';

interface Props {
  onFileUpload: (file: File, type: string) => void;
}

const FileUploader: React.FC<Props> = ({ onFileUpload }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files?.[0]) {
      onFileUpload(e.target.files[0], type);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv,.xlsx" onChange={e => handleChange(e, 'client')} /> Upload Clients<br />
      <input type="file" accept=".csv,.xlsx" onChange={e => handleChange(e, 'worker')} /> Upload Workers<br />
      <input type="file" accept=".csv,.xlsx" onChange={e => handleChange(e, 'task')} /> Upload Tasks<br />
    </div>
  );
};

export default FileUploader;
