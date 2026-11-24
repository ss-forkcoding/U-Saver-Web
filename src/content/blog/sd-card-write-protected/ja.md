---
title: "SDカードの書き込み禁止を解除する方法:ロックのつまみ、Windowsの読み取り専用属性、ポリシーの順に確認"
description: "SDカードの書き込み禁止を解除するには、ロックのつまみ、Windowsのディスクの読み取り専用属性、BitLockerのポリシー、カードの故障の順に原因を絞ります。diskpartで読み取り専用属性を消す手順と、解除の前に写真をコピーする理由を、Apple、Microsoft、SD Associationの案内をもとにまとめました。"
date: 2026-11-25
---

## この記事の要点

SDカードの書き込み禁止は、カードにファイルを保存したり削除したりできない状態です。原因はカードのロックのつまみ、Windowsのディスクの読み取り専用属性、会社のパソコンのBitLockerポリシー、カード自体の故障のどれかであることが多いです。

書き込み禁止の解除は、ロックのつまみから始めます。つまみがロック解除側なのにWindowsで「ディスクは書き込み禁止になっています」と出るなら、`diskpart`で読み取り専用属性を確認します。

書き込み禁止の状態でも、カードは読み取れることが多いです。解除を試す前に、必要な写真を別の記憶装置へ先にコピーします。

「カメラでは使えていたのに、パソコンでは書き込み禁止と出る」「つまみを戻しても変わらない」。SDカードの書き込み禁止を解除したい人からよく出る疑問です。つまみ自体の使い方は[SDカードのロックとは?](/blog/ja/sd-card-lock-switch)にまとめました。この記事では、つまみ以外の原因まで順番に確認する方法を扱います。

## SDカードが書き込み禁止になるのはなぜですか?

原因ごとに解除する場所が違います。下の表で自分の状況を探してください。

| 原因 | こんなときに疑う | 解除する場所 |
| --- | --- | --- |
| カードのロックのつまみ | どの機器でも書き込めない | カード側面のつまみ |
| microSD変換アダプターのつまみ | microSDをSDアダプターに入れて使っている | アダプター側面のつまみ |
| Windowsのディスクの読み取り専用属性 | 特定のWindowsパソコンだけで書き込み禁止 | `diskpart`の`attributes`コマンド |
| BitLockerの書き込み拒否ポリシー | 会社や学校のパソコンだけで書き込み禁止 | パソコンの管理者 |
| ファイルシステムのエラー | 開けるがエラーが出て保存できない | `chkdsk`、ディスクユーティリティのFirst Aid |
| カード自体の故障 | 複数の機器とカードリーダーで同じ症状 | カードメーカー |

この記事では特定のカードやカードリーダーを試しておらず、特定の製品をすすめません。

## ロックのつまみでSDカードの書き込み禁止を解除するには?

[AppleのMac SDカードスロットの案内](https://support.apple.com/en-us/102352)は、「cannot be modified」と表示されたらSDカードがロックされている可能性があると説明しています。Appleが書いている手順です。

1. カードを取り出してから、機器から抜きます。
2. カードのロックのつまみをロック解除側に動かします。
3. カードをもう一度挿します。

つまみの位置はカードによって違うため、Appleはメーカーの案内を見るよう書いています。[SD Associationのよくある質問](https://www.sdcard.org/consumers/faq/)によると、microSDには書き込み禁止スイッチがありません。microSDをSDアダプターに入れて使うなら、アダプターのつまみを確認してください。2つのカードの違いは[micro SDとは?](/blog/ja/microsd-vs-sd)にあります。

## WindowsでSDカードの書き込み禁止をdiskpartで解除するには?

ロックのつまみは解除側なのに、特定のWindowsパソコンだけで書き込み禁止と出るなら、ディスクに読み取り専用属性が付いている可能性があります。[Microsoftのattributes diskの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-disk)は、この属性を表示、設定、解除するコマンドを説明しています。

[Microsoftのdiskpartの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)によると、diskpartの実行には管理者権限が必要です。

1. スタートメニューでコマンドプロンプトを右クリックし、「管理者として実行」を選びます。
2. `diskpart`と入力します。
3. `list disk`と入力してディスクの一覧を見ます。容量でSDカードを探します。
4. `select disk 2`のようにカードの番号を選びます。2は例です。
5. `attributes disk`と入力して今の属性を見ます。読み取り専用の項目を確認します。
6. `attributes disk clear readonly`と入力して読み取り専用属性を消します。
7. `exit`で終了し、カードを安全に取り外してから挿し直します。

番号を間違えると、パソコンの別のディスクの属性を変えてしまいます。[Microsoftのselect diskの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/select-disk)は、再起動後にディスク番号が変わることがあると書いています。毎回`list disk`で容量を確かめてください。

ボリュームにも読み取り専用属性が別にあります。[Microsoftのattributes volumeの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-volume)に沿って、`list volume`でカードのボリュームを探し、`select volume`で選んでから`attributes volume clear readonly`と入力します。

| コマンド | 働き |
| --- | --- |
| `attributes disk` | 選んだディスクの属性を表示します |
| `attributes disk clear readonly` | ディスクの読み取り専用属性を消します |
| `attributes volume` | 選んだボリュームの属性を表示します |
| `attributes volume clear readonly` | ボリュームの読み取り専用属性を消します |

## 会社のパソコンだけでSDカードが書き込み禁止になるのは?

組織のBitLockerポリシーの可能性があります。[MicrosoftのBitLocker設定の説明](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/configure)によると、「BitLockerで保護されていないリムーバブルドライブへの書き込みアクセスを拒否する」ポリシーを有効にすると、BitLockerで保護されていないリムーバブルデータドライブはすべて読み取り専用でマウントされます。

| 状況 | すること |
| --- | --- |
| 自宅のパソコンでは書き込めるが会社のパソコンだけ書き込めない | 会社のIT管理者に問い合わせます |
| 会社のパソコンでBitLockerで暗号化するよう案内が出る | 会社の規定に沿ってIT管理者と相談します |

このポリシーは管理者が決めます。利用者がdiskpartで消せる属性ではありません。会社の規定を回避しないでください。

## 書き込み禁止を解除する前に写真をコピーすべきですか?

コピーします。書き込み禁止の状態でもファイルを読めるなら、今が写真を移す機会です。下の検査やフォーマットはカードの内容を変えたり消したりします。

1. カードの写真とビデオをパソコンや別の記憶装置にコピーします。
2. コピーしたファイルがいくつか開けるか確かめます。
3. そのあとで下の検査やフォーマットに進みます。

カードをパソコンにつなぐ方法は[SDカードをパソコンにつなぐ方法](/blog/ja/sd-card-to-pc)にあります。

## それでもSDカードの書き込み禁止が解除できないときは?

ほかの原因を順に確認します。

1. 別のカードリーダーや別のパソコンに挿してみます。1台だけで書き込めないなら、そのパソコンの属性やポリシーを疑います。
2. ファイルシステムを検査します。Windowsでは[Microsoftのchkdskの説明](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk)に沿って、`chkdsk E: /f`を管理者権限で実行します。Eは例です。Macでは[ディスクユーティリティのFirst Aid](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac)を使います。
3. 写真を移したあと、[SD Associationのフォーマットソフト](https://www.sdcard.org/downloads/formatter/)でフォーマットし直します。手順は[SDカードフォーマッターの使い方](/blog/ja/sd-card-formatter)にあります。
4. 複数の機器で同じ症状が出るなら、カードメーカーに問い合わせます。SD Associationのよくある質問は、SD Associationはカードを作っていないのでメーカーに問い合わせ、交換が必要なら購入店に問い合わせるよう案内しています。

フォーマットが最後まで進まない場合は、[microSDが認識しない・フォーマットできないとき](/blog/ja/sd-card-not-working)で症状別に扱っています。

## iPhoneからSDカードに保存できないときは?

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、iPhoneはデータパーティションが1つで、APFS、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかでフォーマットされた記憶装置を使います。ロックのつまみと一緒に形式も確認してください。

| 確認すること | 見る場所 |
| --- | --- |
| ロックのつまみ | カードやアダプターのつまみ |
| カードの形式 | Appleの一覧にある形式か |
| コピーの手順 | [iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card) |

## iPhoneの写真をUSBメモリに保存するには?

以下のアプリはUSBメモリを前提に説明します。USBメモリの接続条件は[iPhoneのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)に、形式を変える手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## SDカードの書き込み禁止のよくある質問

### SDカードの書き込み禁止はどこで解除しますか?

カード側面のロックのつまみから確認します。つまみが解除側なのにWindowsパソコンだけで書き込めないなら、`diskpart`の`attributes disk clear readonly`で読み取り専用属性を消します。

### ロックのつまみがないmicroSDも書き込み禁止になりますか?

microSDカードには書き込み禁止スイッチがありません。SDアダプターに入れて使うなら、アダプターのつまみを確認してください。つまみ以外に、Windowsの属性、ポリシー、カードの故障も原因になります。

### diskpartのコマンドでカードのデータは消えますか?

`attributes`コマンドは属性を表示して変えるコマンドです。同じdiskpartの`clean`コマンドは、Microsoftの説明によるとディスクのパーティションとボリュームのフォーマットをすべて消します。入力する前にもう一度読んでください。

### 会社のノートパソコンだけでSDカードが書き込み禁止になります。

Microsoftの説明によると、BitLockerのポリシーが有効だと、BitLockerで保護されていないリムーバブルドライブは読み取り専用でマウントされます。会社のIT管理者に問い合わせてください。

### どの方法でもSDカードの書き込み禁止が解除できません。

複数の機器とカードリーダーで同じ症状なら、カード自体を疑います。読み取れるうちに写真を先にコピーし、カードメーカーに問い合わせてください。
