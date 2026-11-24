---
title: "microSDの書き込み禁止を強制フォーマットで解除する前に:スイッチのないカードで原因を探す順番"
description: "microSDの書き込み禁止は、カードにスイッチがないため、SDアダプター、カードリーダー、Windowsの読み取り専用属性、カードの故障の順に原因を絞ります。写真を先にコピーしてから、SD Memory Card Formatterとdiskpartのcleanで強制フォーマットする手順を、SD AssociationとMicrosoftの案内をもとにまとめました。"
date: 2026-11-25
---

## この記事の要点

microSDの書き込み禁止の解除は、通常のSDカードと順番が違います。microSDカードには書き込み禁止スイッチがありません。そのため、カードではなくSDアダプターのつまみ、カードリーダー、Windowsの読み取り専用属性、カード自体の順に確認します。

強制フォーマットを試す前に、読み取れる写真を先にコピーします。強制フォーマットはカードのデータをすべて消します。

フォーマットまで失敗するなら、カードが書き込みを受け付けない状態の可能性があります。その場合はカードメーカーに問い合わせます。

「スマホから抜いてパソコンに挿したら書き込み禁止と出た」「microSDにはつまみがないのに、なぜロックされるの?」。microSDの書き込み禁止を解除したい人からよく出る疑問です。ロックのつまみがある通常のSDカードは[SDカードの書き込み禁止を解除する方法](/blog/ja/sd-card-write-protected)で扱いました。この記事では、microSDで書き込みを止めている場所を探し、最後の手段である強制フォーマットまで進む順番を扱います。

## microSDには書き込み禁止スイッチがありますか?

ありません。[SD Associationのよくある質問](https://www.sdcard.org/consumers/faq/)は、microSDとSDカードの違いは形状、大きさ、ピンの数、書き込み禁止スイッチの有無だけだと説明しています。中の論理と電子回路は同じです。

そのため、microSDが書き込み禁止と出たら、カードの外の部品から疑います。

| 原因 | こんなときに疑う | 確認する場所 |
| --- | --- | --- |
| SDアダプターのつまみ | microSDをSDアダプターに入れてパソコンやカメラに挿している | アダプター側面のつまみ |
| カードリーダー | 1つのリーダーだけで書き込み禁止 | 別のリーダーや別のスロット |
| Windowsの読み取り専用属性 | 特定のWindowsパソコンだけで書き込み禁止 | `diskpart`の`attributes`コマンド |
| 会社のパソコンのBitLockerポリシー | 会社や学校のパソコンだけで書き込み禁止 | パソコンの管理者 |
| カード自体の故障 | 複数の機器とリーダーで同じ症状で、フォーマットも失敗 | カードメーカー |

この記事では特定のカードやカードリーダーを試しておらず、特定の製品をすすめません。2つのカードの違いは[micro SDとは?](/blog/ja/microsd-vs-sd)にあります。

## SDアダプターのせいでmicroSDが書き込み禁止になりますか?

なることがあります。microSDをSDアダプターに入れると、アダプターのつまみがロックのつまみとして働きます。[AppleのMac SDカードスロットの案内](https://support.apple.com/en-us/102352)は、「cannot be modified」と表示されたらカードがロックされている可能性があると説明しています。

1. アダプターを取り出してから、機器から抜きます。
2. アダプター側面のつまみをロック解除側に動かします。
3. アダプターをもう一度挿します。
4. それでも書き込めないなら、別のアダプターやUSBカードリーダーに替えて挿してみます。

つまみの位置と向きは製品によって違うため、Appleはメーカーの案内を見るよう書いています。つまみの使い方は[SDカードのロックとは?](/blog/ja/sd-card-lock-switch)にまとめました。

## microSDの書き込み禁止を解除する前に何をしますか?

読み取れる写真とビデオを先にコピーします。下の属性の変更はデータを消しませんが、強制フォーマットはカードを空にします。

1. カードの写真とビデオをパソコンや別の記憶装置にコピーします。
2. コピーしたファイルがいくつか開けるか確かめます。
3. スマホやカメラなど、カードを使っていた機器にエラーメッセージが出ていたら控えておきます。

SD Associationのよくある質問は、カードが機器で動かないときは、機器の説明書どおりにカードを入れたか確認し、エラーメッセージを控えて説明書を見るよう案内しています。スマホでカードを扱う手順は[スマホのSDカードの使い方](/blog/ja/android-microsd)にあります。

## WindowsでmicroSDの書き込み禁止を解除するには?

アダプターとリーダーを替えても特定のWindowsパソコンだけで書き込めないなら、ディスクの読み取り専用属性を確認します。[Microsoftのattributes diskの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-disk)は、この属性を表示して消すコマンドを説明しています。[Microsoftのdiskpartの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)によると、diskpartの実行には管理者権限が必要です。

1. コマンドプロンプトを管理者として実行します。
2. `diskpart`と入力します。
3. `list disk`でディスクの一覧を見て、容量でmicroSDを探します。
4. `select disk 2`のようにカードの番号を選びます。2は例です。
5. `attributes disk`で読み取り専用の項目を確認します。
6. `attributes disk clear readonly`で読み取り専用属性を消します。
7. `exit`で終了し、カードを安全に取り外してから挿し直します。

[Microsoftのselect diskの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/select-disk)は、再起動後にディスク番号が変わることがあると書いています。毎回`list disk`で容量を確かめてください。会社のパソコンだけで書き込めないならBitLockerのポリシーの可能性があります。[SDカードの書き込み禁止を解除する方法](/blog/ja/sd-card-write-protected)のポリシーの項目を見て、IT管理者に問い合わせてください。

## microSDを強制フォーマットするには?

属性を消しても保存できないなら、写真を移したあとでフォーマットします。軽い方法から使います。

| 順番 | 方法 | データ |
| --- | --- | --- |
| 1 | SD Memory Card Formatterでフォーマット | すべて消える |
| 2 | diskpartの`clean`でパーティション情報を消して作り直す | すべて消える |
| 3 | それでも失敗したらメーカーに問い合わせ | - |

### 1. SD Memory Card Formatterでフォーマットする

[SD Associationのフォーマットソフトのページ](https://www.sdcard.org/downloads/formatter/)は、OSに付いているフォーマットツールよりSD Memory Card Formatterを使うよう強くすすめています。実行にはWindowsでもmacOSでも管理者権限が必要です。BitLocker To Goで暗号化されたカードには対応しないため、先にロックを解除します。クイックフォーマットと上書きフォーマットの違いは[SDカードフォーマッターの使い方](/blog/ja/sd-card-formatter)にあります。

### 2. diskpartのcleanで作り直す

フォーマットソフトが失敗したときに使う最後の手段です。[Microsoftのcleanの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/clean)によると、`clean`は選んだディスクのパーティションとボリュームのフォーマットをすべて消します。ディスク番号を間違えると、パソコンの別のディスクが消えます。

1. 管理者のコマンドプロンプトで`diskpart`と入力します。
2. `list disk`でmicroSDの番号を容量で確かめます。
3. `select disk 2`のようにカードを選びます。2は例です。
4. もう一度`list disk`と入力し、選んだディスクの前にアスタリスク(*)があるか確かめます。[Microsoftのlistの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/list)によると、アスタリスクは選択中の対象を示します。
5. `clean`と入力します。
6. `create partition primary`でパーティションを作り直します。[Microsoftの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/create-partition-primary)によると、サイズを指定しなければ残りの領域をすべて使います。
7. `assign`でドライブ文字を割り当てます。[Microsoftのassignの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/assign)によると、文字を指定しなければ次に空いている文字が割り当てられます。
8. `exit`で終了し、SD Memory Card Formatterでもう一度フォーマットします。

フォーマットもカードに書き込む作業です。上の手順がすべて失敗するなら、カードが書き込みを受け付けない状態の可能性があります。フォーマットが途中で止まる場合は、[microSDが認識しない・フォーマットできないとき](/blog/ja/sd-card-not-working)で症状別に扱っています。

## 強制フォーマットもできないmicroSDはどうしますか?

複数の機器とリーダーで同じ症状なら、カードメーカーに問い合わせます。SD Associationのよくある質問は、SD Associationはカードを作っていないのでメーカーに問い合わせ、交換の手続きが必要なら購入店に問い合わせるよう案内しています。

| 状況 | すること |
| --- | --- |
| 写真がまだ読み取れる | 先に別の記憶装置へコピーします |
| フォーマットソフトと`clean`の両方が失敗 | カードメーカーに問い合わせます |
| 交換が必要 | 購入店に問い合わせます |

## iPhoneでmicroSDを使うには?

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、iPhoneはデータパーティションが1つで、APFS、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかでフォーマットされた記憶装置を使います。強制フォーマットのあとでiPhoneに使うカードなら、形式を確認してください。接続方法は[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)に、フォーマットし直す手順は[マイクロSDカードフォーマット方法](/blog/ja/format-microsd)にあります。

## iPhoneの写真をUSBメモリに保存するには?

以下のアプリはUSBメモリを前提に説明します。USBメモリの接続条件は[iPhoneのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)に、形式を変える手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## microSDの書き込み禁止のよくある質問

### microSDの書き込み禁止スイッチはどこにありますか?

microSDカードには書き込み禁止スイッチがありません。SDアダプターに入れて使うなら、アダプターのつまみを確認してください。

### スマホでは使えるのにパソコンだけで書き込み禁止になります。

アダプターのつまみ、カードリーダー、そのパソコンの読み取り専用属性の順に確認します。会社のパソコンならBitLockerのポリシーの可能性があるので、IT管理者に問い合わせてください。

### 強制フォーマットすると写真は消えますか?

消えます。SD Memory Card Formatterとdiskpartの`clean`はどちらもカードを空にします。読み取れるうちに写真を先にコピーしてください。

### diskpartのattributesコマンドでもデータは消えますか?

`attributes`は属性を表示して変えるコマンドです。データを消すのは`clean`です。入力する前に、選んだディスク番号をもう一度確かめてください。

### 強制フォーマットも失敗したら直す方法はありますか?

複数の機器とリーダーで同じ症状なら、カード自体を疑います。カードメーカーに問い合わせ、交換が必要なら購入店に問い合わせてください。
