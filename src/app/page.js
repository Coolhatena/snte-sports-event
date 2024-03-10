import Header from '@/components/Header';
import HotelCard from '@/components/HotelCard';
import Image from "next/image";
import Main from '@/components/Main';
const imgPath = '/img/zyro-snte.png'  
export default function Home() {
  return (
    <main>
      <Image
          src={'/img/zyro-snte.png'}
          alt="SNTE seccion 2"
          layout='responsive'
          width={1300}
          height={200}
        />
      <Main/>
    </main>
  );
}
