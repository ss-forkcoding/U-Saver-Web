---
title: "How to Transfer Photos from iPhone to SSD Without a Computer"
description: "Transfer photos from iPhone to SSD with the Photos app, and record ProRes video straight to an external SSD on supported models. Covers format, file size, speed, and power requirements from Apple's guides."
date: 2026-11-14
---

## Key takeaways

There are two ways to transfer photos from iPhone to SSD. For photos and videos you've already taken, use Export Unmodified Originals in the Photos app and save them to the SSD. On supported models, you can also record ProRes video straight to the SSD.

Neither method needs a computer. The SSD must have a single data partition and use a format on Apple's list.

To record ProRes directly to an SSD, you need an iPhone 15 Pro or a later Pro model, an exFAT-formatted SSD, and write speeds of at least 220 MB per second.

"My videos are so large that my iPhone storage fills up fast." "Once they're on the SSD, can I delete them from my iPhone?" These are the reasons people who shoot a lot of video look at SSDs. This guide covers how to move photos and videos to an SSD, where large videos get stuck, and how to free up iPhone storage afterward.

## What are the ways to transfer photos from iPhone to SSD?

The method depends on whether you move files after you shoot or save them to the SSD while you shoot.

| Method | What it moves | Computer | Source |
| --- | --- | --- | --- |
| Export originals from the Photos app | Photos and videos you've taken | Not needed | [Apple's guide to downloading iCloud photos](https://support.apple.com/en-us/111762) |
| Record ProRes directly to the SSD | New ProRes videos | Not needed | [Apple's ProRes guide](https://support.apple.com/en-us/109041) |
| Import with Image Capture on a Mac, then copy to the SSD | Photos and videos you've taken | Mac needed | [Apple's ProRes guide](https://support.apple.com/en-us/109041) |

This guide covers the first two methods, which work without a computer. To also save contacts and files to an SSD, see [how to back up iPhone to SSD](/blog/en/backup-iphone-to-ssd).

## What should you check before you transfer photos to an SSD?

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an external storage device must have a single data partition. It must be formatted as APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT.

| Check | Requirement | What changes for video |
| --- | --- | --- |
| Format | A format on Apple's list | FAT32 can't hold a file larger than 4 GiB |
| Partitions | A single data partition | Same |
| Connection | A cable or adapter that fits your iPhone's port | Direct ProRes recording needs a USB-C connection |
| Free space | More than the photos and videos you'll move | ProRes files are up to 30 times larger than HEVC files |

The 4 GiB FAT32 limit comes from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). The ProRes file size comes from [Apple's ProRes guide](https://support.apple.com/en-us/109041). Prepare an SSD for long videos with exFAT. The steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat), and cables and power are covered in [connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect).

## Steps to transfer photos and videos from iPhone to SSD

These steps follow [Apple's guide to downloading iCloud photos](https://support.apple.com/en-us/111762).

1. Connect the SSD to your iPhone, then check that its name appears under Browse in the Files app.
2. In the Photos app, go to your Library.
3. Tap Select, then choose the photos and videos to move.
4. Tap the Share button, then tap Export Unmodified Originals.
5. In the Files screen, tap the Back arrow and choose the SSD under Locations.
6. Tap Save, and leave the SSD connected until it finishes.

If you use iCloud Photos, downloading the originals needs Wi-Fi. Export Unmodified Originals saves the original before any edits. If you need the edited version of a photo, check it separately after saving. With a large library, move photos by month or year so you can tell where things stopped if a transfer is interrupted. The steps match [how to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

## Can you record ProRes video directly to an SSD?

Yes, on supported models. According to [Apple's ProRes guide](https://support.apple.com/en-us/109041), iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models can record ProRes directly to an external storage device connected with USB-C. iPhone 13 Pro and 14 Pro models record ProRes to built-in storage.

| Recording | Supported models | SSD requirement |
| --- | --- | --- |
| 4K 60 fps ProRes | iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models | Write speed of at least 220 MB per second, maximum power draw of 4.5 W |
| 4K 120 fps ProRes | iPhone 16 Pro, 17 Pro, and 18 Pro models | Write speed of at least 440 MB per second, maximum power draw of 4.5 W. Reformat before each recording session |
| All | Models above | exFAT format |

If you attach a slower SSD, you might see a Slow Recording Speed message. According to [Apple's guide to recording ProRes](https://support.apple.com/guide/iphone/record-prores-videos-iphde02c478d/ios), the 128 GB iPhone 15 Pro and 16 Pro models record ProRes to internal storage only at 1080p 30 fps. To shoot 4K ProRes on those models, you need an SSD that meets the requirements.

Here's how to turn on ProRes. The source is [Apple's ProRes guide](https://support.apple.com/en-us/109041).

1. Open Settings, tap Camera, then tap Formats.
2. Turn on Apple ProRes under Video Capture.
3. Connect the SSD with USB-C.
4. Open Camera and select Video mode.
5. Tap the resolution and frame rate values onscreen, then choose the ProRes format, resolution, and frame rate.

To record to your iPhone again, disconnect the SSD. We didn't measure any SSD's write speed or power draw, and we don't recommend a product. Check both numbers in the manufacturer's specifications.

## How do you free up iPhone storage after moving photos to an SSD?

[Apple's ProRes guide](https://support.apple.com/en-us/109041) says to export large photos or videos to an external storage device, delete them in the Photos app, then delete them permanently from Recently Deleted. If any of these five is a "no," don't delete anything.

1. Photos on the SSD open in the Files app.
2. Your longest video plays to the end.
3. The number of files on the SSD is equal to or greater than the number of photos and videos you selected.
4. Your important photos and videos have another copy somewhere other than the SSD.
5. You have a plan in case the SSD is lost.

According to [Apple's guide to iCloud storage](https://support.apple.com/en-us/108922), you can recover photos and videos from Recently Deleted for 30 days. If you're over your iCloud storage limit, deleted items are removed right away. Tips for moving large videos are in [how to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb).

## Saving to a USB drive on a regular basis

The app below is described for USB flash drives. We haven't checked how it works with external SSDs.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: transfer photos from iPhone to SSD

### Can I transfer photos from iPhone to SSD without a computer?

Yes. Connect the SSD to your iPhone, then use Export Unmodified Originals in the Photos app and choose the SSD.

### Videos over 4 GB won't save to my SSD. Why?

The SSD is likely FAT32, which can't hold a file larger than 4 GiB. Move your files off, then format it as exFAT.

### Can I record regular video directly to an SSD?

In Apple's guides, recording directly to external storage applies to ProRes video. For regular HEVC video, shoot first, then export it to the SSD from the Photos app.

### Can a Lightning iPhone record ProRes directly to an SSD?

Apple lists iPhone 15 Pro and later Pro models, which connect with USB-C. On a Lightning iPhone, shoot first, then move the videos to the SSD from the Photos app.

### Are photos on the SSD encrypted?

It depends on the format. [Microsoft's comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. Anyone who has the SSD can open its contents, so store it carefully.
