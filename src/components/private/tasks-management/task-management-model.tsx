export type STATUS = "OPEN" | "IN_PROGRESS" | "DONE";

export type TasksModel = {
  id: number;
  title: string;
  description: string;
  status: STATUS;
  storyPoint: number;
};
