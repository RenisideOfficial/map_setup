import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <NewProducts />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Map />
      </div>
    </main>
  );
}
