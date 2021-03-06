import LazyLoad from "react-lazyload";
import { h } from "preact";
import { memo } from "preact/compat";

const Item = ({ name, onClick }: { name: string; onClick?: () => void }) => {
  return (
    <div className="inline-block">
      <LazyLoad overflow>
        <img
          alt={name}
          src={`/assets/game/${name}.png`}
          className="w-8 h-8 object-contain cursor-pointer pointer-events-auto"
          onClick={onClick}
        />
      </LazyLoad>
    </div>
  );
};

export default memo(Item);
