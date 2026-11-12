---
title: "How to Format an SD Card as FAT32 or exFAT on iPhone, Mac, and Windows"
description: "Want to format an SD card as FAT32? See which format fits each card capacity, then follow the steps for the iPhone Files app, Mac Disk Utility, Windows, and the SD Association's formatter."
date: 2026-11-12
---

## Key takeaways

The steps to format an SD card as FAT32 or exFAT depend on the device, but the order is always the same. Copy your files off the card, pick the format that fits its capacity, then format. Formatting erases everything on the card.

The SD Association sets FAT32 as the default for SDHC cards up to 32 GB and exFAT for SDXC cards over 32 GB. An iPhone can read both.

The SD Association recommends its own SD Memory Card Formatter over the formatting tools built into operating systems. If the card is only for your iPhone, an iPhone with USB-C can also format it in the Files app.

"My camera card won't open on my iPhone." "I want to format my SD card as FAT32, but the option isn't there." These are common questions about SD card formatting. This guide starts with how to choose a format for your card's capacity and then walks through each device.

## What should you check before formatting an SD card?

Formatting removes every file on the card. Check these three things first.

| Check | What to do |
| --- | --- |
| Files you want to keep | Copy them to another storage device |
| The right device | Confirm the card's name and capacity so you don't pick another drive |
| The standard printed on the card | See whether it says SD, SDHC, or SDXC, then choose a format |

To move the card's photos to your iPhone first, see [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## Which format should you use for each SD card capacity?

Each SD capacity standard has a default file system. This table follows the [SD Association's capacity overview](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Standard on the card | Capacity | Default file system |
| --- | --- | --- |
| SD | Up to 2 GB | FAT12, FAT16 |
| SDHC | Over 2 GB, up to 32 GB | FAT32 |
| SDXC | Over 32 GB, up to 2 TB | exFAT |
| SDUC | Over 2 TB, up to 128 TB | exFAT |

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an iPhone reads exFAT, FAT32, FAT, APFS, and Mac OS Extended (HFS+). The device needs a single data partition. NTFS isn't on the list.

FAT32 can't store a file larger than 4 GB. [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists the FAT32 maximum file size as 4 GiB. Choose exFAT for a card that will hold long videos.

## Can you format an SD card as FAT32?

For an SDHC card of 32 GB or less, FAT32 is the default, so you can choose it directly. SDXC cards over 32 GB are a different case.

| Source | What it says |
| --- | --- |
| SD Association standard | SDXC cards over 32 GB use exFAT by default |
| Mac Disk Utility | Choose MS-DOS (FAT) at 32 GB or less and ExFAT above 32 GB |
| Windows command line | The FAT32 format limit rises from 32 GB to 2 TB (April 2026 preview update) |

The Mac guidance is in [Apple's guide to formatting for Windows](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac). The Windows change is listed in [KB5083631](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/04/april-30-2026-kb5083631-os-builds-26200-8328-and-26100-8328-preview), and it may reach each PC at a different time. More detail is in [how to format a USB drive to FAT32](/blog/en/format-usb-fat32).

The only reason to put FAT32 on a card of 64 GB or more is a device that reads FAT32 alone. Otherwise, format it as exFAT, as the standard specifies.

## How to format an SD card with the SD Association's formatter

The [SD Association's formatter page](https://www.sdcard.org/downloads/formatter/) says the SD Memory Card Formatter formats SD, SDHC, SDXC, and SDUC cards to the SD File System Specification. It also says operating system tools may not be optimized for SD cards and can result in lower performance.

1. Download and install SD Memory Card Formatter for Windows or Mac from the SD Association site.
2. Put the SD card in a card reader and connect it to your PC or Mac.
3. Open the formatter and select the card. Check its name and capacity again.
4. Start the format.

The formatter uses the format the standard sets for the card's capacity. The same page says it doesn't support cards encrypted with Windows BitLocker To Go, so remove the encryption first.

## How to format an SD card on iPhone

[Apple's Files guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) names USB drives and SD cards as examples of external storage. iPhone models with a USB-C port can change a device's format in the Files app.

1. Put the SD card in a card reader and connect the reader to your iPhone.
2. Open the Files app and tap Browse.
3. Touch and hold the card's name under Locations, then tap Erase.
4. Select ExFAT or MS-DOS (FAT) as the format, then tap Erase again.

Choose ExFAT for a card over 32 GB and MS-DOS (FAT) for 32 GB or less. Lightning iPhones aren't covered by this method, so use a Mac or Windows PC. For microSD cards, check the reader requirements in [micro SD for iPhone](/blog/en/iphone-microsd).

## How to format an SD card on Mac

On a Mac, use Disk Utility. These steps follow [Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac).

1. Open Disk Utility from the Utilities folder in Applications.
2. Choose View, then Show All Devices.
3. In the sidebar, select the top-level item for the SD card and click Erase.
4. Choose a partition scheme from the Scheme menu.
5. Set Format to MS-DOS (FAT) for a card of 32 GB or less, or ExFAT for a card over 32 GB.
6. Enter a name. It can be up to 11 characters.
7. Click Erase, then click Done.

If the Scheme menu doesn't appear, you haven't selected the top-level item.

## How to format an SD card on Windows

On Windows, format the card from File Explorer.

1. Connect the SD card and open This PC in File Explorer.
2. Right-click the SD card drive and choose Format.
3. Set File system to FAT32 for a card of 32 GB or less, or exFAT for a card over 32 GB.
4. Enter a name under Volume label.
5. Click Start and confirm.

From the command prompt, type something like `format E: /FS:FAT32 /Q /V:CAMERA`. E is only an example, so replace it with your card's drive letter. The wrong letter erases a different drive.

`/Q` is a quick format. [Microsoft's format command reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format) says to use it only on previously formatted volumes you know are in good condition. If the card has been throwing errors, leave out `/Q` or turn Quick Format off.

## How to check the card on your iPhone after formatting

Connect the reader with the card to your iPhone and look under Locations on the Browse screen in the Files app. If the card's name appears, you can copy files to it.

The steps for moving photos to the card are in [transferring photos from iPhone to SD card](/blog/en/iphone-photos-to-sd-card). If the name doesn't appear, check the connection requirements in [can you plug an SD card into an iPhone?](/blog/en/iphone-sd-card-slot)

## Want regular backups to a USB drive?

The app below is described for USB drives. We haven't checked how it works with card readers. To change a USB drive's format, see [how to format a USB drive to exFAT](/blog/en/format-usb-exfat).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is available on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: format SD as FAT32

### Does formatting an SD card erase my files?

Yes. Apple's guide says erasing a storage device deletes everything on it. Copy anything you want to keep before you start.

### Why doesn't my 64 GB card show a FAT32 option?

SDXC cards over 32 GB use exFAT by default, and Apple's Mac guide recommends ExFAT above 32 GB. On Windows, the command line FAT32 limit was 32 GB before the April 2026 preview update.

### Should a 128 GB SD card be FAT32 or exFAT?

By the SD Association standard, SDXC cards over 32 GB use exFAT. Unless the card goes into a device that reads only FAT32, format it as exFAT.

### Can my iPhone use a card formatted in a camera?

If the card's format is on Apple's list and it has a single data partition, the Files app can open it. If it doesn't appear, check the format on a Mac or PC.

### Do I have to use the SD Association's formatter?

The SD Association strongly recommends it. Operating system tools can format the card, but the association says they may not be optimized for SD cards and can lower performance.
