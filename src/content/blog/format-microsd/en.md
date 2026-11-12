---
title: "How to Reformat a Micro SD Card on iPhone, Mac, and Windows"
description: "Need to reformat a micro SD card from a phone or camera? See which format fits each microSD capacity, what to check first, and the steps for the iPhone Files app, Mac Disk Utility, Windows, and the SD Association's formatter."
date: 2026-11-12
---

## Key takeaways

To reformat a micro SD card, follow the same order as for a full-size SD card. Copy your files off the card, pick the format that fits its capacity, then format. Formatting erases everything on the card.

A microSD card is smaller than an SD card, but its logic and electronics are the same. So the format rules are the same too: FAT32 is the default for microSDHC cards up to 32 GB, and exFAT is the default for microSDXC cards over 32 GB.

The difference is the connection. You need a card reader with a microSD slot or an SD-size adapter to connect the card to an iPhone or computer.

"I took the microSD card out of my phone, and my iPhone doesn't show it." "I want to wipe my action camera card and use it again." These are common questions from people reformatting a card that came from another device. The device-by-device steps for full-size cards are in [how to format an SD card](/blog/en/format-sd-card). This guide focuses on what to check with microSD.

## What should you check before you reformat a micro SD card?

Formatting removes every file on the card. Check these four things first.

| Check | What to do |
| --- | --- |
| Files you want to keep | Copy them to another storage device |
| The standard printed on the card | See whether it says microSD, microSDHC, or microSDXC, then choose a format |
| How you'll connect it | Have a reader with a microSD slot or an SD-size adapter ready |
| The right device | Confirm the card's name and capacity so you don't pick another drive |

To move the card's photos and videos to your iPhone first, follow the import steps in [micro SD for iPhone](/blog/en/iphone-microsd).

## Is formatting a microSD card different from an SD card?

No. According to the [SD Association FAQ](https://www.sdcard.org/consumers/faq/), microSD and SD cards differ only in form factor, size, number of pins, and whether they have a write-protect switch. Their logic and electronics are identical.

| Card | Size | How to connect it for formatting |
| --- | --- | --- |
| SD | 32 x 24 x 2.1 mm | Insert it in a reader with an SD slot |
| microSD | 11 x 15 x 1.0 mm | Insert it in a reader with a microSD slot or an SD-size adapter |

Sizes come from the [SD Association's capacity overview](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/). Because the card is smaller, it won't fit directly in a reader that has only an SD slot. We haven't tested third-party readers or adapters, and we don't recommend any specific product.

## Which format should you use for each micro SD card capacity?

Each capacity standard has a default file system. This table follows the [SD Association's capacity overview](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Standard on the card | Capacity | Default file system |
| --- | --- | --- |
| microSD | Up to 2 GB | FAT12, FAT16 |
| microSDHC | Over 2 GB, up to 32 GB | FAT32 |
| microSDXC | Over 32 GB, up to 2 TB | exFAT |

FAT32 can't store a file larger than 4 GB. [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists the FAT32 maximum file size as 4 GiB. Choose exFAT for a card that will hold long videos. If you want FAT32 on a card over 32 GB, see [how to format a USB drive to FAT32](/blog/en/format-usb-fat32).

## Why reformat a microSD card from another device?

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an iPhone uses storage with a single data partition. The format must be APFS, Mac OS Extended (HFS+), exFAT, FAT32, or FAT.

| Card condition | What happens on iPhone | What to do |
| --- | --- | --- |
| Formatted as NTFS | It isn't on Apple's list | Reformat it as exFAT or FAT32 |
| More than one data partition | It doesn't meet Apple's requirement | Erase the top-level item in Mac Disk Utility |
| Listed format, one partition | The Files app can open it | No need to format |

If the reader doesn't detect the card at all, check the connection before formatting. The SD Association FAQ says to insert the card as the device manual describes, note any error messages, and contact the card manufacturer.

## How to reformat a micro SD card with the SD Association's formatter

The [SD Association's formatter page](https://www.sdcard.org/downloads/formatter/) strongly recommends SD Memory Card Formatter over the formatting tools built into operating systems. It says those tools may not be optimized for SD cards and can result in lower performance.

1. Download and install SD Memory Card Formatter for Windows or Mac from the SD Association site.
2. Put the microSD card in a reader's microSD slot or an SD-size adapter, then connect it to your PC or Mac.
3. Open the formatter and select the card. Check its name and capacity again.
4. Start the format.

The same page says the formatter doesn't support cards encrypted with Windows BitLocker To Go. Unlock the card first, then format it.

## How to reformat a micro SD card on iPhone

According to [Apple's Files guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios), iPhone models with a USB-C port can change the format of an external storage device in the Files app.

1. Put the microSD card in a reader and connect the reader to your iPhone. The card fits only one way, so don't force it.
2. Open the Files app and tap Browse.
3. Touch and hold the card's name under Locations, then tap Erase.
4. Select ExFAT or MS-DOS (FAT) as the format, then tap Erase again.

Choose ExFAT for a card over 32 GB and MS-DOS (FAT) for 32 GB or less. Lightning iPhones aren't covered by this method, so use a Mac or Windows PC. Reader requirements for iPhone are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How to reformat a micro SD card on Mac

On a Mac, use Disk Utility. These steps follow [Apple's guide to formatting for Windows](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac). Use this method for a card with more than one partition, too.

1. Open Disk Utility from the Utilities folder in Applications.
2. Choose View, then Show All Devices.
3. In the sidebar, select the top-level item for the card and click Erase.
4. Choose a partition scheme from the Scheme menu.
5. Set Format to MS-DOS (FAT) for a card of 32 GB or less, or ExFAT for a card over 32 GB.
6. Enter a name. It can be up to 11 characters.
7. Click Erase, then click Done.

According to [Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac), if the Scheme menu doesn't appear, you haven't selected the top-level item.

## How to reformat a micro SD card on Windows

On Windows, format the card from File Explorer.

1. Connect the reader with the microSD card and open This PC in File Explorer.
2. Right-click the card's drive and choose Format.
3. Set File system to FAT32 for a card of 32 GB or less, or exFAT for a card over 32 GB.
4. Enter a name under Volume label.
5. Click Start and confirm.

From the command prompt, type something like `format E: /FS:exFAT /V:MICROSD`. E is only an example, so replace it with your card's drive letter. The wrong letter erases a different drive.

Adding `/Q` makes it a quick format. [Microsoft's format command reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format) says to use that option only if there are no bad sectors. If the card was throwing errors in another device, turn Quick Format off.

A Windows format applies to one drive letter only. For a card with more than one partition, use the SD Association's formatter or Mac Disk Utility.

## How to check the card on your iPhone after you reformat it

Connect the reader with the card to your iPhone and look under Locations on the Browse screen in the Files app. If the card's name appears, you can copy files to it. If you don't see Locations, tap Browse again.

The steps for moving photos to the card are in [transferring photos from iPhone to SD card](/blog/en/iphone-photos-to-sd-card).

## Want regular backups to a USB drive?

The app below is described for USB drives. We haven't checked how it works with card readers. To change a USB drive's format, see [how to format a USB drive to exFAT](/blog/en/format-usb-exfat).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: reformat micro SD card

### Does reformatting a micro SD card erase my files?

Yes. Apple's guide says erasing a storage device deletes everything on it. Copy anything you want to keep before you start.

### Do microSD and SD cards use the same format?

Yes. The SD Association FAQ says they differ only in physical details such as size and shape, and their logic is identical. Choose FAT32 or exFAT based on the capacity standard.

### Should a 64 GB microSD card be FAT32 or exFAT?

microSDXC cards over 32 GB use exFAT by default. Unless the card goes into a device that reads only FAT32, format it as exFAT.

### What if a microSD card from my phone doesn't show up on my iPhone?

Check whether the card's format is on Apple's list and whether it has a single data partition. If either doesn't match, move your files off the card and reformat it.

### Do I have to use the SD Association's formatter?

The SD Association strongly recommends it. Operating system tools can format the card, but the association says they may not be optimized for SD cards and can lower performance.
