# Mongo-Nest

## メリット

- Entity にメソッドの実装はできそうなので、ビジネスロジックを Entity にまとめることが可能そう

## デメリット

- entity のプロパティを private にできない
- MongoDB の最新バージョン 4 系をサポートしていない(https://stackoverflow.com/questions/69291211/typeorm-error-with-mongodb-find-does-not-work-error-typeerror-cannot-read)

## 実装の方向性と注意点

1. DDD 採用の場合
   - Entity にロジックを記述することはできるが、プロパティを private にできないため、ロジックの漏れ出しを人間が行う必要がある
   - DB のドキュメントと Entity のフィールドを揃える必要がある
     - 一般にドキュメントのフィールドにはキャメルケースを使わないことを推奨されている（DB によっては大文字、小文字を区別しない DB があるため）
2. DDD 不採用
   - ロジックを基本的に Service 層に記述していく
     - ロジックの重複が生まれる
