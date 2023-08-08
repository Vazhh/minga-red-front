/* eslint-disable react/prop-types */
export default function ProfileAuthor({
  photo,
  name,
  last_name,
  city,
  country,
  date,
}) {
  const formattedDate = formatDate(date);

  function formatDate(dateString) {
    if (!dateString) return ""; // Handle the case when date is not provided

    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="w-340 my-1 p-2 flex justify-between items-center">
      <img
        className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-full"
        src={photo}
        alt={name}
      />
      <div className="w-full px-3 flex flex-col">
        <span className="font-semibold text-gray-800">{`${name} ${
          last_name ? last_name : ""
        }`}</span>
        <span className="font-semibold text-gray-800 flex items-center">
          <img
            className="h-5 w-5 mr-1"
            src="/public/location.png"
            alt="Icono de ubicación 1"
          />
          {`${country}, ${city}`}
        </span>
        <span className="font-semibold text-gray-800 flex items-center">
        <img
            className="h-5 w-5 mr-1"
            src="/public/cake.png"
            alt="Icono de ubicación 1"
          />
          {formattedDate}
        </span>
      </div>
    </div>
  );
}
