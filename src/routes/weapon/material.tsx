import { Weapon } from "../../db/weapons";
import { WeaponMaterial } from "../../db/weaponMaterials";
import { useConfig } from "../../configs";
import { useMemo } from "preact/hooks";
import DropLabel from "../../dropLabel";
import Checkbox from "../../checkbox";
import { arrayToggle } from "../../utils";
import { h } from "preact";
import { memo } from "preact/compat";

const MaterialDisplay = ({
  weapon,
  material
}: {
  weapon: Weapon;
  material: WeaponMaterial;
}) => {
  const [list, setList] = useConfig("weapons");
  const exists = useMemo(() => list.includes(weapon.name), [list, weapon]);

  return (
    <div className="py-4 space-y-4 text-sm flex flex-col">
      <a href={material.wiki}>
        <div className="space-x-2 flex flex-row">
          <img
            alt={material.name}
            src={`/assets/game/${material.item}.png`}
            className="w-12 h-12"
          />
          <div className="flex flex-col justify-center">
            <div className="text-lg">{material.name}</div>
            <div className="text-xs text-gray-600">{material.type}</div>
          </div>
        </div>
      </a>

      <DropLabel item={material} />

      <Checkbox
        value={exists}
        setValue={value => {
          setList(list => arrayToggle(list, weapon.name, value));
        }}
      >
        <div>Show on schedule</div>

        <div className="text-xs text-gray-600">
          Scheduled domains will appear on the days they are available.
        </div>
      </Checkbox>
    </div>
  );
};

export default memo(MaterialDisplay);
