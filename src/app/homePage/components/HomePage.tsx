import HomeContainer from "@/common/components/Container";
import Feed from "./Feed";
import Stories from "@/app/Stories/components/Stories";
import Post from "./Post";
const users = [
  {
    id: 1,
    username: "_.naina22",
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
    username: "sneha",
    profilePicture: "/images/BirdAvatars/CuteGirl.jpg",
  },
  {
    id: 6,
    username: "ezekiel",
    profilePicture: "/images/BirdAvatars/Swift.jpg",
  }
];

const HomePage = () => {
  return (
    <div className="h-screen background md:justify-center   flex  py-1 px-6">
      <HomeContainer>
        <div className="bg-gray-200 rounded-xl shadow mb-4">
          <Stories users={users}/>
          </div>
            <Post/>
        
        <Feed />
      </HomeContainer>
    </div>
  );
};

export default HomePage;
