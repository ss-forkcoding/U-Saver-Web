---
title: "SD Card Reader for Mac: Which Macs Have a Slot, and How to Use an SD Card"
description: "Check whether your Mac has an SD card slot or needs an SD card reader for Mac. Supported cards, opening and ejecting a card, importing photos in the Photos app, what to check when the card doesn't show up, and formatting in Disk Utility, based on Apple documentation."
date: 2026-11-20
---

## Key takeaways

Before you buy an SD card reader for Mac, check whether your Mac already has an SD card slot. Apple publishes the list of models that have one. A Mac that isn't on the list needs a USB SD card reader.

When you insert a card, open it in the Finder. You can also bring photos and videos over with Import in the Photos app. When you're done, drag the card's icon to the Trash to eject it, then remove it.

If the card doesn't show up, reinsert it and check your Finder settings and the lock switch. If that doesn't help, use First Aid in Disk Utility. Format only as a last step, after you've copied your files off.

"Does my MacBook have an SD slot?" "I inserted the card, but it's not in the Finder." This guide covers only the steps for using an SD card on a Mac. For Windows PCs too, see [how to connect an SD card to your computer](/blog/en/sd-card-to-pc).

## Does your Mac have an SD card slot?

According to [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352), these models have an SDXC card slot.

| Mac type | Models with an SDXC slot |
| --- | --- |
| Mac Studio | 2022 or later |
| 14-inch and 16-inch MacBook Pro | 2021 or later |
| MacBook Pro | 2011 through 2015 |
| Mac mini | 2011 through 2014 |
| 13-inch MacBook Air | 2013 through 2017 |
| 27-inch and 21.5-inch iMac | 2010 or later |

The same list appears in [Apple's guide to the ports on your Mac](https://support.apple.com/en-us/109523). That guide says the slot works with SD, SDHC, SDXC, MMC, and UHS-II media cards.

A Mac that isn't on the list has no slot. Use a USB reader instead.

## What SD card reader for Mac do you need?

Pick a reader that fits your Mac's USB ports. If your Mac only has USB-C ports, use a USB-C reader or go through an adapter. This guide doesn't recommend specific products. It lists what to check.

| What to check | Why |
| --- | --- |
| The reader's plug | It has to match your Mac's ports (USB-C or USB-A) |
| Card size | A reader that only takes SD cards needs an adapter for microSD |
| Capacity standard | SDXC cards need a reader that supports SDXC or later |
| Bus interface | UHS-II cards work in UHS-I readers, but not at UHS-II speed |

Capacity compatibility follows the [SD Association's capacity guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/). Bus compatibility follows the [SD Association's bus interface guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/). For more on picking one, see [how to choose an SD card reader](/blog/en/choose-sd-card-reader). For plugging in and removing a USB-C reader, see [how to use a USB-C SD card reader](/blog/en/usb-c-sd-card-reader).

## Which cards does the Mac SD slot support?

These are the slot conditions in [Apple's guide](https://support.apple.com/en-us/102352).

| Item | Apple's guidance |
| --- | --- |
| Supported cards | MMC, Default Speed, High Speed, UHS-I |
| UHS-II support | Mac Studio 2022 or later, MacBook Pro 2021 or later, iMac 2020, iMac Pro |
| miniSD, microSD | Use an adapter |
| Not supported | SDIO cards |
| Caution | Cards thicker than 2.1 mm might damage the slot |

A UHS-II card still works in a Mac without UHS-II support. It just runs at UHS-I speed. For the differences, see [UHS-I vs UHS-II vs SD Express](/blog/en/uhs-sd-card). For microSD and adapters, see [micro SD card vs SD card](/blog/en/microsd-vs-sd).

## How to open and eject an SD card on a Mac

These steps follow [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352).

1. Insert the card into the slot with the metal contacts facing down and pointing toward the Mac. With a reader, put the card in the reader and plug the reader into the Mac.
2. Don't force it in. Apple says forcing media into the slot might cause damage.
3. When the card's icon appears, open it in the Finder and copy the files to a folder on your Mac.
4. When you're done, drag the card's icon to the Trash to eject it.
5. After the icon disappears, remove the card.

Apple warns that removing a card while the Mac is asleep could lead to data loss. Wake the Mac and eject the card before you remove it.

## How to import photos from an SD card with Photos on Mac

These steps follow [Apple's Photos import guide](https://support.apple.com/guide/photos/import-from-storage-devices-phtae4e05c67/mac).

1. Insert the card into your Mac's SD card slot, or put it in a reader and connect the reader to your Mac.
2. Open the Photos app.
3. Choose File > Import, select the photos or videos you want, then click Review for Import.
4. To bring in everything new, click Import All New Photos. To bring in only some, click the photos you want, then click Import Selected.
5. If a message asks whether to delete or keep the photos on the card after importing, click Delete Items or Keep Items.
6. When the import is done, eject the card.

Imported photos appear in the Imports and Photos albums in the sidebar. To keep the originals on the card, choose Keep Items in step 5. To keep file names and folder structure as they are, copying in the Finder is simpler.

## What if the SD card doesn't show up in the Finder?

| What you see | What to check |
| --- | --- |
| Nothing happens when you insert the card | Remove the card and insert it again. Apple says a card may not mount if you insert it too slowly or too quickly |
| The card seems connected, but there's no icon | In Finder > Settings, turn on external disks in the General and Sidebar tabs |
| You see "cannot be modified" | Eject the card, unlock the lock switch, and reinsert it |
| A reader shows the card, but the slot doesn't | Check that the card is on the slot's supported list |
| Files won't open or you get errors | Check the card with First Aid in Disk Utility |

Showing external disks in the Finder is covered in [Apple's guide to seeing connected devices](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac). To find the lock switch, see [the SD card lock switch](/blog/en/sd-card-lock-switch).

## How do you use First Aid in Disk Utility?

According to [Apple's guide to repairing a storage device](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac), First Aid checks for and fixes errors in a device's formatting and directory structure. It can't detect or repair every problem.

1. Open Disk Utility.
2. Choose View > Show All Devices.
3. In the sidebar, select the card's volume, click First Aid, then click Run.
4. If there's a container, run it on the container the same way.
5. Finally, select the card itself (the top item) and run it.

Apple says to try again if it fails. If that still doesn't work, it says to back up as much data as you can and reformat. If a window asks you to format right away, don't click it yet. Work through [what to check when an SD card isn't working](/blog/en/sd-card-not-working) first.

## How do you format an SD card on a Mac?

Formatting erases every file on the card. Copy anything you want to keep somewhere else first. Pick the format based on where you'll use the card. This table follows [Apple's guide to file system formats](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac).

| Format | Apple's guidance |
| --- | --- |
| APFS | The default file system for Macs with macOS 10.13 or later |
| MS-DOS (FAT) | For Windows volumes that are 32 GB or less |
| ExFAT | For Windows volumes that are over 32 GB |

These steps follow [Apple's guide to formatting a disk for Windows](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac).

1. Open Disk Utility and choose View > Show All Devices.
2. In the sidebar, select the card, then click Erase.
3. Choose a scheme, then choose MS-DOS (FAT) or ExFAT from the Format menu.
4. Enter a name. The name can be up to 11 characters.
5. Click Erase, then click Done.

For a card going into a camera, follow the method in the device's manual first. Formatting with the SD Association's own tool is covered in [how to use the SD Memory Card Formatter](/blog/en/sd-card-formatter). For choosing a format by capacity, see [how to format an SD card](/blog/en/format-sd-card).

## Want to use an SD card with an iPhone?

This guide covers the Mac. To connect a card to an iPhone, read these.

| What you want to do | Article |
| --- | --- |
| Connect an SD card reader to an iPhone | [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader) |
| Move iPhone photos to a card | [Move iPhone photos to an SD card](/blog/en/iphone-photos-to-sd-card) |
| See reader types and requirements | [The complete iPhone SD card guide](/blog/en/iphone-sd-card-guide) |

## SD card reader for Mac FAQ

### Does the MacBook Air have an SD card slot?

On Apple's list, the MacBook Air models with an SDXC slot are the 13-inch models from 2013 through 2017. Other MacBook Air models need a USB reader.

### Can I put a microSD card straight into a Mac's slot?

No. Apple says to use an adapter for microSD and miniSD cards.

### My UHS-II card is slower than I expected.

On Apple's list, the Macs that support UHS-II are Mac Studio 2022 or later, MacBook Pro 2021 or later, iMac 2020, and iMac Pro. Other models' slots support up to UHS-I. If you use a reader, check which bus interface the reader supports, too.

### Can I just pull the card out without ejecting?

That's not recommended. Apple says to drag the icon to the Trash to eject the card before removing it. It also warns that removing a card while the Mac is asleep could lead to data loss.

### Can I use a card formatted as APFS on a Windows PC?

Apple says to choose MS-DOS (FAT) or ExFAT for a disk you'll use with Windows. If the card will go between a Mac and a Windows PC, format it in one of those two.
