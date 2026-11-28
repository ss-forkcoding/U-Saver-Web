---
title: "Does iPhone Support OTG? Connect a USB Drive"
description: "Yes. iPhone reads USB drives through the right connector or adapter, with no OTG mode to turn on. See the adapter each model needs and what to check."
date: 2026-11-09
updated: 2026-11-27
---

Yes, an iPhone works with a USB flash drive. Apple never calls it OTG, and there's no setting to switch on. Plug in a drive with the right connector or adapter, and its files show up in the Files app. Which adapter you need depends only on your iPhone's port.

## Start with your iPhone's port

iPhone 15 and later have a USB-C port. iPhone 14 and earlier use Lightning. Match the port to the plug on your drive:

| iPhone port | Drive plug | What you need |
| --- | --- | --- |
| USB-C | USB-C | Nothing. Plug it straight in |
| USB-C | USB-A | A USB-C to USB-A adapter |
| Lightning | USB-A | Lightning to USB Camera Adapter or Lightning to USB 3 Camera Adapter |
| Lightning | USB-C | One of those adapters plus a USB-A to USB-C converter. A USB-A drive is simpler |

The two Lightning adapters differ in one way: the USB 3 version has a port for a power adapter. That matters for external hard drives, which often need more power than the iPhone supplies. A typical flash drive usually works on the plain adapter.

## Will an Android OTG cable work?

A micro-USB OTG cable won't fit any iPhone. A USB-C OTG adapter will fit iPhone 15 and later, but these adapters vary, so check that the drive appears in Files before you rely on it.

## Find the drive in the Files app

1. Plug the drive into the iPhone's charging port, through an adapter if needed.
2. Open Files and tap Browse.
3. Tap the drive's name under Locations. If Locations isn't showing, tap Browse again.

According to [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), you can also reformat a drive from the Files app, so you don't need a Mac or PC. Formatting erases everything on the drive, so copy anything you need first.

For moving photos and videos, see [how to transfer iPhone photos to a USB drive](/blog/en/iphone-photos-to-usb). For copying and ejecting files in Files, see [the iPhone flash drive guide](/blog/en/iphone-flash-drive-guide).

## iPhone not recognizing the USB drive? Check these four things

| Check | What Apple requires | Fix |
| --- | --- | --- |
| Format | APFS, Mac OS Extended (HFS+), exFAT, FAT32 or FAT. NTFS isn't on the list | Reformat as exFAT |
| Partitions | A single data partition | Reformat as one partition |
| Power | External hard drives often need their own power | USB-C iPhone: a powered USB hub. Lightning iPhone: the USB 3 Camera Adapter with a power adapter |
| Adapter | A faulty or incompatible adapter | Try a different drive to test the adapter |

Drives used on Windows are often NTFS. [Formatting a USB drive as exFAT](/blog/en/format-usb-exfat) walks through the change.

## Speed depends on the model and the cable

[Apple lists](https://support.apple.com/en-us/105099) USB 3 speeds of up to 10Gbps on iPhone 15 Pro, 16 Pro, 17 Pro and 18 Pro models and iPhone Duo. Other models transfer at USB 2 speed.

Even on a Pro model, the cable in the box only supports USB 2. You need a USB 3 cable rated for 10Gbps and a USB 3 drive to get the faster speed. You won't notice it with a few photos. You will with tens of gigabytes of video.

## Save photos and contacts to USB with U-Saver

U-Saver, made by NextGenAI, saves iPhone photos, videos and contacts to an ordinary USB flash drive. It's on the App Store and needs iOS 26 or later. It costs ₩4,900 in Korea as a one-time purchase. The drive must be exFAT or FAT32, and FAT32 can't hold files over 4GB. U-Saver doesn't save messages, app data or iPhone settings, and what it writes to the drive isn't encrypted. Read [six things to check before using U-Saver](/blog/en/before-you-buy) first.

## FAQ

### Does iPhone 15 or 16 support OTG?

Yes. Both have USB-C, so a USB-C flash drive plugs straight in and appears in Files.

### Do I need to buy an OTG cable?

Not if you're plugging a USB-C drive into a USB-C iPhone. For a USB-A drive, or any Lightning iPhone, you need an adapter.
