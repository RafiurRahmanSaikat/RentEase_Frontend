import { Headphones, MapPin, MessageCircle } from "lucide-react";
import { Card } from "../ui";

const ContactInfo = ({ info }) => {
  return (
    <Card className="h-full border-0 p-6 shadow-lg dark:bg-zinc-700/50">
      <div className="space-y-8">
        <div>
          <div className="flex items-start">
            <div className="mr-4 flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <MapPin
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                {info.address.title}
              </h3>
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
            <div className="mr-4 flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Headphones
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                {info.phone.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                <a
                  href={`tel:${info.phone.number.replace(/[^0-9+]/g, "")}`}
                  className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {info.phone.number}
                </a>
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {info.phone.hours}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start">
            <div className="mr-4 flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <MessageCircle
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                {info.email.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                <a
                  href={`mailto:${info.email.address}`}
                  className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {info.email.address}
                </a>
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {info.email.response}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactInfo;
