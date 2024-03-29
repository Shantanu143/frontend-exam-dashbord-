import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import SetExam from './SetExam'
import Questions from './Questions'
import CreateUser from './CreateUser'
import RessultOfExam from './RessultOfExam'
const DashbordRoutes = () => {
  return (
    <Layout>
      <Routes >
        {/* <Route path="/questions" element={<Questions />} /> */}
        <Route path="/setexam" element={<SetExam />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/resultofexam" element={<RessultOfExam />} />
      </Routes>
    </Layout>
  )
}

export default DashbordRoutes
