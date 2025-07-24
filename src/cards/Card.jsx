import { Card, CardBody, CardFooter, Image } from "@heroui/react";

const CardProject = () => {
  const list = [
    {
      title: "YouTube",
      img: "/src/assets/photo_2025-07-23_15-45-31.jpg",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
    },
    {
      title: "MAOU",
      img: "/src/assets/image.png",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
    },
    {
      title: "MAOU",
      img: "/src/assets/image.png",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
    },
    {
      title: "MAOU",
      img: "/src/assets/image.png",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
    },
    {
      title: "MAOU",
      img: "/src/assets/image.png",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
    },
    {
      title: "MAOU",
      img: "/src/assets/image.png",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
    },
  ];

  return (
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
          className="border rounded-xl border-transparent transition duration-500 ease-in-out 
    hover:scale-105 hover:shadow-2xl hover:shadow-blue-800/50"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-[#EBE5C2]">
            <b>{item.title}</b>
            <a
              href={item.link}
              target="_blank"
              className="text-sm border-[#504B38] rounded-lg bg-[#504B38] text-[#F8F3D9] px-5 py-1 text-center hover:bg-[#B9B28A] hover:text-[#504B38] transition duration-700 ease-in-out"
            >
              View
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardProject;
