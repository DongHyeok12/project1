// 필요한 모듈 임포트
import axios from "axios";
import React, { useEffect, useState } from "react";

// 데이터 타입 정의
interface Post {
  id: number;
  title: string;
}

const HomePage: React.FC = () => {
  const [data, setData] = useState<Post[]>([]); // 초기 데이터 상태 정의

  useEffect(() => {
    // 데이터 가져오기
    axios
      .get<Post[]>("http://localhost:3306/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
