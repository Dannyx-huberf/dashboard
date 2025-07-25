
export default function Template({data,img,elipis }) {
const colorMap = {
  Work: "bg-work",
  Play: "bg-play",
  Study: "bg-study",
  Exercise: "bg-exercise",
  Social: "bg-social",
  SelfCare: "bg-self-care"
};
  const title = data[0].title;
  const color = colorMap[title] || "bg-gray-500";
  return (
    <section className={`card rounded-xl overflow-hidden w-full h-fit border`}>
  <div className={`relative ${color} h-[50px]
`}>
        <img
          src={img}
          alt="img"
          className="absolute top-0 right-4 w-[70px] h-[70px] object-contain"
        />
      </div>
  {/* Card content container */}
  <div className="relative z-10 -mt-2.5 px-5 pt-5 lg:pb-13  rounded-xl bg-navy-900 text-white">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col gap-2 lg:mt-4">
        <div className="flex justify-between items-center">
          <h1 className="font-project font-[600] text-[18px]">{item.title}</h1>
          <span className="block h-[25px] w-[25px] cursor-pointer">{elipis}</span>
        </div>
        <div className="flex justify-between items-center mb-3 lg:flex-col lg:items-start">
          <h1 className="text-[36px]">{item.timeframes.current}hrs</h1>
          <p className="text-[15px] text-gray-400">Last Week - {item.timeframes.previous}hrs</p>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}