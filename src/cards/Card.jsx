import { Card, CardBody, CardFooter, Image } from "@heroui/react";

const CardProject = () => {
  const list = [
    {
      title: "YouTube",
      img: "/src/assets/photo_2025-07-23_15-45-31.jpg",
      link: "https://mv-youtube.netlify.app/",
      git: "https://github.com/maxmutov-nuriddin?tab=repositories",
    },
    {
      title: "MAOU",
      img: "/src/assets/image.png",
      link: "https://marketing-association-of-uzbekistan.netlify.app/",
      git: "https://github.com/maxmutov-nuriddin/maou-website",
    },
    {
      title: "Turkish Dishes",
      img: "/src/assets/dishes.jpg",
      link: "https://mv-eat-turkish-site.netlify.app/",
      git: "https://github.com/maxmutov-nuriddin?tab=repositories",
    },
    {
      title: "Product Site",
      img: "/src/assets/product.jpg",
      link: "https://mv-product-site.netlify.app/",
      git: "https://github.com/maxmutov-nuriddin?tab=repositories",
    },
    {
      title: "logoipsum",
      img: "/src/assets/logoipsum.jpg",
      link: "https://logo-ipsum-site.netlify.app/",
      git: "https://github.com/maxmutov-nuriddin?tab=repositories",
    },
    {
      title: "Coffee Roasters",
      img: "/src/assets/cofferoasters.jpg",
      link: "https://mv-coffe-site.netlify.app/",
      git: "https://github.com/maxmutov-nuriddin?tab=repositories",
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
    hover:scale-105 hover:shadow-2xl hover:shadow-[#504B38] "
        >
          <CardBody className="overflow-visible p-0 ">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px] transition duration-500 ease-in-out 
    hover:scale-105 hover:shadow-2xl hover:shadow-[#504B38]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-[#EBE5C2]">
            <b>{item.title}</b>
            <div className="flex gap-2">
              <a
                href={item.git}
                target="_blank"
                className="text-sm border-[#504B38] rounded-lg bg-[#504B38] text-[#F8F3D9] px-5 py-1 text-center hover:bg-[#B9B28A] hover:text-[#504B38] transition duration-700 ease-in-out"
              >
                GitHub
              </a>
              <a
                href={item.link}
                target="_blank"
                className="text-sm border-[#504B38] rounded-lg bg-[#504B38] text-[#F8F3D9] px-5 py-1 text-center hover:bg-[#B9B28A] hover:text-[#504B38] transition duration-700 ease-in-out"
              >
                View
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardProject;
