import backgroundHome from "/assets/vistaMobile/fondo.png";
import Main from "./layouts/Main";
import Index from "./pages/Index";

function App() {
  let data = [
    {
      name: "Shonen:",
      description:
        "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.",
      character_photo: "/assets/vistaWeb/footer1.png",
      cover_photo: "/assets/vistaWeb/footer2.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col relative items-center ">
        <img
          src={backgroundHome}
          alt=""
          className="md:absolute w-full md:h-[100%] md:object-cover md:object-top"
        />
        <Main>
          <Index data={data} />
        </Main>
      </div>
    </>
  );
}

export default App;
