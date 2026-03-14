import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <nav className="w-full px-8 pt-4 sm:px-20 flex items-center justify-between">
        <span className="text-lg font-bold font-instrument-serif">Baby Falcon</span>
        <div className="flex gap-3">
          <a href="https://x.com/bowtieaerospace" className="p-1 transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faXTwitter} size="sm" className="text-gray-700" />
          </a>
          <a href="mailto:hi@babyfalcon.space" className="p-1 transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-gray-700" />
          </a>
          <a href="" className="p-1 transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-gray-700" />
          </a>
        </div>
      </nav>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20  sm:p-20">
      <main className="flex flex-col gap-[8px] row-start-2 items-start w-full max-w-4xl">
        {/*<Image
          className="rounded-md"
          src="/images/logo.png"
          alt="Baby Falcon logo"
          width={100}
          height={100}
          priority
        />*/}

        <h1 className="text-4xl font-bold font-instrument-serif">
          A self-landing model rocket.
        </h1>

        <p className="text-sm font-mono">
          We&apos;re two high school sophomores building a model rocket that lands like SpaceX's Falcon 9.
        </p>

        <div className="w-full mt-6 overflow-hidden">
          <iframe
            src="https://gmail1028325.autodesk360.com/g/shares/SH286ddQT78850c0d8a4a5d1841d24301e8e"
            className="w-full"
            style={{ height: '480px' }}
            allowFullScreen
            title="Baby Falcon 3D Model"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 justify-center sm:justify-start max-w-md mx-auto sm:mx-0">
          <div className="flex flex-col items-center text-center">
            <Link href="https://x.com/adityasaravana" className="group">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQEVDFeXuKIxxA/profile-displayphoto-scale_400_400/B56Zx5t2l2G4Ag-/0/1771568604615?e=1775088000&v=beta&t=rcPgjTJW00i5xnXkvzWK8cmsCTMWJqPG5pTvM4w2ZdA"
                alt="Photo of Aditya"
                width={128}
                height={128}
                className=" object-cover transition-transform hover:scale-105 cursor-pointer"
                priority
              />
            </Link>
            <div className="flex items-center gap-1 mt-4">
              <Link href="https://x.com/adityasaravana" className="hover:underline">
                <h2 className="text-xl font-instrument-serif font-bold">Aditya</h2>
              </Link>
              <div className="flex gap-1">
                <a href="https://x.com/adityasaravana" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faXTwitter} size="sm" className="text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/adityasaravana/" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <Link href="https://www.linkedin.com/in/andr%C3%A9s-mathias-427469340/" className="group">
            <Image
                src="/images/andy.jpeg"
                alt="Photo of Andy"
                width={128}
                height={128}
                className=" object-cover transition-transform hover:scale-105 cursor-pointer"
                priority
              />
            </Link>
            <div className="flex items-center gap-1 mt-4">
              <Link href="https://www.linkedin.com/in/andr%C3%A9s-mathias-427469340/" className="hover:underline">
                <h2 className="text-xl font-instrument-serif font-bold">Andy</h2>
              </Link>
              <div className="flex gap-1">
                <Link href="https://x.com/andmath173842" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faXTwitter} size="sm" className="text-gray-700" />
                </Link>
                <Link href="https://www.linkedin.com/in/andr%C3%A9s-mathias-427469340/" className="p-1 transition-colors hover:scale-125 transition-transform">
                  <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-gray-700" />
                </Link>
              </div>
            </div>
          </div>


        </div>
        <br></br>
        <p className="text-sm font-mono">
          Wanna talk? <Link href="mailto:hi@babyfalcon.space" className="text-blue-500 hover:underline">Say hi!</Link>
        </p>

        <p className="text-sm font-mono">
          Follow us on <Link href="https://x.com/baby___falcon" className="text-blue-500 hover:underline">X</Link> for updates.
        </p>
      </main>
      </div>
    </div>
  );
}
