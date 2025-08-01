import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const data = [
    {
      id: "1",
      service_name: "Premium Web Hosting",
      service_image:
        "https://plus.unsplash.com/premium_photo-1683758342945-e0e47a14a66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyMFdlYiUyMEhvc3Rpbmd8ZW58MHx8MHx8fDA%3D",
      service_description:
        "Fast, reliable and secure web hosting with 99.9% uptime guarantee.",
    },
    {
      id: "2",
      service_name: "Graphic Design",
      service_image:
        "https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JhcGhpYyUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      service_description:
        "Creative design services including logos, banners, and branding materials.",
    },
    {
      id: "3",
      service_name: "SEO Optimization",
      service_image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      service_description:
        "Boost your website ranking and visibility on search engines with expert SEO.",
    },
    {
      id: "4",
      service_name: "Mobile App Development",
      service_image:
        "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9iaWxlJTIwQXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      service_description:
        "Custom iOS and Android mobile apps built for performance and scalability.",
    },
    {
      id: "5",
      service_name: "Digital Marketing",
      service_image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      service_description:
        "Grow your business with targeted ads, social media, and email campaigns.",
    },
    {
      id: "6",
      service_name: "UI/UX Design",
      service_image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VUklMkZVWCUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      service_description:
        "User-focused interface design for web and mobile platforms to increase engagement.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <p className="mt-4 text-center">
        We offer a variety of services to help you achieve your goals.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/services/${service.id}`}>
              <img
                src={service.service_image}
                alt={service.service_name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </Link>
            <h2 className="text-xl text-gray-900 font-semibold mt-4">
              {service.service_name}
            </h2>
            <p className="mt-2 text-black">{service.service_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
