export function MiceAmount({ mice }) {
  return (
    <p className="mice">
      {mice > 1 && <span>{mice}</span>}
      {mice === 1 && ' мышь'}
      {mice > 1 && mice < 4 && ' мыши'}
      {mice > 1 && mice > 4 && ' мышей'} в подарок
    </p>
  );
}
