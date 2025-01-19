import LoginForm from "'@/components/LoginForm'"
import { Metadata } from "'next'"

export const metadata: Metadata = {
  title: "'Login | Modern App'",
  description: "'Login to access your account'",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <LoginForm />
    </main>
  )
}

