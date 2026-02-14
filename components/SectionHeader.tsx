import "../styles/section-header.css";

export default function SectionHeader({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <div className="section-header" id={id}>
      <span className="section-number">{number}</span>
      <span className="section-title">{title}</span>
      <div className="section-line"></div>
    </div>
  );
}
