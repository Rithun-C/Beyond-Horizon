import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-primary">Create an Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary">
              Email (Gmail)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Gmail address"
              className="border-secondary focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username" className="text-primary">
              Username
            </Label>
            <Input id="username" placeholder="Choose a username" className="border-secondary focus:border-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-primary">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="border-secondary focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-primary">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              className="border-secondary focus:border-primary"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-secondary transition-colors">Sign Up</Button>
          <div className="text-center text-sm">
            <span className="text-primary">Already have an account? </span>
            <Link href="/login" className="text-secondary hover:text-primary font-semibold transition-colors">
              Log In
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

