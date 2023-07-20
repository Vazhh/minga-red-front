import TextBodyMangaD from '../componets/TextBodyMangaD.jsx'
import ChaptersDetails from '../componets/ChaptersDetail';
import MangaDetails from '../componets/MangasDetail.jsx';


export default function MangaDetail() {
    return (
        <main className="  pb-[20%] bg-[#EBEBEB] p-4 flex flex-col  w-screen h-full" >
         <TextBodyMangaD/>
         <MangaDetails/>
         <ChaptersDetails/>
        </main>

    );
}