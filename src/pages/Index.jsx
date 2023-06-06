import Carousel from "../componets/Carousel"
import TextBodyMain from "../componets/TextBodyMain"

export default function Index({data}) {
  return (
    <main className="lg:relative absolute w-full ">
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
