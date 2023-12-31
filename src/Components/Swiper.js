import React from 'react';
import { Carousel } from '@material-tailwind/react';

const Swiper = () => {
  return (
    <>







            <div className="w-[100%] h-[500px]">


                <Carousel loop >
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="Slide1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="Slide2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="Slide3"
                    className="h-full w-full object-cover"
                  />
                </Carousel>

            </div>










    </>
  )
}

export default Swiper