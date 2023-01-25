export function BottomText({
  selected,
  setSelected,
  available,
  meat,
  description,
}) {
  return (
    <>
      {!selected && available && (
        <p className="bottom-text">
          Чего сидишь? Порадуй котэ,{' '}
          <button type="button" onClick={() => setSelected('card--selected')}>
            купи.
          </button>
        </p>
      )}
      {!available && (
        <p className="bottom-text--unavailable">
          Печалька, с {meat} закончился.
        </p>
      )}
      {selected && <p className="bottom-text">{description}</p>}
    </>
  );
}
