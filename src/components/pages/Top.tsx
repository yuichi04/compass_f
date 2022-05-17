import React from "react";
import MuiContaier from "../layouts/MuiContainer";

const Top = () => {
  return (
    <div>
      <MuiContaier maxWidth="md">
        <p>
          「COMPASS」は説明が苦手な人に向けた、
          <br />
          説明上手になるための知識とトレーニングの場を提供するサービスです。
        </p>
        <p>
          学校や職場など説明が必要とされる場面は多くありますが、それに対して苦手意識がある方も多いと思います。
          原因として「相手に伝わりやすい説明方法を知らない」「説明方法は知っているけど上手く活用できない」などが考えらますが、これらは説明に関する知識を学び、それを繰り返し使うことで解決できます。
          その解決をサポートするのが「COMPASS」の役目です。
        </p>
      </MuiContaier>
    </div>
  );
};

export default Top;
