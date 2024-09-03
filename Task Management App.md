Task Management App

A simple application that allows users to manage their daily tasks. Features include creating new tasks, editing existing tasks, deleting tasks, and marking tasks as completed.

Features
Task List - Displays all tasks

Add Task - A form to add a new task

Edit Task - An option to edit an existing task

Delete Task - A button to delete a task

Mark as Completed - A checkbox to mark a task as completed

Components

1. TaskList

- A list of tasks
  - tasks in the list -> TaskList renders each task’s title
  - If there are no tasks -> TaskList should display "No tasks available"

Each task with corresponding action buttons

- Each task have an "Edit" button, a "Delete" button and a checkbox to mark the task as completed

2. TaskItem

- Display the task title
- When task is marked as completed -> title should have a line-through

- Clicking the "Edit" button triggers edit mode -> making the task title editable

- Delete the task when Delete button is clicked

- Toggle task completion when the checkbox is clicked -> at the task’s completed state

3. AddTaskForm

- Has an input field and a submit button
  -> an input field where the user can type the task title
  -> a button labeled "Add Task"

- Add a task when the form is submitted
- When the user enters a title and clicks the "Add Task" button -> the new task should be added to the task list

- The input field cleared after adding a task
- input field should be cleared after submitting the form

4. EditTaskForm

- An input field with the existing task title
- pre-filled with the current task title

- Save changes when the form is submitted
- When the user edits the title and submits the form -> the task should be updated with the new title

- Cancel editing when the Cancel button is clicked
- If the user clicks "Cancel" -> the form closes without saving any changes

5. TaskCounter

- Display the total number of tasks
- Display the number of completed tasks
