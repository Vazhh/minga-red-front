/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function SwitchAuthor({ mangas }) {
  return (
    <article className="w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-stretch">
        {mangas.map((element) => (
          <div
            className="w-[160px] sm:w-[220px] m-2 flex flex-col items-center"
            key={element._id}
          >
            <img
              className="w-full h-[220px] object-cover rounded-lg"
              src={element.cover_photo}
              alt={element.title}
            />
            <span className="text-[18px] text-[#424242] text-center">
              {element.title}
            </span>
          </div>
        ))}
      </section>
    </article>
  );
}
