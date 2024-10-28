import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              aibytes
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            <p>&copy; {currentYear} aibytes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}