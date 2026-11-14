---
title: "iPhoneに外付けHDDをつないで直接保存する方法:電源、形式、接続手順"
description: "iPhoneの外付けHDDへの直接保存に必要な電源とケーブル、iPhoneが読める形式、ファイルアプリで開く手順、写真やProResビデオをHDDに直接保存する条件をAppleの案内をもとにまとめました。"
date: 2026-11-14
---

## この記事の要点

iPhoneから外付けHDDに直接保存するには、HDDをiPhoneの充電端子につなぎ、ファイルアプリで開きます。USB-CのiPhoneはUSB-Cケーブルで、LightningのiPhoneはカメラアダプタでつなぎます。

Appleの案内では、外付けハードドライブをiPhoneで使うときは外部電源が必要な場合が多いと説明しています。つなぐ前に電源を用意してください。

HDDはデータパーティションが1つで、Appleの一覧にある形式である必要があります。Windowsでよく使われるNTFSは一覧にありません。

「HDDを挿しても何も反応しない」「iPhoneからHDDに直接保存できる?」。HDDはUSBメモリやSSDより接続の条件が多くあります。この記事では、つなぐ前に確認する3つのこと、端子ごとの接続の組み方、ファイルアプリで開く手順、HDDに直接保存する方法を順にまとめます。

## iPhoneに外付けHDDをつなぐ前に何を確認しますか?

電源、形式、パーティションの3つを見ます。基準は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。

| 確認すること | 基準 | 確認のしかた |
| --- | --- | --- |
| 電源 | HDDが自分で電源を取れるか | HDDに電源アダプタの端子があるか、メーカーの仕様に電源の条件があるかを見ます |
| 形式 | APFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれか | MacのディスクユーティリティかWindowsのエクスプローラーで見ます |
| パーティション | データパーティションが1つ | MacのディスクユーティリティかWindowsのディスクの管理で見ます |

FAT32は1ファイルが4GiBを超えられません。exFATの1ファイルの最大サイズは2^64-1バイトです。どちらも[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。長い動画を保存し、Windowsパソコンでも開くHDDなら、exFATが合っています。

NTFSのHDDは、フォーマットし直さないとiPhoneで使えません。フォーマットするとデータはすべて消えるので、先に別の場所へコピーしてください。手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。USBメモリを例にしていますが、MacとWindowsの手順は外付けHDDでも同じです。

## iPhoneと外付けHDDの接続で電源はどう足しますか?

HDDが自分で電源を取れない場合は、iPhoneの端子に合わせて次のようにつなぎます。

| iPhoneの端子 | Appleの案内にある接続の組み方 |
| --- | --- |
| USB-C | iPhone → 電源付きのUSBハブ → HDD |
| Lightning | iPhone → Lightning - USB 3カメラアダプタ(USB電源アダプタをつなぐ) → HDD |

出典は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。Lightning - USBカメラアダプタも外部ストレージをつなぐアダプタとして案内されています。ただし、電源を足す組み方としてAppleが挙げているのはUSB 3カメラアダプタです。

この記事では特定のHDD、ハブ、ケーブルを試しておらず、おすすめもしません。消費電力も測っていません。メーカーの仕様に電源の条件があれば、それに従ってください。アダプタの種類は[iPhoneのOTG接続の条件](/blog/ja/iphone-otg-usb)に詳しくまとめました。

## iPhoneに外付けHDDをつなぐ手順

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に沿った手順です。

1. HDDの形式とパーティションの数を確認します。
2. HDDに電源が必要なら、電源アダプタか電源付きのハブを先につなぎます。
3. ケーブル、ハブ、アダプタをiPhoneの充電端子に挿し、HDDをつなぎます。
4. ファイルアプリを開き、「ブラウズ」をタップします。
5. 「場所」の下のHDDの名前をタップします。
6. 使い終わったら、HDDを充電端子から外します。

「場所」が表示されないときは、もう一度「ブラウズ」をタップします。HDDの名前を長押しすると、名前の変更、消去、情報を見るを選べます。出典は[Appleのファイル転送の案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)です。コピーが終わる前に外すとファイルが移りきらないことがあるので、進行の表示が消えてから外してください。

## iPhoneから外付けHDDに直接保存する方法

HDDがファイルアプリに表示されれば、パソコンなしで保存できます。保存するものによって使うアプリが違います。

| 保存するもの | 使うアプリ | 方法 | 出典 |
| --- | --- | --- | --- |
| 写真、ビデオ | 写真アプリ | 共有ボタンから「未編集のオリジナルを書き出す」をタップし、HDDを選びます | [Appleの写真のダウンロードの案内](https://support.apple.com/en-us/111762) |
| 書類、ファイル | ファイルアプリ | 長押ししてコピーし、HDDのフォルダでペーストします | [Appleのファイル転送の案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) |
| ProResビデオ | カメラアプリ | 対応モデルでHDDに直接収録します | [AppleのProResの案内](https://support.apple.com/en-us/109041) |

写真、ビデオ、連絡先を項目ごとに保存する詳しい手順と、保存したあとに確認することは[iPhoneのバックアップを外付けHDDに取る方法](/blog/ja/backup-iphone-external-drive)にまとめました。

## iPhoneのProResビデオを外付けHDDに直接保存できますか?

対応モデルなら、条件を満たせば試せます。[AppleのProResの案内](https://support.apple.com/en-us/109041)によると、iPhone 15 Pro、16 Pro、17 Pro、18 ProのモデルはUSB-Cでつないだ外部ストレージにProResを直接収録できます。条件は次のとおりです。

| 条件 | Appleの案内の基準 |
| --- | --- |
| 形式 | exFAT |
| 4K60 ProRes | 書き込み速度が毎秒220MB以上 |
| 4K120 ProRes | 書き込み速度が毎秒440MB以上、収録のたびに先にフォーマットし直す |
| 速度が足りないとき | 「Slow Recording Speed」のメッセージが出ることがあります |

HDDの書き込み速度は製品によって違います。この記事ではHDDの速度を測っていません。メーカーの仕様にある書き込み速度を上の基準と比べてください。Appleの案内では、ProResのファイルはHEVCのファイルより最大30倍大きいと説明しています。iPhone本体に収録するときは外部ストレージを外します。

## iPhoneに外付けHDDが表示されないとき

Appleの案内の内容を、確認する順にまとめました。

| 順番 | 確認すること | やること |
| --- | --- | --- |
| 1 | ファイルアプリの画面 | もう一度「ブラウズ」をタップして「場所」を開きます |
| 2 | 電源 | 電源アダプタ、電源付きのハブ、USB 3カメラアダプタとUSB電源アダプタのうち合う組み方でつなぎ直します |
| 3 | ケーブル | USB-Cの規格に準拠したケーブルか確かめ、別のケーブルに替えてみます |
| 4 | 形式とパーティション | Macかパソコンで確認します。NTFSかパーティションが複数なら、データを移してからフォーマットし直します |
| 5 | 別のストレージ | USBメモリを挿して、原因がHDDかiPhoneかを切り分けます |

ケーブルの基準は[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)にあります。同じ案内では、一部のUSB-CアクセサリやケーブルがWi-Fiやモバイル通信を妨げることがあると説明しています。HDDをつないでいる間に通信が遅くなったら、使い終わったら外してください。

## 外付けHDDへの転送速度は何で決まりますか?

iPhoneのモデル、ケーブル、HDDの3つで決まります。iPhone側の最大の規格は[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)と[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)によるものです。

| iPhone | 最大の規格 | 条件 |
| --- | --- | --- |
| iPhone 15 Pro、16 Pro、17 Pro、18 Proのモデル、iPhone Duo | USB 3.2 Gen 2、最大10Gbit/s | 10Gbit/sに対応したUSB 3ケーブルを別に使います |
| そのほかのUSB-CのiPhone | USB 2 | iPhoneに付属のケーブルもUSB 2の速度です |
| LightningのiPhone | USB 2 | アダプタにかかわらずUSB 2の速度です |

上の数値は規格上の最大値で、HDD自体の速度は別に確認が必要です。この記事では実際の転送速度を測っていません。外付けSSDと接続の条件を比べるなら[iPhone 外付けSSDの使い方](/blog/ja/iphone-external-ssd-connect)をご覧ください。

## USBメモリに定期的に保存するには?

次のアプリはUSBメモリを前提に紹介します。外付けHDDでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

USBメモリの接続、形式、容量は[iPhone USBメモリ総まとめ](/blog/ja/iphone-usb-drive-guide)に集めました。

## iPhoneと外付けHDDの接続のよくある質問

### 電源なしでiPhoneに外付けHDDをつなげますか?

HDDによります。Appleの案内では、外付けハードドライブには外部電源が必要な場合が多いと説明しています。つながらなければ、電源付きのハブか、USB 3カメラアダプタとUSB電源アダプタで試してください。

### LightningのiPhoneにも外付けHDDをつなげますか?

つなげます。Appleの案内どおり、Lightning - USB 3カメラアダプタかLightning - USBカメラアダプタを経由します。電源を足すなら、USB 3カメラアダプタにUSB電源アダプタをつなぎます。転送速度はUSB 2です。

### NTFSの外付けHDDはiPhoneで開けますか?

NTFSはAppleの外部ストレージの形式一覧にありません。iPhoneで使うなら、データを移してからexFATにフォーマットしてください。フォーマットしたくなければ、Windowsパソコンを経由して写真を移す方法が[iPhoneのバックアップを外付けHDDに取る方法](/blog/ja/backup-iphone-external-drive)にあります。

### iPhoneで外付けHDDをフォーマットできますか?

USB-CのiPhoneなら、ファイルアプリでHDDの名前を長押しして「消去」を選び、APFS、ExFAT、MS-DOS(FAT)のいずれかでフォーマットします。LightningのiPhoneは、MacかWindowsパソコンでフォーマットしてください。フォーマットするとデータはすべて消えます。

### 外付けHDDに保存した内容は暗号化されますか?

形式によります。Appleの一覧にはAPFS(暗号化)があります。[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATとFAT32はファイルシステムレベルの暗号化に対応していません。exFATのHDDをなくすと他人に内容を見られるので、保管に気をつけてください。
