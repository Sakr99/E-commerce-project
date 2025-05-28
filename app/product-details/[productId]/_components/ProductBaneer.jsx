import Image from "next/image";

const ProductBaneer = ({ prodctImage }) => {

  return (
    <div className="">
      <Image
        className="rounded-t-lg md:object-contain shadow-4xl md:w-full md:h-[400px] w-[200px]   "
        src={prodctImage.image}
        alt="product"
        width={400}
        height={350}
      />
    </div>
  );
};

export default ProductBaneer;
