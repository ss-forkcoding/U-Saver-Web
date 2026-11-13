---
title: "Connecting an SSD to iPhone: Cables, Formats, Power, and Speed"
description: "What you need for connecting an SSD to iPhone: the right cable or adapter, the formats iPhone reads, what to do when power runs short, and transfer speeds by model, based on Apple's guides."
date: 2026-11-13
---

## Key takeaways

Connecting an SSD to iPhone means plugging an external SSD into the iPhone's charging port and opening it in the Files app. An iPhone with USB-C connects with a USB-C cable. A Lightning iPhone needs a camera adapter.

The SSD needs a single data partition and a format on Apple's list. NTFS isn't on that list.

Only some Pro models support USB 3 speeds. The cable that comes with your iPhone runs at USB 2 speeds, so you need a separate USB 3 cable for faster transfers.

"I plugged in my SSD and my iPhone doesn't show it." "Copying videos is slower than I expected." Both are common the first time you connect an external SSD to an iPhone. This guide covers what to check before you connect, the steps to connect, and what to try when the drive doesn't appear.

## What do you need for connecting an SSD to iPhone?

The iPhone's port decides how you connect. According to [Apple](https://support.apple.com/en-us/105099), iPhone 15 and later models have a USB-C connector. Earlier models use Lightning.

| iPhone port | How to connect | Source |
| --- | --- | --- |
| USB-C | If the SSD has a USB-C port, use a cable with USB-C on both ends | [Apple's USB-C guide](https://support.apple.com/en-us/105099) |
| Lightning | Use the Lightning to USB 3 Camera Adapter or the Lightning to USB Camera Adapter | [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |

Apple says devices and cables that aren't compliant with the USB-C standard might not work as expected. We didn't test any particular SSD or cable, and we don't recommend one. Adapter types are covered in more detail in [iPhone OTG USB: which adapter do you need?](/blog/en/iphone-otg-usb)

## Which external SSD formats can an iPhone read?

According to [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an external storage device must have only a single data partition. It must use one of these formats.

| Format | iPhone | Works well with |
| --- | --- | --- |
| APFS, APFS (encrypted), macOS Extended (HFS+) | Reads it | iPhone, Mac |
| exFAT | Reads it | iPhone, Mac, Windows |
| FAT32, FAT | Reads it | Older devices too. A single file can't exceed 4 GiB |
| NTFS | Not on the list | Windows |

The FAT32 file size limit comes from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). The same table lists 2^64-1 bytes as exFAT's maximum file size. If the SSD will also be used with a Windows PC and hold long videos, exFAT is the right choice.

A new SSD's format can differ from product to product. Check the format and number of partitions on a Mac or PC before connecting. The steps to change the format are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). That guide uses a USB drive as the example, but the iPhone Files app and Mac Disk Utility steps are the same for an external SSD.

## How to connect an external SSD to your iPhone

These steps follow [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

1. Confirm the SSD has a single data partition in a format on Apple's list.
2. If the SSD holds files you want to keep, copy them elsewhere before changing the format.
3. Get the cable or adapter that matches your iPhone's port.
4. Plug the cable or adapter into the iPhone's charging port and connect the SSD.
5. Open the Files app, tap Browse, then tap the SSD's name under Locations.
6. When you're done, remove the SSD from the charging port.

If you don't see Locations, tap Browse again. Touch and hold the SSD's name to rename it, erase it, or get info. The source is [Apple's guide to transferring files](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios).

## Does connecting an SSD to iPhone need external power?

Apple says external hard drives often require an external power source when used with iPhone. Apple's guide doesn't give a separate rule for external SSDs. If the SSD doesn't connect or keeps disconnecting, try adding power in one of these ways.

| iPhone port | How Apple says to add power |
| --- | --- |
| USB-C | Connect through a powered USB hub |
| Lightning | Use the Lightning to USB 3 Camera Adapter connected to a USB power adapter |

The source is [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios). We didn't measure how much power any SSD draws. If the manufacturer's specs list an external power requirement, follow it.

## How fast is an SSD on iPhone?

The model and the cable set the speed. This table combines [Apple's USB-C guide](https://support.apple.com/en-us/105099) and [Apple's camera adapter guide](https://support.apple.com/en-us/118280).

| iPhone | Maximum standard | Condition |
| --- | --- | --- |
| iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models, iPhone Duo | USB 3.2 Gen 2, up to 10Gbit/s | Use a separate USB 3 cable that supports 10Gbit/s |
| Other USB-C iPhone models | USB 2 | The cable in the box also runs at USB 2 speeds |
| Lightning iPhone models | USB 2 | USB 2 speeds regardless of adapter |

These figures are maximums for the standard. We didn't measure real transfer speeds. To move large videos, see [how to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb).

## What to do when your iPhone doesn't show the SSD

These checks come from Apple's guides, in the order to try them.

| Step | Check | What to do |
| --- | --- | --- |
| 1 | Files app screen | Tap Browse again to open Locations |
| 2 | Cable and adapter | Make sure the cable is USB-C compliant and try a different one |
| 3 | Power | Reconnect through a powered hub, or the USB 3 Camera Adapter with a power adapter |
| 4 | Format and partitions | Check on a Mac or PC. Reformat if it's NTFS or has several partitions |
| 5 | Another drive | Try a different SSD or USB drive to tell whether the problem is the SSD or the iPhone |

Apple notes that some USB-C accessories and cables can interfere with Wi-Fi or cellular connections. If your connection slows while the SSD is plugged in, disconnect it when you finish or try a different cable. The source is [Apple's USB-C guide](https://support.apple.com/en-us/105099).

## How is an SSD different from a USB flash drive?

The formats an iPhone reads and the Files app steps are the same. The way you connect differs.

| Item | External SSD | USB flash drive |
| --- | --- | --- |
| Connection | Use a cable or adapter that matches the port | A USB-C drive plugs straight into a USB-C iPhone |
| Format | A format on Apple's list, single data partition | Same |
| App | Files | Same |

Connection, formats, and capacity for flash drives are collected in the [iPhone flash drive guide](/blog/en/iphone-usb-drive-guide). If you use a card reader, see the [SD card reader for iPhone guide](/blog/en/iphone-sd-card-guide).

## How to save to a USB drive regularly

The app below is described for USB flash drives. We haven't checked how it works with external SSDs.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: connecting an SSD to iPhone

### Can I connect an external SSD to a Lightning iPhone?

Yes. Following Apple's guide, use the Lightning to USB 3 Camera Adapter or the Lightning to USB Camera Adapter. Transfers run at USB 2 speeds.

### Can an iPhone use an NTFS-formatted SSD?

NTFS isn't on Apple's list of external storage formats. To use the SSD with an iPhone, move your files off it and format it as exFAT.

### Can I use the cable that came with my iPhone?

It will connect. But according to Apple, that cable supports USB 2 speeds. On a Pro model with USB 3, use a USB 3 cable that supports 10Gbit/s for faster transfers.

### How do I save videos larger than 4 GB to an SSD?

Use exFAT or APFS. FAT32 can't hold a single file over 4 GiB.

### Is the data on the SSD encrypted?

It depends on the format. Apple's list includes APFS (encrypted). [Microsoft's comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. If you lose an exFAT SSD, someone else can read it, so store it carefully.
