import user1 from "../assets/images/фото.png";
import user2 from "../assets/images/фото (1).png";
import user3 from "../assets/images/фото (2).png";
import user4 from "../assets/images/фото (3).png";

const feedbacks = [
  {
    user: user1,
    name: "Lorenzo",
    handle: "@lorenzoo",
    feedback: "Amazing Telegram bot! Provides real-time crypto prices and news",
  },
  {
    user: user2,
    name: "Adalina",
    handle: "@ada",
    feedback: "Must-have bot for crypto traders. Accurate signals and analysis",
  },
  {
    user: user3,
    name: "Alexander",
    handle: "@alex_x",
    feedback: "Superb cryptocurrency bot! Quick updates and reliable data",
  },
  {
    user: user4,
    name: "Rushana",
    handle: "@Hana",
    feedback:
      "Efficient and user-friendly bot. Simplifies crypto trading tasks",
  },
];

function UserFeedbacks() {
  return (
    <div className="flex flex-col gap-6 pt-10">
      {feedbacks.map(({ user, name, handle, feedback }, index) => (
        <div
          key={name}
          className={`w-[288px] px-5 py-4 rounded-[20px] bg-custom-dark-grey backdrop-blur-30px ${
            index % 2 !== 0 ? "ml-[-100px]" : ""
          }`}
        >
          <div className="mb-4 flex items-center gap-5">
            <img src={user} alt={name} className="w-[48px] rounded" />
            <div className="flex flex-col gap-0.5">
              <p className="text-white text-lg font-teko font-semibold">
                {name}
              </p>
              <span className="text-customColorText text-base font-teko font-medium">
                {handle}
              </span>
            </div>
          </div>
          <p className="font-teko text-white text-lg">{feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default UserFeedbacks;
