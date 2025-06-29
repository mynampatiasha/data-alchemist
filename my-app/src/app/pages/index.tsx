import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import DataGrid from "../components/DataGrid";
import ValidationPanel from "../components/ValidationPanel";
import RuleBuilder from "../components/RuleBuilder";
import PrioritySettings from "../components/PrioritySettings";
import { parseCSVFile } from "../lib/parser";
import { validateClients, validateWorkers, validateTasks } from "../lib/validator";
import { Client, Worker, Task } from "../utils/types";

const IndexPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleUpload = async (file: File, type: string) => {
    const data = await parseCSVFile<any>(file);
    if (type === "clients") {
      setClients(data);
      setErrors(validateClients(data));
    } else if (type === "workers") {
      setWorkers(data);
      setErrors(validateWorkers(data));
    } else if (type === "tasks") {
      setTasks(data);
      setErrors(validateTasks(data));
    }
  };

  return (
    <div>
      <h2>Data Alchemist</h2>
      <FileUploader onUpload={handleUpload} />
      <ValidationPanel errors={errors} />
      <DataGrid data={clients} title="Clients" />
      <DataGrid data={workers} title="Workers" />
      <DataGrid data={tasks} title="Tasks" />
      <RuleBuilder />
      <PrioritySettings />
    </div>
  );
};

export default IndexPage;
