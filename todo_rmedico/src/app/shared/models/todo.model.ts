export interface Todo {
  id?: number; //in-memory-data-service id
  title: string;
  description: string;
  date: Date;
  status: boolean;
}