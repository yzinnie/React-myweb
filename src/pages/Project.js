import { Link } from "react-router-dom";
import Header from "../components/Header";

const Project = () => {
  return (
    <div className="Project">
      <Header />
      <div className="Project-item">
        <div>
          <h3>⛄ Weather API Project</h3>
          <h4>📆 TO-DO List Web</h4>
          <a href="https://yzinnie.github.io/JS-Project-TODO/">
            https://yzinnie.github.io/JS-Project-TODO/
          </a>
          <p>OpenWeatherMap의 API를 사용해 날씨 정보를 알려주는 투두리스트</p>
          <p>구현 기능</p>
          <ul>
            <li>
              Local storage를 활용한 to-do list 입력 및 삭제 기능 / 사용자 이름
              저장
            </li>
            <li>
              OpenWeatherMap에서 받은 현재 사용자의 city, weather 정보 출력
            </li>
            <li>현재 사용자의 시간 출력</li>
            <li>Background image의 랜덤 기능</li>
          </ul>
          <p>사용한 기술스택</p>
          <ul>
            <li>Html, Css, JavaScript</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>🧸 my web</h3>
          <h4>나의 정보, 나만의 web</h4>
          <a href="https://github.com/yzinnie/React-myweb.git">
            https://github.com/yzinnie/React-myweb.git
            <br />
          </a>
          <p>React JS Project - 나의 정보 페이지</p>

          <p>구현 기능</p>
          <ul>
            <li>
              img web 구현
              <Link to={"/img"}> What i like-Trip 🏄🏻‍♀</Link>
            </li>
            <li>화면 상단이동 아이콘 생성 - Window: scrollTo() method</li>
            <li>react-router-dom 사용</li>
          </ul>
          <p>사용한 기술스택</p>
          <ul>
            <li>React</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

      <button
        className="top-btn"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      ></button>
    </div>
  );
};
export default Project;
