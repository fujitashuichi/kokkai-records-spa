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

## Provider層
* ロード状態を保持する
* バリデーション済みのデータを扱う
* 検索オプションを付けてfetchをトリガーする機能を配布する

## Adaptor層
* ServiceとProviderを仲介する
* okデータをバリデーションして完全なデータとして返す

## Controller層作成案を廃止
* Adaptorまでで整形・APIバリデーションが完結したため、Controllerは必須ではない
* 今回のAPIは、単純なデータ取得以外は行わないため、ロジック処理はほとんど必要がない

## Provider層の分割
* ここまで、MeetingsとSpeechesを一つのProviderで扱っていたが、型のネストやProviderの肥大化が顕在化したため、Providerを分割する

## 節目での改修
* Providerを分けるときに、横のディレクトリ分割が限界を迎えていると確信した
* **機能単位ごとの分割**をしたことがないが、思い切って手を入れることにした
* それに伴って、命名が冗長になりやすいこのプロダクトにおいて、**バレルエクスポートを採用**することにした

## 改修完了
* KokkaiAPI関連をディレクトリにまとめて整理
* バレルエクスポートで明瞭な依存関係を意識
* Providerを分割し、肥大化を抑制

## 動作確認
* Provider/Boundaryが正しく動作しており、正常なエラーが発生する
* 全体が停止するような異常はなく、部分バウンダリーが正常
* APIの型チェックに間違いあり

## Validatorの改修
* 型不整合が一か所残っており、InvalidDataエラーが発生している
* ApiResponse型などを検討する
* 型は改善できたが、APIのどのテーブルが不整合なのか判別できない
* → サンプルデータを保存して考える

## APIデータ型を修正
* APIのサンプルデータより: 仕様に明記されていないがnullableのフィールドや、stringと予想されるが実際はnumberになっているフィールドが存在
* ZodSchemaを修正する

## 検索機能追加
* 検索オプションの型を作成
* 検索URLの生成器を作成


<style>
  .fixed-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
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