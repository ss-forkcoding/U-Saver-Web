---
title: "USB 64GB Format FAT32: What Works and the 4GB File Limit"
description: "Planning a USB 64GB format to FAT32? See what Apple and Microsoft say about 32 GB drives, the 4 GB file limit, and how to format on iPhone, Mac, or Windows."
date: 2026-11-10
---

## Key takeaways

A USB 64GB format to FAT32 depends on the device you use. Apple recommends ExFAT for disks over 32 GB, and Windows has its own limit that changed in 2026. Formatting erases everything on the drive, so copy your files somewhere else first.

FAT32 can't store a file larger than 4 GB. If the drive will hold long videos, choose exFAT instead.

For a 64 GB drive, exFAT is the better choice unless you have a specific reason to use FAT32.

"Small files copy fine, but my big video won't." "I want to format my 64 GB USB drive as FAT32." Both questions come from FAT32's two limits: the size of a single file and the capacity of the drive.

## When should you choose FAT32 for a USB drive?

Choose FAT32 for a small drive that only holds files of 4 GB or less. You also need it when a device's manual lists FAT32 as its only supported format.

| Situation | Format to choose |
| --- | --- |
| You'll store files over 4 GB | exFAT |
| The drive is over 32 GB and shared with Windows | exFAT |
| The drive is 32 GB or less and files are 4 GB or less | FAT32 or exFAT |
| A device's manual lists only FAT32 | FAT32 |

Here's how the two formats differ.

| Item | FAT32 | exFAT |
| --- | --- | --- |
| Maximum file size | 4 GiB | 2^64-1 bytes |
| Apple's Mac guidance | 32 GB or less | Over 32 GB |
| iPhone external storage | On Apple's list | On Apple's list |

File sizes come from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). The capacity guidance comes from [Apple's guide to formatting for Windows](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac). The iPhone formats are in [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

## What is FAT32's 4 GB file limit?

Microsoft's comparison lists FAT32's maximum file size as 4 GiB. This guide uses the more common "4 GB."

The limit applies to each file. Small files can fill the drive, but one video over 4 GB won't save even when there's plenty of free space. Reformatting as FAT32 doesn't change that.

To move long videos, follow [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). To check a video's size, see [how to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb).

## Can a USB 64GB format to FAT32 work?

The answer depends on where you format the drive. Apple's guide tells you to choose ExFAT for disks over 32 GB. On Windows, the command-line limit depends on which updates the PC has.

| Where | Official guidance |
| --- | --- |
| Mac Disk Utility | MS-DOS (FAT) for 32 GB or less, ExFAT for over 32 GB |
| Windows, earlier limit | FAT32 partitions max out at 32 GB, so a 64 GB drive is formatted to use only 32 GB |
| Windows command line, 2026 change | The FAT32 formatting limit rises from 32 GB to 2 TB |
| iPhone Files app | No capacity limit is listed |

The earlier limit appears in [Microsoft's WinPE USB documentation](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/winpe--use-a-single-usb-key-for-winpe-and-a-wim-file---wim?view=windows-11). The 2 TB change is listed in the [April 30, 2026 preview update KB5083631](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/04/april-30-2026-kb5083631-os-builds-26200-8328-and-26100-8328-preview). A [Windows Insider post](https://blogs.windows.com/windows-insider/2026/04/17/releasing-windows-11-builds-26100-8313-and-26200-8313-to-the-release-preview-channel/) lists it under gradual rollout, so timing can vary by PC.

If you format a 64 GB drive to use only 32 GB, the rest of the drive can't store files. Unless the drive is for a device that reads only FAT32, format it as exFAT.

## What should you check before a FAT32 format?

Formatting removes every file on the drive. Copy anything you want to keep to another storage device first.

Confirm the drive's name and capacity so you don't pick the wrong one. For use with an iPhone, Apple requires a single data partition.

## How to format a USB drive to FAT32 on iPhone

According to [Apple's Files guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios), iPhone models with a USB-C port can change a drive's format in the Files app. To make a FAT32 drive, choose MS-DOS (FAT) from the list.

1. Connect the drive to your iPhone.
2. Open the Files app and tap Browse.
3. Touch and hold the drive's name under Locations, then tap Erase.
4. Select MS-DOS (FAT) as the format, then tap Erase again.

Lightning iPhones aren't covered by this method, so use a Mac or Windows PC. The adapters you need are in [iPhone OTG USB: which adapter do you need?](/blog/en/iphone-otg-usb)

## How to format a USB drive to FAT32 on Mac

On a Mac, use Disk Utility. These steps follow [Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac).

1. Open Disk Utility from the Utilities folder in Applications.
2. Choose View, then Show All Devices.
3. In the sidebar, select the top-level item for your drive and click Erase.
4. Set Scheme to GUID Partition Map.
5. Set Format to MS-DOS (FAT).
6. Enter a name.
7. Click Erase, then click Done.

If the Scheme menu doesn't appear, you haven't selected the top-level item. Apple's guide to formatting for Windows limits the volume name to 11 characters.

## How to format a USB drive to FAT32 on Windows

These steps follow [Microsoft's format command reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format).

1. Connect the drive and note its drive letter.
2. Open the command prompt.
3. Type something like `format E: /FS:FAT32 /Q /V:BACKUP`.
4. Read the on-screen prompts and continue.

E is only an example, so replace it with your drive's letter. The wrong letter erases a different drive. The volume label can be up to 11 characters.

`/Q` runs a quick format. It clears the file table and skips the scan for bad areas. Microsoft says to use it only on previously formatted volumes you know are in good condition. If the drive has been throwing errors, run the command without `/Q`.

If the command stops with an error on a drive over 32 GB, the 2026 change may not have reached that PC yet. In that case, format the drive as exFAT.

## How to check the drive on your iPhone after formatting

Connect the drive and look under Locations on the Browse screen in the Files app. If the drive's name appears, you can copy files to it. The steps are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

## Can you use a FAT32 USB drive with U-Saver?

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive, and it works with exFAT or FAT32 drives. Videos that don't fit on a FAT32 drive are marked as exceptions in the history, so format the drive as exFAT to save videos over 4 GB. U-Saver is available on the App Store and requires iOS 26 or later. In Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of the drive aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: USB 64GB format FAT32

### Does formatting to FAT32 erase my files?

Yes. Copy anything you want to keep before you start.

### Can a FAT32 USB drive store a video over 4 GB?

No. Microsoft's comparison lists FAT32's maximum file size as 4 GiB. Save large videos to an exFAT drive.

### Should a 64 GB USB drive be FAT32 or exFAT?

By Apple's guidance, exFAT. Consider FAT32 only if the drive is for a device that supports nothing else.

### Where is FAT32 in the Mac format menu?

Apple's guides call it MS-DOS (FAT). Choose MS-DOS (FAT) from the Format menu in Disk Utility.

### Can an iPhone use a FAT32 USB drive?

Yes. FAT32 is on Apple's list of external storage formats. The drive must have a single data partition.
