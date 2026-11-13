---
title: "iPhoneの写真・動画を外付けSSDに直接移す方法:パソコンなしの手順とProRes直接録画"
description: "iPhoneから外付けSSDへ直接、写真と動画を移す手順をまとめました。写真アプリでの書き出し、大きな動画の形式の条件、ProResを外付けSSDに直接録画する条件をAppleの案内をもとに確認できます。"
date: 2026-11-14
---

## この記事の要点

iPhoneの写真と動画を外付けSSDに直接移す方法は2つあります。撮影済みの写真と動画は、写真アプリの「未編集のオリジナルを書き出す」でSSDに保存します。対応モデルなら、ProResの動画を最初からSSDに直接録画できます。

どちらもパソコンは要りません。SSDはデータパーティションが1つで、Appleの一覧にある形式である必要があります。

ProResをSSDに直接録画するには、iPhone 15 Pro以降のProモデル、exFAT形式、毎秒220MB以上の書き込み速度が必要です。

「動画が大きすぎて、iPhoneのストレージがすぐいっぱいになる」「SSDに移したら、iPhoneから消してもいい?」。動画をたくさん撮る人がSSDを探す理由です。この記事では、写真と動画をSSDに移す手順、大きな動画でつまずくところ、移したあとにiPhoneの容量を空ける手順をまとめます。

## iPhoneから外付けSSDに直接移す方法は?

撮ったあとに移すか、撮るときからSSDに保存するかで方法が分かれます。

| 方法 | 対象 | パソコン | 出典 |
| --- | --- | --- | --- |
| 写真アプリでオリジナルを書き出す | 撮影済みの写真、動画 | 要りません | [AppleのiCloud写真のダウンロードの案内](https://support.apple.com/en-us/111762) |
| ProResをSSDに直接録画する | これから撮るProRes動画 | 要りません | [AppleのProResの案内](https://support.apple.com/en-us/109041) |
| Macのイメージキャプチャで読み込んでからSSDにコピーする | 撮影済みの写真、動画 | Macが必要です | [AppleのProResの案内](https://support.apple.com/en-us/109041) |

この記事では、パソコンなしで使える前の2つを扱います。写真のほかに連絡先やファイルもSSDに保存するなら、[iPhoneバックアップを外付けSSDに取る方法](/blog/ja/backup-iphone-to-ssd)をご覧ください。

## 外付けSSDに移す前に確認することは?

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、外部ストレージはデータパーティションが1つである必要があります。形式はAPFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかです。

| 確認すること | 基準 | 動画で変わる点 |
| --- | --- | --- |
| 形式 | Appleの一覧にある形式 | FAT32は1ファイルが4GiBを超えられません |
| パーティション | データパーティションが1つ | 同じです |
| 接続 | iPhoneの端子に合うケーブルかアダプタ | ProResの直接録画にはUSB-C接続が必要です |
| 空き容量 | 移す写真と動画より大きいこと | ProResのファイルはHEVCの最大30倍の大きさです |

FAT32の4GiBの制限は[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。ProResのファイルサイズは[AppleのProResの案内](https://support.apple.com/en-us/109041)によるものです。長い動画を移すSSDはexFATで準備してください。手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)に、ケーブルと電源の条件は[iPhone 外付けSSDの使い方](/blog/ja/iphone-external-ssd-connect)にあります。

## iPhoneの写真・動画を外付けSSDに直接移す手順

[AppleのiCloud写真のダウンロードの案内](https://support.apple.com/en-us/111762)に沿った手順です。

1. SSDをiPhoneにつなぎ、ファイルアプリの「ブラウズ」にSSDの名前が出るか確認します。
2. 写真アプリで「ライブラリ」を開きます。
3. 「選択」をタップし、移す写真と動画を選びます。
4. 共有ボタンをタップし、「未編集のオリジナルを書き出す」をタップします。
5. ファイルの画面で戻る矢印をタップし、「場所」の下のSSDを選びます。
6. 「保存」をタップし、終わるまでSSDを抜かないでください。

iCloud写真を使っている場合、オリジナルのダウンロードにはWi-Fiが必要です。「未編集のオリジナルを書き出す」は編集前のオリジナルを保存します。編集した結果が必要な写真は、保存後に別に確認してください。写真が多いなら月や年ごとに分けて移すと、途中で止まったときにどこまで終わったか探しやすくなります。USBメモリに移す手順は[iPhoneの写真をUSBメモリに移す方法](/blog/ja/iphone-photos-to-usb)と同じです。

## ProResの動画を外付けSSDに直接録画できますか?

対応モデルならできます。[AppleのProResの案内](https://support.apple.com/en-us/109041)によると、iPhone 15 Pro、16 Pro、17 Pro、18 ProのモデルはUSB-Cでつないだ外部ストレージにProResを直接録画できます。iPhone 13 Proと14 ProのモデルはProResを内蔵ストレージに録画します。

| 録画の条件 | 対応モデル | SSDの条件 |
| --- | --- | --- |
| 4K 60fps ProRes | iPhone 15 Pro、16 Pro、17 Pro、18 Proのモデル | 書き込み速度毎秒220MB以上、最大消費電力4.5W |
| 4K 120fps ProRes | iPhone 16 Pro、17 Pro、18 Proのモデル | 書き込み速度毎秒440MB以上、最大消費電力4.5W。録画セッションのたびに先にフォーマットし直します |
| 共通 | 上記のモデル | exFAT形式 |

遅いSSDをつなぐと、録画速度が遅いというメッセージが出ることがあります。[AppleのProRes録画の案内](https://support.apple.com/guide/iphone/record-prores-videos-iphde02c478d/ios)によると、128GBのiPhone 15 Proと16 Proのモデルは、内蔵ストレージには1080p 30fpsでしかProResを録画できません。このモデルで4KのProResを撮るには、条件に合うSSDが必要です。

ProResをオンにする手順は次のとおりです。出典は[AppleのProResの案内](https://support.apple.com/en-us/109041)です。

1. 設定アプリで「カメラ」をタップし、「フォーマット」をタップします。
2. 「ビデオ撮影」の下の「Apple ProRes」をオンにします。
3. SSDをUSB-Cでつなぎます。
4. カメラアプリで「ビデオ」モードを選びます。
5. 画面の解像度とフレームレートの値をタップし、ProResの形式、解像度、フレームレートを選びます。

iPhoneへの録画に戻すときは、SSDを外します。この記事では特定のSSDの書き込み速度と消費電力を測っておらず、製品のおすすめもしません。2つの数値はメーカーの仕様で確認してください。

## 外付けSSDに移したあと、iPhoneの容量はどう空けますか?

[AppleのProResの案内](https://support.apple.com/en-us/109041)は、大きな写真や動画を外部ストレージに書き出してから写真アプリで削除し、「最近削除した項目」から完全に削除するよう説明しています。次の5つのうち1つでも「いいえ」なら、削除しないでください。

1. SSDの写真がファイルアプリで開けます。
2. いちばん長い動画が最後まで再生されます。
3. SSDのファイル数が、選んだ写真と動画の数と同じか多いです。
4. 大事な写真と動画は、SSD以外の場所にもコピーがあります。
5. SSDをなくしても困らない保管の計画があります。

[AppleのiCloudストレージの案内](https://support.apple.com/en-us/108922)によると、「最近削除した項目」の写真と動画は30日間取り戻せます。iCloudストレージの上限を超えている場合、削除した項目はすぐに消えます。大きな動画を移すコツは[iPhoneの動画をUSBに移す方法](/blog/ja/iphone-videos-to-usb)をご覧ください。

## USBメモリに定期的に保存するには?

次のアプリはUSBメモリを前提に紹介します。外付けSSDでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPhoneから外付けSSDへ直接移すときのよくある質問

### パソコンなしでiPhoneの写真を外付けSSDに移せますか?

移せます。SSDをiPhoneにつなぎ、写真アプリの「未編集のオリジナルを書き出す」でSSDを選びます。

### 4GBを超える動画がSSDに保存できません。

SSDがFAT32の可能性が高いです。FAT32は1ファイルが4GiBを超えられません。データを移してから、exFATにフォーマットしてください。

### 普通の動画もSSDに直接録画できますか?

Appleの案内で外部ストレージへの直接録画が説明されているのはProResの動画です。普通のHEVCの動画は、撮ったあとに写真アプリからSSDに書き出してください。

### LightningのiPhoneでもProResをSSDに直接録画できますか?

Appleの案内の対応モデルは、USB-CでつなぐiPhone 15 Pro以降のProモデルです。LightningのiPhoneでは、撮ったあとに写真アプリからSSDに移してください。

### SSDに移した写真は暗号化されますか?

形式によって違います。[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATとFAT32はファイルシステムレベルの暗号化に対応していません。SSDを持っている人は誰でも内容を開けるので、保管場所に気をつけてください。
