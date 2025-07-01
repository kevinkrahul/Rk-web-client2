'use client'

import { 
  ChefHat,
  Refrigerator, 
  Flame,
  Droplets,
  Wind,
  ShoppingCart,
  Coffee,
  Utensils,
  Scale,
  Soup,
  Cookie,
  Pizza,
  Beef
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Kitchen equipment icons with movement effects */}
      <div className="absolute inset-0">
        {/* Floating and rotating equipment icons */}
        {/* <div className="absolute top-12 left-16 text-orange-500 opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <ChefHat size={32} />
        </div>
        <div className="absolute top-20 left-48 text-yellow-400 opacity-25 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Flame size={28} className="animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute top-8 left-80 text-orange-600 opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Refrigerator size={36} />
        </div>
        <div className="absolute top-24 left-[28rem] text-yellow-500 opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Droplets size={30} className="animate-ping" style={{ animationDuration: '6s' }} />
        </div>
        <div className="absolute top-16 left-[36rem] text-orange-500 opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <Wind size={34} />
        </div>
        <div className="absolute top-28 left-[52rem] text-yellow-400 opacity-30 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <ShoppingCart size={28} className="animate-spin" style={{ animationDuration: '10s' }} />
        </div>
        <div className="absolute top-8 right-48 text-orange-600 opacity-20 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3.5s' }}>
          <Coffee size={34} />
        </div>
        <div className="absolute top-16 right-8 text-yellow-500 opacity-25 animate-pulse" style={{ animationDelay: '3.5s' }}>
          <Utensils size={32} className="animate-spin" style={{ animationDuration: '7s' }} />
        </div> */}
        
        {/* Second row with different animations */}
        {/* <div className="absolute top-40 left-32 text-orange-500 opacity-25 animate-pulse" style={{ animationDelay: '4s' }}>
          <Scale size={34} className="animate-bounce" style={{ animationDuration: '4s' }} />
        </div>
        <div className="absolute top-44 left-96 text-yellow-400 opacity-30 animate-bounce" style={{ animationDelay: '4.5s', animationDuration: '6s' }}>
          <Soup size={32} />
        </div>
        <div className="absolute top-48 left-[40rem] text-orange-600 opacity-20 animate-pulse" style={{ animationDelay: '5s' }}>
          <Cookie size={34} className="animate-spin" style={{ animationDuration: '9s' }} />
        </div>
        <div className="absolute top-40 right-80 text-yellow-500 opacity-25 animate-bounce" style={{ animationDelay: '5.5s', animationDuration: '4.5s' }}>
          <Pizza size={32} />
        </div>
        <div className="absolute top-44 right-32 text-orange-500 opacity-30 animate-pulse" style={{ animationDelay: '6s' }}>
          <Beef size={34} className="animate-ping" style={{ animationDuration: '8s' }} />
        </div> */}

        {/* Third row - center area with floating effects */}
        {/* <div className="absolute top-72 left-44 text-yellow-400 opacity-20 animate-bounce" style={{ animationDelay: '6.5s', animationDuration: '5s' }}>
          <Refrigerator size={32} />
        </div>
        <div className="absolute top-76 left-[26rem] text-orange-600 opacity-25 animate-pulse" style={{ animationDelay: '7s' }}>
          <Wind size={30} className="animate-spin" style={{ animationDuration: '12s' }} />
        </div>
        <div className="absolute top-80 left-[42rem] text-yellow-500 opacity-30 animate-bounce" style={{ animationDelay: '7.5s', animationDuration: '3s' }}>
          <ShoppingCart size={26} />
        </div>
        <div className="absolute top-68 left-[50rem] text-orange-500 opacity-20 animate-pulse" style={{ animationDelay: '8s' }}>
          <Coffee size={32} className="animate-ping" style={{ animationDuration: '7s' }} />
        </div>
        <div className="absolute top-72 right-72 text-yellow-400 opacity-25 animate-bounce" style={{ animationDelay: '8.5s', animationDuration: '4s' }}>
          <Utensils size={28} />
        </div> */}

        {/* Fourth row with slower animations */}
        {/* <div className="absolute top-104 left-36 text-orange-600 opacity-30 animate-pulse" style={{ animationDelay: '9s' }}>
          <Scale size={28} className="animate-spin" style={{ animationDuration: '15s' }} />
        </div>
        <div className="absolute top-96 left-[32rem] text-yellow-500 opacity-20 animate-bounce" style={{ animationDelay: '9.5s', animationDuration: '6s' }}>
          <Soup size={34} />
        </div>
        <div className="absolute top-112 left-[40rem] text-orange-500 opacity-25 animate-pulse" style={{ animationDelay: '10s' }}>
          <Cookie size={28} className="animate-ping" style={{ animationDuration: '10s' }} />
        </div>
        <div className="absolute top-100 left-[48rem] text-yellow-400 opacity-30 animate-bounce" style={{ animationDelay: '10.5s', animationDuration: '5s' }}>
          <Pizza size={30} />
        </div>
        <div className="absolute top-104 right-84 text-orange-600 opacity-20 animate-pulse" style={{ animationDelay: '11s' }}>
          <Beef size={32} className="animate-spin" style={{ animationDuration: '8s' }} />
        </div> */}

        {/* Fifth row with mixed effects */}
        {/* <div className="absolute bottom-28 left-52 text-yellow-500 opacity-25 animate-bounce" style={{ animationDelay: '11.5s', animationDuration: '4s' }}>
          <Wind size={26} />
        </div>
        <div className="absolute top-140 left-[28rem] text-orange-500 opacity-30 animate-pulse" style={{ animationDelay: '12s' }}>
          <ShoppingCart size={34} className="animate-ping" style={{ animationDuration: '6s' }} />
        </div>
        <div className="absolute top-128 left-[36rem] text-yellow-400 opacity-20 animate-bounce" style={{ animationDelay: '12.5s', animationDuration: '7s' }}>
          <Coffee size={28} />
        </div>
        <div className="absolute top-144 left-[44rem] text-orange-600 opacity-25 animate-pulse" style={{ animationDelay: '13s' }}>
          <Utensils size={32} className="animate-spin" style={{ animationDuration: '11s' }} />
        </div> */}

        {/* Bottom row with gentle movements */}
        {/* <div className="absolute bottom-40 left-48 text-yellow-500 opacity-30 animate-bounce" style={{ animationDelay: '13.5s', animationDuration: '5s' }}>
          <Scale size={26} />
        </div>
        <div className="absolute bottom-28 left-80 text-orange-500 opacity-20 animate-pulse" style={{ animationDelay: '14s' }}>
          <Soup size={30} className="animate-ping" style={{ animationDuration: '9s' }} />
        </div>
        <div className="absolute bottom-44 left-[36rem] text-yellow-400 opacity-25 animate-bounce" style={{ animationDelay: '14.5s', animationDuration: '4s' }}>
          <Cookie size={28} />
        </div>
        <div className="absolute bottom-32 left-[44rem] text-orange-600 opacity-30 animate-pulse" style={{ animationDelay: '15s' }}>
          <Pizza size={32} className="animate-spin" style={{ animationDuration: '13s' }} />
        </div>
        <div className="absolute bottom-36 right-48 text-yellow-500 opacity-20 animate-bounce" style={{ animationDelay: '15.5s', animationDuration: '6s' }}>
          <Beef size={34} />
        </div> */}

        {/* Additional floating elements for depth */}
        {/* <div className="absolute top-56 left-[22rem] text-orange-500 opacity-15 animate-pulse" style={{ animationDelay: '16s' }}>
          <ChefHat size={24} className="animate-bounce" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute top-88 left-[46rem] text-yellow-400 opacity-20 animate-bounce" style={{ animationDelay: '16.5s', animationDuration: '3s' }}>
          <Flame size={26} />
        </div>
        <div className="absolute top-116 left-[18rem] text-orange-600 opacity-25 animate-pulse" style={{ animationDelay: '17s' }}>
          <Refrigerator size={28} className="animate-ping" style={{ animationDuration: '7s' }} />
        </div>
        <div className="absolute bottom-60 left-[38rem] text-yellow-500 opacity-15 animate-bounce" style={{ animationDelay: '17.5s', animationDuration: '5s' }}>
          <Droplets size={24} />
        </div>
        <div className="absolute bottom-88 right-[20rem] text-orange-500 opacity-20 animate-pulse" style={{ animationDelay: '18s' }}>
          <Wind size={26} className="animate-spin" style={{ animationDuration: '14s' }} />
        </div> */}
      </div>
    </div>
  );
}