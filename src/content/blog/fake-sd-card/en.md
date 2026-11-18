---
title: "Fake SD Card: How to Spot One and Check Its Real Capacity"
description: "A fake SD card is a counterfeit that doesn't deliver the capacity or speed printed on its package. Learn what to check before you buy, why the capacity your computer shows can be misleading, and how to test the real capacity, based on SD Association and Apple documents."
date: 2026-11-18
---

## Key takeaways

A fake SD card is a counterfeit that doesn't deliver the capacity or speed printed on its package. An [SD Association article](https://www.sdcard.org/press/thoughtleadership/keeping-it-real-how-sd-3c-fights-counterfeit-sd-memory-cards/) gives the example of a card sold as 256GB that actually holds 16GB.

You usually can't tell a fake SD card by looking at it. Check in three steps: whether the markings match the standard, what capacity your computer reports, and whether you can actually fill the card and open the files.

If you've already saved photos to a card you suspect, copy them somewhere else right away. Stop writing to the card.

"It says 256GB, but photos past a certain point are corrupted." "Copying is much slower than the label says." These complaints come up after buying cheap cards. This guide explains what a fake SD card is and what to check before and after you buy. For everything printed on a card, see [types of SD cards](/blog/en/what-is-sd-card).

## What's wrong with a fake SD card?

The SD Association points out that whoever makes or sells a counterfeit card has no obligation to follow SD specifications. The same article lists these problems.

| Problem | What the SD Association says |
| --- | --- |
| Capacity | A card packaged as 256GB may actually hold only 16GB |
| Reported capacity | Some counterfeits make a computer read them as larger than they are |
| Speed | Read and write speeds don't match the packaging |
| Video | A card with a false Speed Class can cause degraded content or lower-than-expected transfer speeds |

A card with faked capacity looks normal at first because the computer reads it as large. The problem shows up when you write past its real capacity. That's why you check right after buying.

## What should you check before buying an SD card?

1. **Check the seller.** The SD Association article recommends buying from the licensees listed on the SD-3C website or from the companies that form SD-3C. It also warns that marketplace sites often don't police their sellers, so be careful with third-party sellers.
2. **Check that capacity matches the capacity standard.** SDHC goes up to 32GB, SDXC from over 32GB to 2TB, and SDUC from over 2TB to 128TB ([SD Association capacity standards](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)). Skip a card like "SDHC 128GB" whose standard and capacity don't match. The details are in [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).
3. **Look for the capacity standard marking.** Even if a listing calls it a TF card, confirm SDHC or SDXC on the card. How TF cards relate to microSD is in [what is a TF card?](/blog/en/tf-card)

Checking the package can't guarantee a card is genuine. Run the checks below after you buy. This guide doesn't recommend any seller or product.

## Is a fake SD card one that shows less capacity than the label?

A slightly smaller number is normal. According to [Apple's guide to storage capacity](https://support.apple.com/en-us/102119), manufacturers count 1GB as 1 billion bytes, and formatting uses part of the space, so the actual formatted capacity is smaller. In binary, 1GB is 1,073,741,824 bytes.

| What you see | What it means |
| --- | --- |
| Slightly less than the label | Normal, from decimal vs binary counting and formatting |
| Much less than the label | Contact the seller and the manufacturer |
| Same as the label, but files are corrupted | Capacity may be faked, so run a fill test |

Seeing the full labeled capacity doesn't prove a card is genuine, either. The SD Association says some counterfeits make a computer read them as larger than they are.

## How do you test the real capacity of a fake SD card?

You need to write and read as much data as the card claims to hold. Test a new card before you put anything important on it.

1. Insert the card into a computer and prepare files that you also have elsewhere. Photos and videos are easy to check because you can open them.
2. Copy files until the card is almost full.
3. Watch for errors or a sudden drop in speed while copying.
4. Eject the card and insert it again.
5. Open both the first files you copied and the last ones.
6. If any files are corrupted or won't open, stop using the card and contact the seller.

There are programs that run this write-and-read test for you. This guide hasn't tested them, so it doesn't name any. To check for file system errors, use [Disk Utility First Aid on a Mac](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac) or [chkdsk on Windows](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk). These tools check the file system. They don't tell you whether a card is genuine.

## Can a manufacturer's tool verify a card?

Some manufacturers offer authentication tools. Their coverage is limited, so they don't work on every card.

For example, the [Samsung authentication utility manual](https://download.semiconductor.samsung.com/resources/user-manual/Samsung_Card-UFD_Authentication_Utility_Manual_English_1.3.pdf) (revision 1.3) says the tool distinguishes official Samsung products from others. For memory cards, it supports only products with the V mark. The manual lists Windows 7, 8, 8.1, and 10 as system requirements and says results generally appear within 5 seconds.

For other brands, contact the manufacturer's support. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) also tells consumers with SD product issues to contact the manufacturer directly.

## What if you've already saved photos to a fake SD card?

1. Stop saving new files to the card.
2. Copy the files that still open to a computer or another storage device.
3. Open the copies to make sure they aren't corrupted.
4. Contact the seller or manufacturer before you decide what to do with the card.

If the card isn't recognized or won't format, see [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) Formatting erases the files on the card, so move what you need first.

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: fake SD card

### Can you spot a fake SD card by how it looks?

It's hard. People compare packaging and printing, but these aren't official manufacturer criteria. Check that the markings match the standard and run a fill test as well.

### If my computer shows 256GB, is the card real?

That alone doesn't tell you. The SD Association says some counterfeits make a computer read them as larger than they are. You need to fill the card and open the files.

### The card shows a bit less than the label. Is it fake?

A slightly smaller number is normal. Apple explains that manufacturers count 1GB as 1 billion bytes and that formatting uses part of the space.

### If the card is slower than the label, is it fake?

Speed also depends on the reader, the connection, and the device, so slowness alone doesn't prove a card is fake. The SD Association says counterfeit speeds may not match the packaging. Compare with another card in the same reader. What the speed markings mean is in [class 10 SD card, U3, and V30](/blog/en/sd-card-speed-class).

### Can I get photos back from a fake card?

No result can be promised. The SD Association FAQ says to follow the card manufacturer's instructions for retrieving deleted pictures. Stop writing to the card and copy off the files that still open.
