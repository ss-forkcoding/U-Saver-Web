---
title: "iPhone 外付けSSDの選び方と使い方まとめ:端子、ケーブル、形式、速度、写真の保存"
description: "iPhone 外付けSSDを選ぶときに確認する端子、ケーブル、形式、電源、速度、ProResの条件をまとめました。接続と写真の移し方、外付けHDDとの違いも、Appleの案内をもとに一度に確認できます。"
date: 2026-11-15
---

## この記事の要点

iPhone 外付けSSDを選ぶときは、製品名より先に自分のiPhoneに合うかを確かめます。iPhoneの端子、ケーブルの速度、SSDの形式、電源の条件をまず合わせます。

USB-CのiPhoneは、USB-CのSSDをケーブル1本でつなぎます。LightningのiPhoneはカメラアダプタを経由します。どちらもファイルアプリでSSDを開きます。

速いSSDを買っても、USB 2で接続すると規格の上限は超えられません。USB 3の速度に対応するのは一部のProモデルだけです。

「iPhoneで使う外付けSSDは何を見て選べばいい?」「買ったのにiPhoneに表示されない」。この記事では、iPhone用の外付けSSDを選ぶときの基準をAppleとMicrosoftの資料でまとめ、接続、バックアップ、トラブル対処の記事を1か所に集めます。特定の製品は試しておらず、おすすめもしません。

## iPhoneで外付けSSDを使うと何ができますか?

Appleの案内にある使い方は3つです。

| 使い方 | できること | 出典 |
| --- | --- | --- |
| ファイルの保管 | ファイルアプリでSSDを開き、ファイルをコピーします | [Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| 写真・動画の移動 | 写真アプリでオリジナルを書き出し、SSDに保存します | [AppleのiCloud写真のダウンロードの案内](https://support.apple.com/en-us/111762) |
| ProResの録画 | 対応するProモデルは、SSDにProResを直接録画できます | [AppleのProResの案内](https://support.apple.com/en-us/109041) |

SSDにコピーしたファイルは、iPhoneのバックアップとは違います。何を保存できるかは[iPhoneバックアップを外付けSSDに取る方法](/blog/ja/backup-iphone-to-ssd)で項目ごとに確認してください。

## iPhone 外付けSSDは何を基準に選べばよいですか?

次の基準はAppleとMicrosoftの資料から選びました。製品の仕様表で1つずつ確認してください。

| 確認すること | 基準 | 出典 |
| --- | --- | --- |
| 端子 | USB-CのiPhoneは、USB-C端子のSSDを両端がUSB-Cのケーブルでつなぎます。LightningのiPhoneは、Lightning - USB 3カメラアダプタかLightning - USBカメラアダプタが必要です | [AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)、[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| ケーブル | USB 3に対応するモデルは、10Gbit/sに対応するUSB 3ケーブルを使います。iPhoneに付属のケーブルはUSB 2の速度です | [AppleのUSB-Cの案内](https://support.apple.com/en-us/105099) |
| 形式とパーティション | データパーティションが1つで、APFS、Mac OS拡張(HFS+)、exFAT、FAT32、FATのいずれかである必要があります。NTFSは一覧にありません | [Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| 電源 | Appleの案内に外付けSSDの個別の電源の記載はありません。外付けHDDは外部電源が必要な場合が多いです | [Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| ProResの録画 | 4K60は毎秒220MB以上、4K120は毎秒440MB以上の書き込み速度と、最大消費電力4.5Wが必要です | [AppleのProResの案内](https://support.apple.com/en-us/109041) |
| 暗号化 | ProResの録画は、パスワードで暗号化したドライブに対応しません。exFATにはファイルシステムレベルの暗号化がありません | [AppleのProResの案内](https://support.apple.com/en-us/109041)、[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) |

Appleは、USB-Cの規格に準拠していないデバイスやケーブルは正しく動作しない場合があると説明しています。購入前に、メーカーの仕様にUSB-C接続と読み書き速度が書かれているか確認してください。

## 自分のiPhoneは外付けSSDをどれくらいの速度で使えますか?

iPhoneのモデルとケーブルが最大規格を決めます。[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)と[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)をまとめた表です。

| iPhone | 最大規格 | 条件 |
| --- | --- | --- |
| iPhone 15 Pro、16 Pro、17 Pro、18 Proの各モデル、iPhone Duo | USB 3.2 Gen 2、最大10Gbit/s | 10Gbit/sに対応するUSB 3ケーブルを別に使います |
| そのほかのUSB-C iPhone | USB 2 | iPhoneに付属のケーブルもUSB 2の速度です |
| LightningのiPhone | USB 2 | アダプタに関係なくUSB 2の速度です |

USB 2で接続すると、速いSSDでも規格の上限は超えられません。表の数値は規格上の最大値です。この記事では実際の転送速度を測っていません。

## iPhone用の外付けSSDはどの形式にすればよいですか?

一緒に使う機器に合わせて選びます。ファイルサイズの上限は[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。

| 形式 | 一緒に使いやすい機器 | 注意すること |
| --- | --- | --- |
| exFAT | iPhone、Mac、Windows | ファイルシステムレベルの暗号化がありません。ProResの録画に必要な形式です |
| APFS | iPhone、Mac | Appleの一覧にはAPFS(暗号化)もあります |
| FAT32 | 古い機器まで | 1つのファイルが4GiBを超えられません |
| NTFS | Windows | iPhoneの外部ストレージの形式一覧にありません |

USB-CのiPhoneなら、ファイルアプリで形式を変えられます。[Appleのファイル転送の案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)に沿った手順です。

1. SSDに残したいデータを、先に別の場所へコピーします。
2. SSDをiPhoneにつなぎ、ファイルアプリで「ブラウズ」をタップします。
3. 「場所」の下のSSDの名前を長押しし、「消去」をタップします。
4. 「ExFAT」「APFS」「MS-DOS(FAT)」のいずれかを選び、もう一度「消去」をタップします。

MacとWindowsでフォーマットする手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。USBメモリを例にしていますが、外付けSSDでも手順は同じです。

## iPhoneに外付けSSDをつないで写真を移す手順は?

接続は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)、写真の書き出しは[AppleのiCloud写真のダウンロードの案内](https://support.apple.com/en-us/111762)に沿っています。

1. ケーブルかアダプタをiPhoneの充電端子に挿し、SSDをつなぎます。
2. ファイルアプリの「ブラウズ」で、「場所」の下にSSDの名前が出るか確認します。
3. 写真アプリのライブラリで「選択」をタップし、移す写真と動画を選びます。
4. 共有ボタンをタップし、「未編集のオリジナルを書き出す」をタップします。
5. 戻る矢印をタップして「場所」の下のSSDを選び、「保存」をタップします。
6. 使い終わったら、SSDを充電端子から抜きます。

ケーブルとアダプタの組み合わせは[iPhone 外付けSSDの使い方](/blog/ja/iphone-external-ssd-connect)に、移したあとに容量を空ける方法は[iPhoneの写真・動画を外付けSSDに直接移す方法](/blog/ja/iphone-photos-to-ssd)にまとめました。

## iPhoneに外付けSSDが表示されないときは、何から確認しますか?

次の順で原因を絞ります。項目はAppleの案内によるものです。

| 順番 | 確認すること | すること |
| --- | --- | --- |
| 1 | ファイルアプリ | 「場所」が見えないときは、もう一度「ブラウズ」をタップします |
| 2 | 形式とパーティション | NTFSかパーティションが複数あるなら、データを移してからフォーマットし直します |
| 3 | 電源 | USB-CのiPhoneは電源付きUSBハブ、LightningのiPhoneはUSB電源アダプタをつないだUSB 3カメラアダプタを経由します |
| 4 | ケーブル | USB-Cの規格に準拠した別のケーブルに替えてみます |

詳しい確認手順は[iPhoneで外付けHDD・SSDが認識しないとき](/blog/ja/iphone-drive-not-detected)にあります。

## 外付けSSDと外付けHDDのどちらを選べばよいですか?

ハブなしでiPhoneにつなぐなら、SSDのほうが条件が単純です。Appleは、外付けHDDをiPhoneで使うときは外部電源が必要な場合が多いと案内しています。

| こんなとき | 合うほう |
| --- | --- |
| 持ち歩いてiPhoneによくつなぐ | 外付けSSD |
| USB 3対応のProモデルで大きな動画をよく移す | 外付けSSD |
| 大量のデータを長く保管し、容量あたりの価格を重視する | 外付けHDD |

メーカー資料をもとにした比較は[外付けSSDとHDDの違い](/blog/ja/external-ssd-vs-hdd)に、外付けHDDの接続は[iPhoneに外付けHDDをつないで直接保存する方法](/blog/ja/iphone-hard-drive-connect)にまとめました。

## iPhone 外付けSSDの記事一覧

| したいこと | 読む記事 |
| --- | --- |
| ケーブル、アダプタ、電源を合わせる | [iPhone 外付けSSDの使い方](/blog/ja/iphone-external-ssd-connect) |
| 写真、連絡先、ファイルを項目別に保存する | [iPhoneバックアップを外付けSSDに取る方法](/blog/ja/backup-iphone-to-ssd) |
| 写真・動画を移して容量を空ける | [iPhoneの写真・動画を外付けSSDに直接移す方法](/blog/ja/iphone-photos-to-ssd) |
| SSDとHDDを比べる | [外付けSSDとHDDの違い](/blog/ja/external-ssd-vs-hdd) |
| つないでも表示されない | [iPhoneで外付けHDD・SSDが認識しないとき](/blog/ja/iphone-drive-not-detected) |
| exFATでフォーマットする | [exFATフォーマット方法](/blog/ja/format-usb-exfat) |

## USBメモリに定期的に保存したいときは?

次のアプリはUSBメモリを前提に紹介します。外付けSSDでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPhone 外付けSSDのよくある質問

### iPhoneにおすすめの外付けSSDはどれですか?

この記事では製品を試しておらず、おすすめもしません。上の基準表の端子、形式、速度、電力の項目を、製品の仕様と照らし合わせてください。

### 外付けSSDをiPhoneにつなぐには、別に電源が必要ですか?

Appleの案内に外付けSSDの個別の電源の記載はありません。つながらない、またはよく切れるときは、電源付きUSBハブを経由して試してください。メーカーの仕様に電源の条件があれば、それに従ってください。

### 速いSSDを買えば、iPhoneでも速くなりますか?

iPhoneがUSB 3に対応している必要があります。Appleの案内では、USB 3.2 Gen 2に対応するのはiPhone 15 Pro、16 Pro、17 Pro、18 Proの各モデルとiPhone Duoです。そのほかのモデルはUSB 2の速度です。

### 4GBを超える動画をSSDに保存するには?

exFATかAPFSでフォーマットしてください。FAT32では1つのファイルが4GiBを超えられません。

### SSDをつなぐとWi-Fiが遅くなるのはなぜですか?

[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)は、一部のUSB-Cアクセサリやケーブルがワイヤレス接続を妨げる場合があると説明しています。使い終わったら外すか、別のケーブルを試してください。
