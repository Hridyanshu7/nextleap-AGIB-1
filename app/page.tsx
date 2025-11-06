'use client'

import LoginForm from '@/components/LoginForm'
import IllustrationSection from '@/components/IllustrationSection'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>

      {/* Right Column - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-purple-light items-center justify-center p-8">
        <IllustrationSection />
      </div>
    </div>
  )
}

