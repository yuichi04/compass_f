import React, { useState } from "react";

const SlideContentList = () => {
  const [chapter1Contents, setChapter1Contents] = useState([
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "自分主導の説明と相手主導の説明",
      sentence: (
        <>ようこそ、COMPASSへ。 早速ですが、これからあなたにはカスタマーサービスのオペレーターになってもらいます。</>
      ),
      order: 0,
      className: "",
    },
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "大きい情報から小さい情報の順で話す",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 1,
      className: "",
    },
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "「大きい情報から小さい情報の順で話す」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 2,
      className: "",
    },
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "「大きい情報から小さい情報の順で話す」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 3,
      className: "",
    },
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "「大きい情報から小さい情報の順で話す」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 4,
      className: "",
    },
  ]);
  return { chapter1Contents, setChapter1Contents };
};

export default SlideContentList;
