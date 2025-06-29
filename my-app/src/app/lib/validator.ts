import { Client, Worker, Task } from "../utils/types";

export function validateClients(clients: Client[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  clients.forEach(client => {
    if (!client.ClientID) {
      errors.push(`Client missing ID: ${JSON.stringify(client)}`);
    }
    if (ids.has(client.ClientID)) {
      errors.push(`Duplicate ClientID: ${client.ClientID}`);
    } else {
      ids.add(client.ClientID);
    }
  });
  return errors;
}

export function validateWorkers(workers: Worker[]): string[] {
  const errors: string[] = [];
  workers.forEach(worker => {
    if (!worker.WorkerID) {
      errors.push(`Worker missing ID: ${JSON.stringify(worker)}`);
    }
    if (worker.MaxLoadPerPhase < 1) {
      errors.push(`Worker ${worker.WorkerID} has invalid MaxLoadPerPhase`);
    }
  });
  return errors;
}

export function validateTasks(tasks: Task[]): string[] {
  const errors: string[] = [];
  tasks.forEach(task => {
    if (!task.TaskID) {
      errors.push(`Task missing ID: ${JSON.stringify(task)}`);
    }
    if (task.Duration < 1) {
      errors.push(`Task ${task.TaskID} has invalid Duration`);
    }
  });
  return errors;
}
