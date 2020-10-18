import { h } from "preact";
import { useConfig } from "../../configs";
import Search from "./search";
import CharacterList from "./characterList";
import Help from "./help";
import WeaponList from "./weaponList";
import { useEffect } from "preact/hooks";
import { forceCheck } from "react-lazyload";

const Customize = () => {
  const [search, setSearch] = useConfig("customizeQuery");

  useEffect(forceCheck, [search]);

  return (
    <div className="container mx-auto p-4">
      <Search value={search} setValue={setSearch} />

      <div className="mt-2">
        <Help />
      </div>

      <div className="mt-8 space-y-8">
        <CharacterList search={search} />
        <WeaponList search={search} />
      </div>
    </div>
  );
};

export default Customize;
