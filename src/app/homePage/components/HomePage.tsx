import Container from "@/common/components/Container";
import Feed from "./Feed";
import Stories from "./Stories";

const HomePage = () => {
  return (
    <div className="h-screen w-full mx-auto flex justify-center">
      <Container >
        <Stories />
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-lg font-semibold mb-4">Whats happening</h2>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Write something..."
            rows={4}
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