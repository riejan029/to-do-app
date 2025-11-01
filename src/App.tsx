import { useEffect } from "react";
import Layout from "./components/layout";
import AppRoutes from "./routes/AppRoutes";

const data = [
  "18656387770 - DJ MilleniumxVG | SPAGHETTI | feat. Mija",
  "18656451291 - DJ Millenium | PARO PARO G (BUDOTS) | feat. VG",
  "18656489398 - DJ Millenium | ALPHA KAPANOT (BUDOTS) | feat. VG",
  "18656527189 - DJ Millenium | TALA | feat. VG",
  "18656541338 - DJ Millenium | JEEPNEY LOVE STORY | feat. VG",
];

const handleShit = data.map((a) => {
  const b = a.split(" - ");
  return {
    SongName: b[1],
    ArtistName: "Millineum Music",
    ImageId: "rbxassetid://94908765747371",
    SoundId: `rbxassetid://${b[0]}`,
  };
});

function App() {
  useEffect(() => {
    console.log(handleShit);
  }, []);
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
