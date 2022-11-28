function MeduimCard({ name, imageUrl }) {
    return (
      <div className="hover:cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-80 w-80">
          <img src={imageUrl} alt={name} className="rounded-xl" />
        </div>        
          <h3 className="text-2xl mt-3">{name}</h3>
      </div>
    );
  }
  
  export default MeduimCard;
  