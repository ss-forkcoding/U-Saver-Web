---
title: "SD Card Full? What to Check: Free Space, the Trash, the 4 GB Limit, and Capacity"
description: "When your SD card says it's full, the card may not actually be full. Files left in the Trash, the FAT32 4 GB file limit, or the gap between labeled and formatted capacity can be the cause. Learn how to make a copy first and narrow it down, based on SD Association, Apple, and Microsoft documentation."
date: 2026-11-26
---

## Key takeaways

When you see an SD card full message, it's tempting to delete files or format right away. But the card isn't always really full. Deleted files may still be in the Trash, a single file may be over 4 GB, or the card may hold less than its label says.

First, copy the photos and videos on the card to another storage device. Then check what's taking up space. Leave formatting for last, after you confirm the copy opens.

"I deleted photos, but the free space didn't change." "There's space left, but my video won't copy." People often say this when they search for help with a full SD card. This guide covers the order in which to narrow down the cause. The basics are in [SD card basics](/blog/en/sd-card-basics-guide), and capacity standards are in [SDHC vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

## Why does your SD card say it's full?

There are five main causes. If you check them from the top, you can narrow down the cause without erasing the card.

| Cause | What you see | Source |
| --- | --- | --- |
| The card really is full | Photos and videos use almost all the capacity | File sizes in the card's folders |
| Files left in the Trash | You deleted files on a Mac, but free space didn't grow | Apple's guide to deleting files |
| FAT32 file size limit | There's free space, but large videos won't copy | Microsoft file system comparison, SD Association capacity standards |
| Labeled vs formatted capacity | Your computer shows slightly less than the package | Apple's storage capacity guide |
| A card with faked capacity | It fills up long before the labeled capacity, or files get damaged | SD Association's article on counterfeit cards |

We didn't test any card or device for this guide. The table summarizes what each official document says. The exact message a camera or dash cam shows varies by device, so check your device's manual too.

## Should you make a copy before clearing the card?

Yes. When you delete files or format to free up space, those files are gone from the card. Copy the photos and videos you want to keep to another storage device first.

1. Connect the card to your computer or iPhone.
2. Copy the photos and videos you want to keep to another storage device.
3. Open a few of the copied files to make sure they work.
4. Eject the card before you remove it.

Connection steps are in [How to connect an SD card to your computer](/blog/en/sd-card-to-pc).

## How do you find what's filling up your SD card?

In Windows, sort the files by size in File Explorer. [Microsoft's guide to freeing up drive space](https://support.microsoft.com/en-us/windows/free-up-drive-space-in-windows-85529ccb-c365-490d-b548-831022bc9b32) describes these steps for finding large files.

1. Select File Explorer from the taskbar.
2. Open a folder on the card.
3. Select View, then select Details.
4. Right-click in the open space, then select Sort by > Size.

The largest files appear at the top of the list. The same guide says you can delete files you no longer need or move them to an external storage device like a USB drive or an SD card. It also says to empty the Recycle Bin after deleting files to free up the space completely.

Long videos are much larger than photos. If the card was in a camera or a dash cam, check the video folders first. Dash cam card care is in [How to choose and maintain a dash cam SD card](/blog/en/dashcam-sd-card).

## What if you deleted files on a Mac and the space didn't change?

Check the Trash. [Apple's guide to deleting files](https://support.apple.com/guide/mac-help/delete-files-and-folders-mac-mchlp1093/mac) says items you drag to the Trash aren't deleted until you empty the Trash.

1. Click the Trash icon in the Dock.
2. Make sure there's nothing you want to keep.
3. Click the Empty button in the upper-right corner of the Finder window.
4. In the warning message, click Empty Trash.

Apple warns that items emptied from the Trash are permanently deleted. Check that no file you need is mixed in before you empty it. If you change your mind, select the item and choose File > Put Back.

## What if there's free space but large videos won't fit?

Check the card's file system. FAT32 can store files only up to 4 GiB each ([Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)). In that case, a large video won't copy even when there's space left.

| Capacity standard | Capacity range | Default file system |
| --- | --- | --- |
| SDHC | More than 2 GB, up to 32 GB | FAT32 |
| SDXC | More than 32 GB, up to 2 TB | exFAT |
| SDUC | More than 2 TB, up to 128 TB | exFAT |

The ranges and file systems come from the [SD Association's capacity standards](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/). If you copy a video over 4 GB to an SDHC card of 32 GB or less, you may hit this limit.

There are two fixes. Move the video to an exFAT storage device, or use a larger SDXC card if the device you'll use supports it. Check your camera's or device's manual for the card types it supports first. Compatibility checks for each standard are in [SDHC vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

## What if the card shows less capacity than the package says?

A little less is normal. According to [Apple's storage capacity guide](https://support.apple.com/en-us/102119), manufacturers count 1 GB as 1 billion bytes. Formatting uses some of the space, so the actual formatted capacity is less. In the binary system, 1 GB is 1,073,741,824 bytes.

It's different if the card fills up long before its labeled capacity, or files get damaged after a certain amount. [An SD Association article](https://www.sdcard.org/press/thoughtleadership/keeping-it-real-how-sd-3c-fights-counterfeit-sd-memory-cards/) gives the example of a counterfeit card packaged as 256 GB that holds only 16 GB. Stop writing to a card like that and move your data off first. The steps are in [How to spot a fake SD card](/blog/en/fake-sd-card).

## How do you free up the card by moving photos to your iPhone?

You can import photos and videos from the card in the Photos app on your iPhone. These steps follow [Apple's guide to importing photos](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios).

1. Connect the card reader to your iPhone's charging port and insert the card.
2. Open the Photos app and tap Import.
3. Select the items and the import destination.
4. Tap Import All, or tap the items you want, tap Import, then tap Import Selected.
5. After the import finishes, choose to keep or delete the photos on the card.

Before you delete them from the card, make sure the photos open on your iPhone. If your iPhone is short on space, see [iPhone storage full](/blog/en/iphone-storage-full) first. To go the other way, the steps are in [How to transfer iPhone photos to an SD card](/blog/en/iphone-photos-to-sd-card).

## What if you need to format the SD card to clear it?

Formatting erases everything on the card. Check that the copy you made opens properly before you continue.

[The SD Association's formatter page](https://www.sdcard.org/downloads/formatter/) strongly recommends using SD Memory Card Formatter rather than formatting tools built into operating systems. It says those tools may not be optimized for SD cards and may result in lower performance. How to use it is in [How to use SD Memory Card Formatter](/blog/en/sd-card-formatter), and in-camera steps are in [How to format an SD card](/blog/en/format-sd-card).

If the card is full and writing has also slowed down, see [Slow SD card? What to check first](/blog/en/slow-sd-card) too.

## How do you also keep iPhone photos on a USB drive?

If you make one more copy before clearing the card, you can delete with less worry. The app below is described for USB flash drives. Formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat), and transfer steps are in [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## SD card full FAQ

### I deleted photos, but my SD card still has no space. Why?

If you deleted them on a Mac, check the Trash. Apple says items aren't deleted until you empty the Trash. On Windows, Microsoft also says to empty the Recycle Bin after deleting files.

### Why won't a video copy when there's free space?

If the card uses FAT32, it can't store files larger than 4 GiB. Under the SD Association's standards, the default file system for SDHC cards is FAT32.

### My 64 GB card shows less than 64 GB on my computer. Is it broken?

A little less is normal. According to Apple, manufacturers count capacity in the decimal system, and formatting uses some of the space. If it fills up much earlier or files get damaged, suspect a counterfeit card.

### Is formatting the fastest way to clear a full SD card?

It's fast, but it erases everything. Make a copy, check that it opens, then format. The SD Association recommends SD Memory Card Formatter.

### Can I delete the photos on the card after importing them to my iPhone?

Apple's guide says that after the import, you can keep or delete the photos on the card. Before you delete them, make sure they open properly on your iPhone.
