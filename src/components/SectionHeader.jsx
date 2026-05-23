export default function SectionHeader({ label, title, goldPart }) {
  return (
    <div className="mb-10">
      <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">{label}</div>
      <h2 className="font-bebas text-5xl md:text-6xl text-white leading-none tracking-wide">
        {title} <span className="text-gold">{goldPart}</span>
      </h2>
      <div className="h-0.5 w-14 bg-gradient-to-r from-gold to-transparent mt-3" />
    </div>
  );
}
