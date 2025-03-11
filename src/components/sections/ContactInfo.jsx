import { Headphones, MapPin, MessageCircle } from "lucide-react"
import Card from "../ui/Card.jsx"

const ContactInfo = ({ info }) => {
  return (
    <Card className="p-6 border-0 shadow-lg dark:bg-zinc-700/50 h-full">
      <div className="space-y-8">
        <div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <MapPin size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{info.address.title}</h3>
              <address className="not-italic text-zinc-600 dark:text-zinc-300">
                {info.address.line1}
                <br />
                {info.address.line2}
                <br />
                {info.address.city}, {info.address.state} {info.address.zip}
                <br />
                {info.address.country}
              </address>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Headphones size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{info.phone.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                <a
                  href={`tel:${info.phone.number.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {info.phone.number}
                </a>
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{info.phone.hours}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <MessageCircle size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{info.email.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                <a
                  href={`mailto:${info.email.address}`}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {info.email.address}
                </a>
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{info.email.response}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ContactInfo

