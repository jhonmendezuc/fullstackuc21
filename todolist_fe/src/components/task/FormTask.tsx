import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, updateTask, deleteTask } from '../../store/task.slice';
import type { AppDispatch } from '../../store/store';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import type { Task } from '../../interfaces/task.interface';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

interface TaskFormProps {
  open: boolean;
  onClose: () => void;
  task?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ open, onClose, task }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (task) {
      setName(task.name);
      setDueDate(task.dueDate);
      setUserId(task.userId);
    } else {
      setName('');
      setDueDate('');
    }
  }, [task, open]);

  const handleSubmit = () => {
    if (task) {
      setDueDate(new Date(dueDate).toISOString());
      dispatch(updateTask({ ...task, name, dueDate }));
    } else {

      console.log(dueDate)
      dispatch(createTask({ name, dueDate, status: false, userId: user?.id || '' }));
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{task ? 'Edit Task' : 'Add Task'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="dueDate"
          label="Due Date"
          type="date"
          fullWidth
          variant="standard"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
