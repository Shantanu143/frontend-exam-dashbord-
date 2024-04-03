import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import SetExam from './SetExam'
import Questions from './Questions'
import CreateUser from './CreateUser'
import RessultOfExam from './RessultOfExam'
import Users from './Users'
import ExamSettings from './ExamSettings'
import AddUsers from '../pages/AddUser'
const DashbordRoutes = () => {
  return (
    <Layout>
      <Routes >
        {/* <Route path="/questions" element={<Questions />} /> */}
        <Route path="/setexam" element={<SetExam />} />
        <Route path="/addUser/:id" element={<AddUsers />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/resultofexam" element={<RessultOfExam />} />
        <Route path="/examsettings" element={<ExamSettings />} />
      </Routes>
    </Layout>
  )
}

export default DashbordRoutes
