import React from 'react'
import './Services.css';


const services = [
  {
    category: "Digital Marketing",
    items: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Google Ads", 
      "Email Marketing",
      "Content Marketing"
    ]
  },
  {
    category: "Web Development",
    items: [
      "Website Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Custom Web Applications"
    ]
  },
  {
    category: "Mobile App Development",
    items: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Apps"
    ]
  },
  {
    category: "SEO Services",
    items: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO"
    ]

  }
];

const Services = () => {
  return (
    <div className='services'>
      <h2>Services Offered</h2>
      <div className='services-wrapper'>
        {services.map((service, i) => (
          <div className='service-card' key={i}>
            <h3>{service.category}</h3>
            <ul>
              {service.items.map((item , idx)=> (
                <li key={idx}>{item}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Services