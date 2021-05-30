
import StudentDashboard from '../components/Dashboard/StudentDashboard'
import AdminDashboard from '../components/Dashboard/AdminDashboard'
import { useUser } from '../hooks/useUser'

export default function Dashboard () {
  const { user } = useUser({ redirectTo: '/api/auth/microsoft/login' })

  if (!user) {
    return (
      <div>...</div>
    )
  }

  return (
    user.admin
      ? (
        <AdminDashboard />
        )
      : (
        <StudentDashboard />
        )
  )
}
