# 開発ログ

## 大まかな構造を決定
* 小・中規模程度の構成を目指すため、appディレクトリなどは用意しない予定
* api層を用意し、最初にapiを整形することを優先する
* Api/Service/Adaptor/Controller/Provider/Boundary/useSuccess/UI の構成を目指す
* 最初はApi/Provider/UIを節目として優先する


<style>
  .fixed-button {
    position: fixed;
    bottom: 20px;  /* 下からの位置 */
    right: 20px;   /* 右からの位置 */
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    z-index: 1000;
  }
</style>

<a href="../README.md" class="fixed-button">← READMEへ</a>