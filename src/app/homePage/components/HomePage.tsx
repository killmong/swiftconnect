import Container from "@/common/components/Container";
import Feed from "./Feed";
import Stories from "@/app/Stories/components/Stories";

const users = [
  {
    id: 1,
    username: "_.naina.__.22",
    profilePicture: "/images/BirdAvatars/Sparrow.jpg",
  },
  { id: 2, username: "leo", profilePicture: "/images/BirdAvatars/Penguin.jpg" },
  {
    id: 3,
    username: ".raven",
    profilePicture: "/images/BirdAvatars/Sparrow(2).jpg",
  },
  {
    id: 4,
    username: "_.ironman",
    profilePicture: "/images/BirdAvatars/BlackBird.jpg",
  },
  {
    id: 5,
    username: "sneha_.spamz",
    profilePicture: "/images/BirdAvatars/CuteGirl.jpg",
  },
  {
    id: 6,
    username: "ezekiel",
    profilePicture: "/images/BirdAvatars/Swift.jpg",
  },
  {
    id: 7,
    username: "imro",
    profilePicture: "/images/BirdAvatars/HappyBird.jpg",
  },
  {
    id: 8,
    username: "mognia",
    profilePicture: "/images/BirdAvatars/AngryEagle.jpg",
  },
  {
    id: 9,
    username: "erwin",
    profilePicture: "/images/BirdAvatars/SmartEagle.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="h-screen bg-slate-900 flex justify-center py-1 px-6">
      <Container>
        <Stories users={users} />
        <div className="bg-gray-200 py-2 px-4 rounded-xl shadow mb-4">
          <textarea
            className="w-full py-2 px-3 border border-gray-300 rounded resize-none"
            placeholder="What's on your mind..."
            rows={1}
          ></textarea>
          <div className="flex justify-end mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Post
            </button>
          </div>
        </div>
        <Feed />
      </Container>
    </div>
  );
};

export default HomePage;
