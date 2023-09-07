import React from 'react';
import Footer from '../Components/Footer';



import { Breadcrumbs} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';


const TravelGuide = () => {
  return (
    <>
    
        
        <div className='guide'>


            <div className=' py-[6%] pl-[12%]'>

              <h1 className='text-4xl text-white font-extrabold  pb-5'>Nepal Destination Guide</h1>
              
              <div className='pt-[10%]'>  
              
                  <Breadcrumbs>
                    <NavLink href="#" className="opacity-60 font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </NavLink>
                    <NavLink href="#" className="opacity-60 font-bold">
                      <span>Pages</span>
                    </NavLink>
                    <NavLink href="#" className="font-bold">Travelling Guide</NavLink>
                  </Breadcrumbs>

              </div>

            </div>


        </div>


        {/* Details */}

        <div className='px-[10%] py-12'>

          <p className='font-bold text-lg py-5'>Planning a trip to a new country can be confusing at first, so we’ve prepared a little introduction to some of Nepal’s main destinations.</p>


          <div className='py-[2%]'>

              <h1 className='text-4xl font-extrabold pb-4'>Kathmandu</h1>
              
              <hr className='border-blue-900 w-[20%] pb-6'/>

              <p className='text-2xl'>
                Nepal’s capital city is the beating heart of the nation, and also the starting point for most travellers setting out to explore the country. It can feel like a chaotic introduction, where the fast-paced modern world bumps up against ancient traditions and architecture, but the city has a unique charm which makes it well worth exploring for a few days.

                From the peaceful stupas and temples of UNESCO-listed Durbar Square to the hectic bars and bright lights of the Thamel district, Kathmandu is a city of contrasts. Soak up some of Nepal’s ancient culture, experience the buzz of modern Kathmandu and try out some of Nepal’s best restaurants.

                There are plenty of activities on offer in Kathmandu, and the city is a starting point for a most tours and a number of great treks. 
              </p>

          </div>


          <div className='py-[2%]'>

              <h1 className='text-4xl font-extrabold pb-4'>Pokhara</h1>
              
              <hr className='border-blue-900 w-[20%] pb-6'/>

              <p className='text-2xl'>
                  Nepal’s second city sits on the banks of the beautiful Phewa Lake, surrounded by lush green hills and with the snowy peaks of the Annapurna range as a not-so-distant backdrop. It’s no wonder that so many travellers choose to stop off here on their Nepal adventure.

                  The picturesque waterfront which buzzes with local life, whilst the city provides a great selection restaurants, bars and accommodation to suit any budget. Perhaps the tourist shops and nightlife take a little away from Pokhara’s laid-back charm, but a slice of modern civilisation can be more than welcome after days spent trekking in the mountains. And anyway, that view…..

                  With its close proximity to the Annapurna range, Pokhara is a perfect base for trekkers exploring this part of Nepal. It has also become Nepal’s adventure sports capital, with world-class opportunities for paragliding, rafting and mountain biking nearby.
              </p>

          </div>


          <div className='py-[2%]'>

              <h1 className='text-4xl font-extrabold pb-4'>Annapurna Region</h1>
              
              <hr className='border-blue-900 w-[20%] pb-6'/>

              <p className='text-2xl'>
                  One of the world’s premier trekking destinations, this spectacular part of Nepal lies in the Central Himalayan region, not far from the lakeside city of Pokhara. You’ll find jaw-dropping mountain scenery at every turn, with some of the country’s highest and most famous peaks found here, including the imposing Annapurna Massif which gives the region its name.

                  There are a wide range of adventures on offer, ranging from gentler 3-4 day treks through the foothills where you can stay with welcoming local communities, right through to hardcore mountaineering, extreme sports and the iconic 230km Annapurna Circuit.

                  With most trailheads easily reached from Pokhara and an excellent trekking infrastructure in place, Annapurna is understandably popular with outdoor-lovers of all abilities. 
              </p>

          </div>


          <div className='py-[2%]'>

              <h1 className='text-4xl font-extrabold pb-4'>Mount Everest</h1>
              
              <hr className='border-blue-900 w-[20%] pb-6'/>

              <p className='text-2xl'>
                  The world’s tallest and most famous mountain is a true icon of Nepal. For many travellers it is simply a must-see, and the feeling of getting up close to this giant is impossible to match. There’s more to region than just Everest, of course, with peaceful foothills and fascinating tribal communities spread across the landscape and into neighbouring Tibet, making any journey to Everest a real adventure. 

                  There are many ways to see the mountain, whether you’re trekking to Everest Base Camp via the ancient Sherpa capital at Namche Bazaar, scaling the peak or taking the scenic flight to see Everest from the sky. Whichever you choose, the experience will stay with you for a lifetime.
              </p>

          </div>


          <div className='py-[2%]'>

              <h1 className='text-4xl font-extrabold pb-4'>Lumbini</h1>
              
              <hr className='border-blue-900 w-[20%] pb-6'/>

              <p className='text-2xl'>
                  Famous as the birthplace of Siddhartha Gautama, the Lord Buddha, Lumbini holds a huge significance for pilgrims and historians alike.

                  For centuries the site was lost to history, but after the discovery of a pillar inscribed by the emperor Ashoka in 1896, Lumbini has been steadily restored to something like its former glory. Centred around the Maya Devi Temple, built on the exact spot of Buddha’s birth, the site is a complex of beautiful temples, monasteries and stupas built by Buddhist nations from around the world.

                  Most visitors to Lumbini come as part of a pilgrimage, but tourists are also welcome to come and soak up the peaceful atmosphere and wonderful architecture of this famous site, whatever their beliefs. 
              </p>

          </div>

        </div>


        {/* Details End */}




        <Footer/>
    
    </>
  )
}

export default TravelGuide