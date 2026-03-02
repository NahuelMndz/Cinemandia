import { useState } from "react";

function Biography({ biography, name }) {
  const [showMore, setShowMore] = useState(false);

  const text = biography?.trim();

  if (!text) {
    return (
      <p className="">
        No tenemos una biografía de {name}
      </p>
    );
  }

  const MAX_CHARS = 300;
  const isLongText = text.length > MAX_CHARS;

  const visibleText = showMore
    ? text
    : text.slice(0, MAX_CHARS) + (isLongText ? "..." : "");

  return (
    <div className="space-y-3">
      <p>{visibleText}</p>

      {isLongText && (
        <button
          onClick={() => setShowMore(prev => !prev)}
          className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
        >
          {showMore ? "Mostrar menos" : "Mostrar más"}
        </button>
      )}
    </div>
  );
}

export default Biography;
