---
title: "How to Connect an External Hard Drive to iPhone: Power, Formats, Steps, and Direct Saving"
description: "How to connect an external hard drive to iPhone: adding power, the formats iPhone reads, the steps in the Files app, and the conditions for saving photos and ProRes video straight to the drive, based on Apple's guides."
date: 2026-11-14
---

## Key takeaways

To connect an external hard drive to iPhone, plug the drive into the iPhone's charging port and open it in the Files app. An iPhone with USB-C connects with a USB-C cable. A Lightning iPhone needs a camera adapter.

Apple says external hard drives often require an external power source when used with iPhone. Sort out power before you connect.

The drive needs a single data partition and a format on Apple's list. NTFS, common on Windows drives, isn't on that list.

"I plugged in my hard drive and nothing happens." "Can I save straight from my iPhone to the hard drive?" A hard drive has more connection requirements than a flash drive or SSD. This guide covers the three things to check before you connect, the setup for each port, the steps in the Files app, and how to save directly to the drive.

## What should you check before you connect an external hard drive to iPhone?

Check power, format, and partitions. The rules come from [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

| Check | Requirement | How to check |
| --- | --- | --- |
| Power | Whether the drive supplies its own power | Look for a power adapter port on the drive and any power requirement in the manufacturer's specs |
| Format | APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT | Check in Disk Utility on a Mac or File Explorer on Windows |
| Partitions | A single data partition | Check in Disk Utility on a Mac or Disk Management on Windows |

A single file on FAT32 can't exceed 4 GiB. exFAT's maximum file size is 2^64-1 bytes. Both figures come from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). If the drive will hold long videos and also be opened on a Windows PC, exFAT is the right choice.

An NTFS drive has to be reformatted before an iPhone can use it. Formatting erases everything on the drive, so copy your files elsewhere first. The steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). That guide uses a USB flash drive as the example, but the Mac and Windows steps are the same for an external hard drive.

## How do you add power when you connect an external hard drive to iPhone?

If the drive doesn't supply its own power, connect it like this, depending on your iPhone's port.

| iPhone port | Setup in Apple's guide |
| --- | --- |
| USB-C | iPhone → powered USB hub → hard drive |
| Lightning | iPhone → Lightning to USB 3 Camera Adapter (with a USB power adapter connected) → hard drive |

The source is [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios). The Lightning to USB Camera Adapter is also listed for connecting storage devices. But the setup Apple gives for adding power uses the USB 3 Camera Adapter.

We didn't test any particular hard drive, hub, or cable, and we don't recommend one. We didn't measure power draw either. If the manufacturer's specs list a power requirement, follow it. Adapter types are covered in more detail in [iPhone OTG USB: which adapter do you need?](/blog/en/iphone-otg-usb)

## How to connect an external hard drive to your iPhone

These steps follow [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

1. Check the drive's format and number of partitions.
2. If the drive needs power, connect its power adapter or a powered hub first.
3. Plug the cable, hub, or adapter into the iPhone's charging port and connect the drive.
4. Open the Files app and tap Browse.
5. Tap the drive's name under Locations.
6. When you're done, remove the drive from the charging port.

If you don't see Locations, tap Browse again. Touch and hold the drive's name to rename it, erase it, or get info. The source is [Apple's guide to transferring files](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios). If you unplug the drive before a copy finishes, some files might not make it, so wait until the progress indicator is gone.

## How to save directly from iPhone to an external hard drive

Once the drive appears in Files, you can save to it without a computer. The app you use depends on what you're saving.

| What to save | App | How | Source |
| --- | --- | --- | --- |
| Photos, videos | Photos | Tap the Share button, tap Export Unmodified Originals, then choose the drive | [Apple's photo download guide](https://support.apple.com/en-us/111762) |
| Documents, files | Files | Touch and hold to copy, then paste in a folder on the drive | [Apple's file transfer guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) |
| ProRes video | Camera | On supported models, record straight to the drive | [Apple's ProRes guide](https://support.apple.com/en-us/109041) |

Detailed steps for saving photos, videos, and contacts item by item, plus what to check afterward, are in [how to back up iPhone to an external hard drive](/blog/en/backup-iphone-external-drive).

## Can an iPhone record ProRes video straight to an external hard drive?

On supported models, you can try it if the drive meets the conditions. According to [Apple's ProRes guide](https://support.apple.com/en-us/109041), iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models can record ProRes directly to an external storage device connected with USB-C. The conditions are below.

| Condition | Apple's requirement |
| --- | --- |
| Format | exFAT |
| 4K60 ProRes | Write speed of at least 220 MB per second |
| 4K120 ProRes | Write speed of at least 440 MB per second, and reformat before each recording session |
| If the drive is too slow | You might get a Slow Recording Speed message |

Write speeds vary by drive. We didn't measure any hard drive's speed. Compare the write speed in the manufacturer's specs with the requirements above. Apple says ProRes files are up to 30 times larger than HEVC files. To record to your iPhone instead, disconnect the external storage device.

## What to do when your iPhone doesn't show the hard drive

These checks come from Apple's guides, in the order to try them.

| Step | Check | What to do |
| --- | --- | --- |
| 1 | Files app screen | Tap Browse again to open Locations |
| 2 | Power | Reconnect with the drive's power adapter, a powered hub, or the USB 3 Camera Adapter with a USB power adapter |
| 3 | Cable | Make sure the cable is USB-C compliant and try a different one |
| 4 | Format and partitions | Check on a Mac or PC. If it's NTFS or has several partitions, move your files off and reformat |
| 5 | Another drive | Plug in a USB flash drive to tell whether the problem is the hard drive or the iPhone |

The cable guidance is in [Apple's USB-C guide](https://support.apple.com/en-us/105099). The same guide notes that some USB-C accessories and cables can interfere with Wi-Fi or cellular connections. If your connection slows while the drive is plugged in, disconnect it when you finish.

## What sets the transfer speed to an external hard drive?

The iPhone model, the cable, and the drive itself. The iPhone-side maximums come from [Apple's USB-C guide](https://support.apple.com/en-us/105099) and [Apple's camera adapter guide](https://support.apple.com/en-us/118280).

| iPhone | Maximum standard | Condition |
| --- | --- | --- |
| iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models, iPhone Duo | USB 3.2 Gen 2, up to 10Gbit/s | Use a separate USB 3 cable that supports 10Gbit/s |
| Other USB-C iPhone models | USB 2 | The cable in the box also runs at USB 2 speeds |
| Lightning iPhone models | USB 2 | USB 2 speeds regardless of adapter |

These figures are maximums for the standard, and the drive's own speed is a separate limit. We didn't measure real transfer speeds. To compare connection requirements with an external SSD, see [connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect).

## How to save to a USB drive regularly

The app below is described for USB flash drives. We haven't checked how it works with external hard drives.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

Connection, formats, and capacity for flash drives are collected in the [iPhone flash drive guide](/blog/en/iphone-usb-drive-guide).

## FAQ: connecting an external hard drive to iPhone

### Can I connect an external hard drive to iPhone without extra power?

It depends on the drive. Apple says external hard drives often require an external power source. If the drive doesn't connect, try a powered hub, or the USB 3 Camera Adapter with a USB power adapter.

### Can I connect an external hard drive to a Lightning iPhone?

Yes. Following Apple's guide, use the Lightning to USB 3 Camera Adapter or the Lightning to USB Camera Adapter. To add power, connect a USB power adapter to the USB 3 Camera Adapter. Transfers run at USB 2 speeds.

### Will an NTFS hard drive open on iPhone?

NTFS isn't on Apple's list of external storage formats. To use the drive with an iPhone, move your files off it and format it as exFAT. If you'd rather not reformat, the steps for moving photos through a Windows PC are in [how to back up iPhone to an external hard drive](/blog/en/backup-iphone-external-drive).

### Can I format an external hard drive on iPhone?

On an iPhone with USB-C, touch and hold the drive's name in Files, tap Erase, and choose APFS, ExFAT, or MS-DOS (FAT). On a Lightning iPhone, format it on a Mac or Windows PC. Formatting erases everything on the drive.

### Is the data on the hard drive encrypted?

It depends on the format. Apple's list includes APFS (encrypted). [Microsoft's comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. If you lose an exFAT hard drive, someone else can read it, so store it carefully.
