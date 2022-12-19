import React from "react";
import { render, fireEvent } from "@testing-library/jest-dom";
import ToDoApp from "./ToDoApp";

describe('ToDoApp', () => {
    it('renders tasks and allows adding, completing, and removing tasks', () => {
        const { getByText, getByLabelText } = render(<ToDoApp />);

        expect(getByText('To Do List')).toBeInTheDocument();
        expect(getByText('No tasks')).toBeInTheDocument();

        const taskInput = getByLabelText('Add Task');
        const addTaskButton = getByText('Add Task');
        fireEvent.change(taskInput, { target: { value: 'Task 1' } });
        fireEvent.click(addTaskButton);

        expect(getByText('Task 1')).toBeInTheDocument();

        const taskCheckbox = getByLabelText('Task 1');
        fireEvent.click(taskCheckbox);

        expect(taskCheckbox).toBeChecked();
        expect(getByText('Task 1')).toHaveStyle('text-decoration: line-through');

        const removeTaskButton = getByText('Remove');
        fireEvent.click(removeTaskButton);

        expect(getByText('No tasks')).toBeInTheDocument();
    });
});