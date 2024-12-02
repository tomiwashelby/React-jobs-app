import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  };

  const updateJob = async (updatedJob) => {
    const response = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route 
          path={'/job/:id'} 
          element={<JobPage deleteJob={deleteJob} />} 
          loader={jobLoader} 
        />
        <Route 
          path={'/job/edit-job/:id'} 
          element={<EditJobPage updateJob={updateJob} />} 
          loader={jobLoader} 
        />
        <Route 
          path={'/add-job'} 
          element={<AddJobPage submitJob={addJob} />} 
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;