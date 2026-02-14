# 開発ログ

## 大まかな構造を決定
* 小・中規模程度の構成を目指すため、appディレクトリなどは用意しない予定
* api層を用意し、最初にapiを整形することを優先する
* Api/Service/Adaptor/Controller/Provider/Boundary/useSuccess/UI の構成を目指す
* 最初はApi/Provider/UIを節目として優先する

## API仕様を確認
* HTTP GETにより取得
* 独自のエラーコードを使用している
* 取得件数の上限を考え、少数のデータ取得から始め、必要に応じてページングする
* 出典の表示を行う

## Boundary
* ErrorBoundary に MainErrorFallback を適用
* APIは自作Boundaryで柔軟に対応する

## react-router-dom の不整合
* react との不整合によりエラーが出たが、クリーンインストールで解決

## kokkai.ndl.go.jp のAPIをテスト
* クエリ文字列を大量に書かなくてはならないため、api層でfetcherを作成
* fetchのクエリが冗長なため、fetchそのものを確認する必要がある
* /test で直接fetchの動作を確認
* エンコードをしてクエリーを組み立てるという手間がかかるため、できれば正規化したい
* 将来検索フォームなどで部分的組み立てが必要になる可能性が高いため、結局正規化は無駄と考え中止

## Service層
* API仕様にエラーコードがあるという表記があったが、statusコードに含まれるか分からない<br />したがって、statusコードに依存しない設計にする
* KokkaiAPIの信用度が高いため、矛盾データのバリデーションは現時点では行わない



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