---
title: "Mac SD Card Not Showing Up? Check These Steps in Order"
description: "When a Mac SD card is not showing up, check the allow-accessory prompt, Finder settings, Show All Devices and Mount in Disk Utility, System Information, and First Aid. Based on Apple's official guides."
date: 2026-11-27
---

## Key takeaways

When your Mac SD card is not showing up, don't format it first. Formatting erases everything on the card.

Check four places: the allow-accessory prompt, Finder settings, Disk Utility, and System Information. What to do next depends on how far the card gets.

If another Mac or another reader can't see it either, suspect the card itself and contact the card maker.

"I put the card in my MacBook Pro slot and nothing happens." "I plugged in a reader, but the card isn't in the Finder sidebar." This guide covers what to check when a Mac can't see an SD card. It doesn't test or recommend any card or reader. Which Macs have a slot and the basic steps are in [SD card reader for Mac](/blog/en/sd-card-on-mac). For a Windows PC, see [SD card not showing up on Windows](/blog/en/sd-card-not-showing-windows).

## Mac SD card not showing up: where does it stop?

Open the Finder, Disk Utility, and System Information in turn to see how far the card gets. Find your situation in the table below.

| Where it shows up | What to suspect | Section in this guide |
| --- | --- | --- |
| A prompt asked to allow it, then went away | Accessory approval | The allow prompt |
| In Disk Utility but not in the Finder | Finder settings, mounting | Finder settings, Disk Utility |
| The volume is in Disk Utility but not mounted | Mounting | Disk Utility |
| Not in Disk Utility; System Information shows only the reader | Card, standard, how it's inserted | Card and standard |
| The reader isn't in System Information either | Reader, port, adapter | Reader and port |
| Not on another Mac or another reader either | Failed card | If it still doesn't show up |

## Should you format when you're told to?

Not right away. [Apple's SD card slot guide](https://support.apple.com/en-us/102352) says that if the card still won't mount, you might need to reformat it. But formatting erases every file on the card.

1. If a window asks you to format or initialize, cancel it.
2. Don't save new files to the card.
3. Format only after you've worked through this guide and there's nothing on the card you need.

The steps are in [how to format an SD card](/blog/en/format-sd-card).

## Did your Mac ask you to allow the SD card?

According to [Apple's guide to allowing accessories](https://support.apple.com/en-us/102282), Mac laptops with Apple silicon ask for approval when you connect a new or unknown USB accessory, Thunderbolt accessory, or SD card. Check for this prompt first, whether you use a reader or the built-in slot.

| Situation | What Apple says |
| --- | --- |
| You clicked Don't Allow | Your Mac won't recognize the card. It asks again the next time you connect it |
| Your Mac is locked | You need to unlock it before you can allow the card |
| Your Mac has been locked for 3 or more days | You might need to unlock it to use a previously allowed accessory again |

If you clicked Don't Allow, eject or remove the card, insert it again, and choose Allow. The setting is under Apple menu > System Settings > Privacy & Security > Accessories. The default for "Allow accessories to connect" is Ask for new accessories. The same prompt appears for flash drives, as covered in [how to use a flash drive on a Mac](/blog/en/usb-drive-on-mac).

## What should you watch when you reinsert the card?

These steps follow [Apple's SD card slot guide](https://support.apple.com/en-us/102352).

1. Remove the card and insert it again. Apple says a card sometimes won't mount properly if you insert it too slowly or too quickly.
2. Insert it with the metal contacts facing down and pointing toward the computer.
3. Don't force it in. Forcing media into the slot might damage it.
4. Don't insert cards thicker than 2.1mm. They might damage the slot.

If "cannot be modified" appears, the card might be locked. Eject it, slide the lock tab to unlock, and insert it again. To find the tab, see [SD card lock switch](/blog/en/sd-card-lock-switch).

## What if the SD card isn't in the Finder sidebar?

The card can be connected but hidden by a Finder setting. Follow [Apple's guide to seeing connected devices](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac).

1. In the Finder, choose Finder > Settings.
2. Click General and select External disks to show the card's icon on the desktop.
3. Click Sidebar and select External disks to show the card under Locations.

If it's still missing, move on to Disk Utility.

## How do you check the SD card in Disk Utility?

Open Disk Utility from the Finder by choosing Go > Utilities. According to [Apple's guide to viewing devices](https://support.apple.com/guide/disk-utility/view-all-devices-or-only-volumes-dskud6b39edb/mac), Disk Utility shows only volumes the first time you open it. To see the card itself, choose View > Show All Devices.

| What Disk Utility shows | What to do | What not to do |
| --- | --- | --- |
| The volume isn't mounted | Select the volume and click the Mount button | Nothing |
| The card and volume appear but files won't open | Copy files first, then run First Aid | Erase |
| Only the card appears, with no volume | Check with another reader and another Mac first | Erase |
| The card doesn't appear at all | Check for the reader in System Information | Nothing |

[Apple's guide to mounting a volume](https://support.apple.com/guide/disk-utility/mount-a-volume-thats-been-ejected-dskutl1027/mac) says that if you select an ejected volume in Disk Utility and click Mount, it becomes available in the Finder. Disconnecting and reconnecting the card also makes the volume available again.

## When should you run First Aid?

Run it when the volume shows up but files won't open or you get errors. According to [Apple's guide to repairing a storage device](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac), First Aid checks for and fixes errors in formatting and directory structure. It can't detect or repair every problem.

1. In Disk Utility, choose View > Show All Devices.
2. Select the card's volume in the sidebar, click First Aid, then click Run.
3. If there's a container, run it on the container the same way.
4. Finally, select the card itself (the top item) and run it.

Apple says to try again if First Aid fails. If that doesn't work, it says to back up as much data as you can and reformat. If problems continue, the disk may be physically damaged. If the card shows up, copy your files before you run checks. The order is in [repairing an SD card](/blog/en/sd-card-corrupted).

## What if it isn't in Disk Utility either?

Open System Information. According to [Apple's System Information guide](https://support.apple.com/guide/system-information/welcome/mac), the system report shows the hardware installed on or connected to your Mac.

1. Choose Apple menu > System Settings > General > About.
2. Click System Report. You can also hold the Option key and choose Apple menu > System Information.
3. Look in the hardware list for the reader or the card.

| System Information result | What to suspect | What to do |
| --- | --- | --- |
| No reader | Reader, port, adapter, hub | Plug directly into another port, then try another reader |
| The reader appears but no card | Card, standard, how it's inserted | Reinsert the card and compare the card and reader standards |

## How do you match the card and reader standards?

First check that your Mac's slot accepts the card. These are the conditions in [Apple's guide](https://support.apple.com/en-us/102352).

| Item | What Apple says |
| --- | --- |
| Supported cards | MMC, Default Speed, High Speed, UHS-I |
| UHS-II support | Mac Studio 2022 or later, MacBook Pro 2021 or later, iMac 2020, iMac Pro |
| miniSD, microSD | Use an adapter |
| Not supported | SDIO cards |

If you use a reader, check the capacity standard too. According to the [SD Association's capacity guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/), SDXC cards work in SDXC and SDUC devices, and SDUC cards work only in SDUC devices. Compare the SDHC or SDXC mark on the card with the reader's spec sheet. The standards are explained in [SDHC vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc), and how to pick a reader is in [how to choose an SD card reader](/blog/en/choose-sd-card-reader).

If your microSD card is in an adapter, try a different adapter. How to use one is in [micro SD card and SD card](/blog/en/microsd-vs-sd).

## What if the SD card still doesn't show up?

If another Mac, a Windows PC, or another reader can't see it either, suspect the card. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says it's a standards body that doesn't make or sell products, so it asks you to contact the card maker directly about technical problems.

If the card shows up in a reader but not in the built-in slot, suspect the Mac's slot and contact Apple Support about service. This guide doesn't test or recommend any data recovery software or service.

## What if your iPhone can't see the SD card?

This guide is for Macs. If you connect a reader to an iPhone and the card doesn't appear in the Files app, see the guides below.

| Situation | Read this |
| --- | --- |
| The card doesn't appear after you connect a reader to iPhone | [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader) |
| You want reader types and card formats in one place | [iPhone SD card guide](/blog/en/iphone-sd-card-guide) |
| iPhone doesn't detect external storage | [Can't connect external storage devices to iPhone?](/blog/en/iphone-drive-not-detected) |

## Mac SD card not showing up: FAQ

### My SD card works in the camera but isn't showing up on my Mac.

Check the Mac side first. See whether you clicked Don't Allow on the accessory prompt, whether External disks is off in Finder settings, and whether the volume is unmounted in Disk Utility.

### I clicked Don't Allow by mistake.

According to Apple, your Mac asks again the next time you connect the accessory. Remove the card, insert it again, and choose Allow.

### The card is in Disk Utility but not in the Finder.

The volume may not be mounted. Select it and click Mount. If it's still missing, check that External disks is selected in Finder > Settings.

### My MacBook Air has nowhere to insert the card.

In Apple's list, the MacBook Air models with an SDXC slot are the 13-inch models from 2013 through 2017. Other MacBook Air models need a USB reader.

### What if no other Mac can see the SD card either?

Suspect a failed card. The SD Association asks you to contact the card maker about technical problems. Check the warranty terms from the seller and the maker.
