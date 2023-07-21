import { useSelector } from 'react-redux';
export default function MangaDetails() {
    const description=useSelector(store=>store.manga.manga.description)
    return (
        <main>
            <div className='text-[#424242] text-lg p-8 text-justify '>
             {description}
             </div>
        </main>
    )
}