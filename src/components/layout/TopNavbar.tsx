import { Mail, Phone } from "lucide-react"

export default function TopNavbar() {
  return (
    <div className="bg-white text-black py-2 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+351 123 456 789</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>contacto@empresa.pt</span>
          </div>
        </div>
        <div className="hidden md:block text-xs text-gray-300">Seg - Sex: 9h às 18h</div>
      </div>
    </div>
  )
}
