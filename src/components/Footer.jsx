import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-accent" />
            <span className="font-serif text-xl font-bold">BloomWatch Iraq</span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Monitoring Iraq's agricultural future with real-time plant health data
          </p>

          <p className="text-sm text-muted-foreground">© 2025 BloomWatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
