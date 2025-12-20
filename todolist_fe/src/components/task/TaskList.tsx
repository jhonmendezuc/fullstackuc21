import React from 'react'
import { Container, Typography, List, ListItem, ListItemText, IconButton, Fab, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import type { Task } from '../../interfaces/task.interface';
import type { AppDispatch, RootState } from '../../store/store';
import { getTask, deleteTask, updateTask } from '../../store/task.slice';
import { logOut } from '../../store/auth.slice';


import TaskForm from '../task/FormTask';
import { useNavigate } from 'react-router-dom';
import Notification from '../commons/Notification';


export default function TaskList() {
  const dispatch = useDispatch<AppDispatch>()
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks)
  const [isFormOpen, setIsFormOpen] = React.useState(false)
  const [editingTask, setEditingTask] = React.useState<Task | undefined>(undefined)
  const [notification, setNotification] = React.useState({
    open: false,
    message: '',
    severity: 'error' as 'error' | 'warning' | 'success',
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      setNotification({ open: true, message: error, severity: 'error' });
    }
  }, [error]);


  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
    setNotification({ open: true, message: 'Tarea eliminada', severity: 'success' });
  }

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setIsFormOpen(true)
  }

  const handleAdd = () => {
    setIsFormOpen(true)
    setEditingTask(undefined)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingTask(undefined)
  }

  const handleLogout = () => {
    dispatch(logOut())
    setNotification({ open: true, message: 'Sesion cerrada', severity: 'success' });
    navigate('/login')
  }

  const handleCloseNotification = () => {
    setNotification({ open: false, message: '', severity: 'success' });
  }

  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 2 }}>
          <Typography color="primary.main" variant="h4" component="h1">
            Todo List
          </Typography>
          <IconButton color="primary" aria-label="logout" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
        <List>
          {tasks.map((task: Task) => {
            return (
              <ListItem key={task.id}
                secondaryAction={
                  <>
                    <IconButton onClick={() => handleEdit(task)} edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(task.id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText sx={{ color: "primary.main" }} primary={task.name} secondary={task.dueDate ? new Date(task.dueDate).toLocaleDateString('es-ES')
                  : 'Sin fecha'} />
              </ListItem>
            )
          })}
        </List>
        <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <AddIcon onClick={handleAdd} />
        </Fab>
        <TaskForm
          open={isFormOpen}
          onClose={handleCloseForm}
          task={editingTask}
        />
        <Notification
          open={notification.open}
          message={notification.message}
          severity={notification.severity}
          onClose={handleCloseNotification}
        />
      </Container>
    </>
  )
}
