import Carousel from "./Carousel"
import TextBodyMain from "./TextBodyMain"

export default function Index({data}) {
  return (
    <main className="lg:relative absolute w-full sm:-mt-[10%] -mt-[8%]  lg:mt-0">
          <TextBodyMain />
          <Carousel
            character_photo={data[0].character_photo}
            cover_photo={data[0].cover_photo}
            name={data[0].name}
            description={data[0].description}
          />
        </main>
  )
}
