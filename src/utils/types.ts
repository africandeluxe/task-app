export type Task = {
  id: number,
  title: string,
  completed: boolean,
  dueDate: string
}

export type TaskItemProps = {
  task: Task,
  onEdit: () => void,
  onDelete: () => void,
  onToggleComplete: () => void
}

export type TaskListProps = {
  tasks: Task[],
  onEdit: (id: number) => void,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void
}

export type TaskFormProps = {
  onAddTask: (title: string) => void
}

export type TaskCounterProps = {
  totalTasks: number,
  completedTasks: number
}