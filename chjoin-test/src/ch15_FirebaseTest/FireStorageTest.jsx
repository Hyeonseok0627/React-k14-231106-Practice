import React, { useState } from "react";
// 스토리지 공식 문서 , 샘플 코드 그대로 복사했고
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";
// const storage = getStorage();
// storage: 파이어베이스 스토리지에 접근하기 위한 도구, 포인터, 인스턴스.
// 스토리지 저장소에 , 특정 경로를 만들기.
// reactStorage/

// 파일 선택하는 input , 보여주기 등.
//images/* : 이미지 전체 선택
// async() : 비동기화
// reactStorage/ : 해당폴더 하위경로로 지정
const FireStorageTest = () => {
  const [uploadFile, setUploadFile] = useState();
  const onFileChange = (event) => {
    const files = event.target.files;
    const thisFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const resultData = finishedEvent.currentTarget.result;
      setUploadFile(resultData);
    };
    reader.readAsDataURL(thisFile);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const storageRef = ref(storage, "reactStorage/");
    // 'file' comes from the Blob or File API

    uploadBytes(storageRef, uploadFile).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" accept="images/*" onChange={onFileChange} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default FireStorageTest;
