export function ScoreBadge({
   style = "", 
   image = "", 
   value = 0, 
   title = "" 
  }) {
  return (
    <div className={`${style} flex gap-4 tracking-wider font-Coiny`}>
      <img className="md:w-6 md:h-6 w-4 h-4" src={image} alt="crown image" />
      <p className="md:text-xl text-sm">{title}</p>
      <p className="md:text-xl text-sm">{value}</p>
    </div>
  );
}
