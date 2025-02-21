import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-primary">Log In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-primary">
              Username
            </Label>
            <Input id="username" placeholder="Enter your username" className="border-secondary focus:border-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-primary">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border-secondary focus:border-primary"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-secondary transition-colors">Log In</Button>
          <div className="text-center text-sm">
            <span className="text-primary">Don&apos;t have an account? </span>
            <Link href="../signup" className="text-secondary hover:text-primary font-semibold transition-colors">
              Sign Up 
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

