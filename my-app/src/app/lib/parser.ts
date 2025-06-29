import * as Papa from "papaparse";
import * as XLSX from "xlsx";
import { Client, Worker, Task } from "../utils/types";

export function parseCSV<T>(file: File): Promise<T[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<T>(file, {
      header: true,
      skipEmptyLines: true,
      complete: results => {
        resolve(results.data);
      },
      error: err => reject(err)
    });
  });
}

export function parseXLSX<T>(file: File): T[] {
  const reader = new FileReader();
  let data: T[] = [];
  reader.onload = (e) => {
    const ab = e.target?.result;
    const wb = XLSX.read(ab, { type: "binary" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    data = XLSX.utils.sheet_to_json(ws) as T[];
  };
  reader.readAsBinaryString(file);
  return data;
}
