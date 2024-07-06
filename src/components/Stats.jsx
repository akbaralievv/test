const stats = [
  { name: "subscribers", value: "20K+" },
  { name: "successful cases", value: "19,5K" },
  { name: "rating", value: "4.8/5" },
];

function Stats() {
  return (
    <dl className="mb-24 flex justify-center sm:justify-normal gap-8">
      {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col-reverse">
          <dt className="text-base font-regular md:text-sm xl:text-lg font-teko leading-7 text-customColorText">
            {stat.name}
          </dt>
          <dd className="xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-teko font-bold leading-9 tracking-tight text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default Stats;
