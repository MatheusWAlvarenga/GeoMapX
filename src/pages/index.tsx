// vendors
import React, { useEffect, useState } from "react";
import Link from "next/link";
import GoogleMapComponent from "../components/GoogleMap";
import "tailwindcss/tailwind.css";

const MapPage: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      } catch (error) {
        console.error("Error retrieving geolocation data:", error);
      }
    };

    fetchGeolocation();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {latitude && longitude ? (
        <div className="flex flex-col w-full items-center justify-center h-screen">
          <div className="bg-gray-100">
            <header className="flex flex-col justify-center items-center bg-gray-200 text-gray-600 py-4 px-8">
              <h1 className="text-4xl font-bold">Welcome to GeoMapX</h1>
              <p className="text-md">
                An Open-Source Project for Exploring Maps with Google Maps
              </p>
            </header>

            <main className="container mx-auto p-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                <p className="text-md">
                  GeoMapX is a Next.js web application that allows users to
                  explore and interact with maps using Google Maps based on the
                  users location.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">
                  Key Features
                </h2>
                <ul className="list-disc pl-8">
                  <li className="text-md">Capture the users location.</li>

                  <li className="text-md">
                    Utilizes the Google Maps API for map rendering and geocoding
                    functionality.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">Usage</h2>

                <ul className="list-disc pl-8">
                  <li className="text-md">
                    Obtain a Google Maps API key from the{" "}
                    <a
                      className="text-md font-semibold hover:underline"
                      href="https://console.cloud.google.com/"
                    >
                      Google Cloud Console
                    </a>
                    .
                  </li>
                  <li className="text-md">
                    Configure the Google Maps API key in the src/app/utility.ts
                    file.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">
                  Contributing
                </h2>
                <p className="text-md">
                  We welcome contributions to GeoMapX! If you find any issues or
                  have suggestions for improvement, feel free to create an issue
                  or submit a pull request on the projects GitHub repository.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
                <p className="text-md">
                  If you have any questions or inquiries about GeoMapX, please
                  reach out to{" "}
                  <a
                    className="text-md font-semibold hover:underline"
                    href="mailto:matheuswalvarenga@gmail.com"
                  >
                    me
                  </a>
                  .
                </p>
              </section>
              <section className="flex justify-center my-8">
                <GoogleMapComponent latitude={latitude} longitude={longitude} />
              </section>
            </main>
            <footer className="bg-gray-200 text-center py-4">
              <p className="text-xs text-gray-600">© 2023 GeoMapX.</p>
            </footer>
          </div>
        </div>
      ) : (
        <p className="text-xl font-bold">Loading...</p>
      )}
    </div>
  );
};

export default MapPage;
