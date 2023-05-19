import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";
import styled from "styled-components";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  const [playList, setPlayList] = useState(PlayListMock.playlist);

  const [title, setTitle] = useState("");
  const [signer, setSigner] = useState("");

  const onAdd = () => {
    setPlayList([...playList, {title, signer}]);
    setTitle("");
    setSigner("");
  }

  const onDelete = (deleteIndex) => {
    const _playList = playList.filter((_, index) => index !== deleteIndex);
    setPlayList(_playList);
  }

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((music, index) => (<Li key={index}><h3>{music.title}</h3><p>{music.signer}</p><button onClick={()=>onDelete(index)}>삭제</button></Li>))}
      </ul>
      <div>
        <p>
          곡명 : <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          가수/작곡 : <input name="signer" value={signer} onChange={(e) => setSigner(e.target.value)} />
        </p>
        <p>
          <button onClick={onAdd}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;

const Li = styled.li`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
`