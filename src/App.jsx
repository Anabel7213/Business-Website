import { useState } from "react";

import { PlayCircle } from "lucide-react";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import TextBlock from "./components/TextBlock"
import Gallery from "./components/Carousel";
import Amenities from "./components/Amenities";
import Membership from "./components/Membership";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Login from "./components/modals/login";

export default function App() {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div className="md:m-8 sm:m-4 border">
    <Header setIsOpen={setIsOpen} />
    <Hero />
    <Section id="about" title="About" subtitle="section .01" />
    <TextBlock title="Get ready to win the day" description="Stay in the zone with our curated space and amenities that are there to help you make the most out of your day. Thrive in the environment of entrepreneurs, creative minds, and innovators. We can’t wait to welcome you into The Zone family."/>
    <Gallery />
    <CTA title="No time to drop by? take a virtual tour." action="Let's go!" icon={<PlayCircle />} />
    {isOpen ? (
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    ) : null}
    <Section id="space" title="Space" subtitle="section .02" />
    <TextBlock title="Meticulously designed to inspire your growth" description="At The Zone, we believe in your limitless potential. Our zero-distraction environment is meticulously crafted to keep your focus laser sharp on long-term goals. Discover all your daily essentials within our range of amenities." />
    <Amenities />
    <img src="/cafeteria.png" alt="A photo of the cafeteria space." className="w-full border-b" />
    <Section id="membership" title="Membership" subtitle="section .03" />
    <TextBlock title="Tailored to suit your identity" description="Regardless of whether you are a well-established business, a small startup or somebody trying to turn their side gig into a full time job - we make it affordable and flexible. At The Zone everyone is equally important." />
    <Membership />
    <Section id="community" title="Private Events" subtitle="section .04" />
    <Events />
    <Section id="location" title="Location" subtitle="section .05" />
    <Location />
    <Footer />
    </div>
  )
}