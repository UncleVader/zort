export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BetTracker AI</h3>
            <p className="text-blue-200">
              Transform your betting experience with AI-powered analytics
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Features</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">support@bettracker.ai</li>
              <li className="text-blue-200">+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">Twitter</a>
              <a href="#" className="text-blue-200 hover:text-white">Facebook</a>
              <a href="#" className="text-blue-200 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 BetTracker AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}